import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY ,
});

export async function POST(request: NextRequest) {
  try {
    const { prompt, model, maxTokens, system } = await request.json();

    const response = await anthropic.messages.create({
      model: model || 'claude-3-7-sonnet-20250219',
      max_tokens: maxTokens || 4000,
      system: system || "You are a helpful AI assistant for artisans.",
      messages: [
        { role: 'user', content: prompt }
      ]
    });

    return NextResponse.json({ 
      content: response.content[0].text,
      id: response.id,
      model: response.model
    });
  } catch (error: any) {
    console.error('Anthropic API Error:', error);
    return NextResponse.json(
      { error: error.message || 'An error occurred with the Anthropic API' },
      { status: 500 }
    );
  }
} 