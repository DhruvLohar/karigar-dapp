import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { productName, productType, keyFeatures, targetAudience, tone } = await request.json();

    const systemPrompt = `You are an expert marketing copywriter specializing in creating compelling product descriptions for artisanal handcrafted products. Your task is to write a detailed, engaging product description that highlights the unique features, craftsmanship, and cultural significance of the product.`;

    const userPrompt = `Create a compelling product description for the following artisanal product:
    
    Product Name: ${productName}
    Product Type: ${productType}
    Key Features: ${keyFeatures}
    Target Audience: ${targetAudience}
    Tone: ${tone}
    
    The description should:
    1. Highlight the unique craftsmanship and artisanal nature of the product
    2. Emphasize cultural significance and traditional techniques used
    3. Appeal directly to the specified target audience
    4. Include sensory language that helps customers imagine using or owning the product
    5. Have a natural flow with 3-4 paragraphs (introduction, details, benefits, call to action)
    
    Please write the product description in a ${tone} tone.`;

    const response = await anthropic.messages.create({
      model: 'claude-3-7-sonnet-20250219',
      max_tokens: 1000,
      system: systemPrompt,
      messages: [
        { role: 'user', content: userPrompt }
      ]
    });

    // Extract the text content from the response
    const content = response.content[0].text;

    return NextResponse.json({ description: content });
  } catch (error: any) {
    console.error('Product Description Generator Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred generating the product description' },
      { status: 500 }
    );
  }
} 