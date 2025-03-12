import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import { NextResponse } from "next/server";

// Initialize Gemini LLM
const model = new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash",
    apiKey: process.env.GEMINI_API_KEY,
    json: true,
});

// Define the workshop script template
const workshopScriptTemplate = PromptTemplate.fromTemplate(`
  You are an expert artisan mentor. Your task is to write a structured, timestamped workshop script for an artisan. 
  The script should be detailed, yet easy to follow. Each section should be accompanied by key speaking points.
  
  **Workshop Details:**
  - **Artisan's Craft:** {craft}
  - **Total Audience:** {audience}
  - **Total Workshop Duration:** {duration} minutes
  - **Artisan's Experience Level:** {experience}
  - **Special Topics to Cover:** {specialTopics}
  
  You MUST respond with a valid JSON object that follows this structure:
  {{"workshopTitle": "Workshop Title Based on Craft",
    "craftType": "The craft type",
    "audience": "the number of people attending",
    "duration": "Duration in minutes",
    "sections": [
      {{"timeSlot": "00:00 - 05:00",
        "title": "Introduction",
        "keyPoints": [
          "Welcome participants, introduce yourself and the craft.",
          "Share a brief history or significance of this craft."
        ]
      }}
    ]
  }}
  
  Please adjust the timestamps and content based on the total workshop duration provided. Make sure your response is ONLY the JSON object with no additional text.
`);

// Create a conversation memory
const memory = new BufferMemory();

// Create a conversation chain
const chain = new ConversationChain({
    llm: model,
    memory: memory,
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { craft, audience, duration, experience, specialTopics } = body;

        // Validate required fields
        if (!craft || !audience || !duration || !experience) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Format the prompt with the received details
        const formattedPrompt = await workshopScriptTemplate.format({
            craft,
            audience,
            duration,
            experience,
            specialTopics: specialTopics || "None",
        });

        // Get response from the model
        const response = await chain.call({ input: formattedPrompt });

        // Parse the JSON response
        try {
            const jsonResponse = JSON.parse(response.response);
            return NextResponse.json(jsonResponse);
        } catch (parseError) {
            return NextResponse.json(
                { error: "Failed to parse AI response", raw: response.response },
                { status: 500 }
            );
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}