import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { productInfo, targetAudience, budget, timeframe, platforms } = await request.json();

    const systemPrompt = `You are an expert marketing strategist specializing in helping artisans and small craft businesses promote their products. Your task is to create a detailed, actionable marketing plan based on the provided information.`;

    const userPrompt = `Create a comprehensive marketing plan for an artisan with the following details:
    
    Product Information: ${productInfo}
    Target Audience: ${targetAudience}
    Monthly Budget: ₹${budget}
    Timeframe: ${timeframe === '1month' ? '1 month' : timeframe === '3month' ? '3 months' : '6 months'}
    Marketing Platforms: ${platforms.join(', ')}
    
    Please structure your response as JSON with the following format:
    {
      "summary": "A brief overview of the marketing strategy",
      "platforms": [
        {
          "name": "platform name",
          "strategy": "strategy details",
          "contentIdeas": ["idea 1", "idea 2", ...],
          "postingSchedule": "recommended posting frequency"
        },
        ...
      ],
      "calendar": [
        {
          "week": 1,
          "focus": "main focus for this week",
          "activities": ["activity 1", "activity 2", ...]
        },
        ...
      ],
      "budgetAllocation": [
        {
          "category": "category name",
          "percentage": percentage as number,
          "amount": "₹amount"
        },
        ...
      ]
    }
    
    Ensure the plan is practical, tailored to artisanal products, and achievable with the given budget.`;

    const response = await anthropic.messages.create({
      model: 'claude-3-7-sonnet-20250219',
      max_tokens: 2000,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userPrompt }
      ]
    });

    // Extract the text content from the response, handling different content types
    let content = '';
    if (response.content && response.content.length > 0) {
      const firstContent = response.content[0];
      if (typeof firstContent === 'object' && 'type' in firstContent) {
        if (firstContent.type === 'text') {
          content = firstContent.text;
        }
      }
    }
    
    // Extract JSON from the text response
    const jsonMatch = content.match(/```json\n([\s\S]*)\n```/) || 
                       content.match(/```\n([\s\S]*)\n```/) || 
                       content.match(/{[\s\S]*}/);
                       
    let marketingPlan;
    
    if (jsonMatch) {
      try {
        marketingPlan = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } catch (e) {
        // If parsing fails, try to clean up the string and parse again
        const cleanedJson = (jsonMatch[1] || jsonMatch[0])
          .replace(/(\w+):/g, '"$1":')  // Convert property names to quoted strings
          .replace(/:\s*'([^']*)'/g, ': "$1"'); // Convert single quoted values to double quotes
        
        try {
          marketingPlan = JSON.parse(cleanedJson);
        } catch (e2) {
          // If all parsing attempts fail, create a default structure
          console.error('JSON parsing failed, using fallback', e2);
          marketingPlan = createFallbackMarketingPlan(productInfo, targetAudience, budget, timeframe, platforms);
        }
      }
    } else {
      // If no JSON structure found, create a default one
      marketingPlan = createFallbackMarketingPlan(productInfo, targetAudience, budget, timeframe, platforms);
    }

    return NextResponse.json(marketingPlan);
  } catch (error: any) {
    console.error('Marketing Planner Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred generating the marketing plan' },
      { status: 500 }
    );
  }
}

// Helper function to create a fallback marketing plan if parsing fails
function createFallbackMarketingPlan(productInfo: string, targetAudience: string, budget: string, timeframe: string, platforms: string[]) {
  return {
    summary: `Marketing plan for ${productInfo.substring(0, 30)}... targeting ${targetAudience.substring(0, 30)}... with a budget of ₹${budget}.`,
    platforms: platforms.map(platform => ({
      name: platform,
      strategy: `Regular content strategy for ${platform}`,
      contentIdeas: [
        "Product showcases with high-quality images",
        "Behind-the-scenes of the creation process",
        "Customer testimonials and reviews",
        "Educational content about the craft"
      ],
      postingSchedule: "3-4 times per week"
    })),
    calendar: [
      { week: 1, focus: "Brand introduction", activities: ["Introduce products", "Share artisan story", "Highlight craftsmanship"] },
      { week: 2, focus: "Product details", activities: ["Feature specific products", "Share product benefits", "Highlight unique features"] },
      { week: 3, focus: "Customer engagement", activities: ["Respond to comments", "Share testimonials", "Run a small promotion"] },
      { week: 4, focus: "Call to action", activities: ["Direct product links", "Limited-time offers", "Showcase new items"] }
    ],
    budgetAllocation: [
      { category: "Content creation", percentage: 30, amount: `₹${Math.round(parseInt(budget) * 0.3)}` },
      { category: "Paid promotion", percentage: 40, amount: `₹${Math.round(parseInt(budget) * 0.4)}` },
      { category: "Engagement", percentage: 20, amount: `₹${Math.round(parseInt(budget) * 0.2)}` },
      { category: "Analytics", percentage: 10, amount: `₹${Math.round(parseInt(budget) * 0.1)}` }
    ]
  };
} 