import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: Request) {
    try {
        const anthropic = new Anthropic({
            apiKey: process.env.ANTHROPIC_API_KEY || ""
        });

        const body = await request.json();
        const { productDetails, trendyTweets, artisanName, location } = body;

        // Validate input
        if (!productDetails || !productDetails.name || !productDetails.description) {
            return new Response(JSON.stringify({ error: 'Product details must include name and description' }), {
                status: 400
            });
        }

        if (!Array.isArray(trendyTweets) || trendyTweets.length === 0) {
            return new Response(JSON.stringify({ error: 'Trendy tweets must be a non-empty array' }), {
                status: 400
            });
        }

        const prompt = `
        I need a JSON brochure for an artisan's product with these details:
        
        Product Information:
        ${JSON.stringify(productDetails, null, 2)}
        
        Artisan Name: ${artisanName || 'Unknown'}
        Location: ${location || 'Unknown'}
        
        Current trending tweets about similar products or in the same market:
        ${JSON.stringify(trendyTweets, null, 2)}
        
        Please create a compelling brochure in JSON format that includes:
        1. artisanInfo (name, location, biography)
        2. productDetails (name, description, materials, price, dimensions)
        3. marketingCopy (headline, tagline, description, uniqueSellingPoints)
        4. categories (array of product categories)
        5. trendAlignment (how the product aligns with current trends)
        
        Return ONLY valid JSON with no additional text. The entire response should be parseable as JSON.
        `;

        const response = await anthropic.messages.create({
            model: "claude-3-sonnet-20240229",
            max_tokens: 2000,
            temperature: 0.7,
            system: "You are a specialized brochure generation assistant for artisans. You create compelling, market-aware product brochures in JSON format only.",
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ]
        });

        const jsonString = response.content[0].type === 'text' ? response.content[0].text : '';
        const brochureData = JSON.parse(jsonString);

        return new Response(JSON.stringify(brochureData), {
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.error('Error generating brochure:', error);
        return new Response(JSON.stringify({ error: 'Failed to generate brochure' }), {
            status: 500
        });
    }
}