import { addMessageTool, viewMessageTool } from "@/tools/MessageTool";
// import { Account, Aptos, AptosConfig, Ed25519PrivateKey, Network, PrivateKey, PrivateKeyVariants } from "@aptos-labs/ts-sdk";

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MemorySaver } from "@langchain/langgraph"
import { createReactAgent } from "@langchain/langgraph/prebuilt"
// import { AgentRuntime, LocalSigner, createAptosTools } from "move-agent-kit";


const llm = new ChatGoogleGenerativeAI({
    modelName: "gemini-1.5-flash", // or "gemini-1.5-flash" for the faster model
    temperature: 0.7,
    apiKey: process.env.GEMINI_API_KEY, // Make sure to set this environment variable
});

export async function GET(_request: Request) {

    // const config = new AptosConfig({
    //     network: Network.TESTNET
    // });
    // const aptos = new Aptos(config);

    // const account = Account.fromPrivateKey({
    //     privateKey: new Ed25519PrivateKey(
    //         PrivateKey.formatPrivateKey(
    //             process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY as string,
    //             PrivateKeyVariants.Ed25519
    //         )
    //     ),
    // });
    // const signer = new LocalSigner(account, Network.TESTNET);
    // const aptosAgent = new AgentRuntime(signer, aptos, {
    //     PANORA_API_KEY: process.env.PANORA_API_KEY,
    // })
    const tools = [
        // ...createAptosTools(aptosAgent)
        viewMessageTool,
        addMessageTool
    ]
    const memory = new MemorySaver()

    // Create React agent
    const agent = createReactAgent({
        llm,
        tools,
        checkpointSaver: memory,
        //     messageModifier: `
        //     You are a helpful agent that can interact onchain using the Aptos Agent Kit. You are
        //     empowered to interact onchain using your tools. If you ever need funds, you can request them from the
        //     faucet. If not, you can provide your wallet details and request funds from the user. If there is a 5XX
        //     (internal) HTTP error code, ask the user to try again later. If someone asks you to do something you
        //     can't do with your currently available tools, you must say so, and encourage them to implement it
        //     themselves using the Aptos Agent Kit, recommend they go to https://www.aptosagentkit.xyz for more information. Be
        //     concise and helpful with your responses. Refrain from restating your tools' descriptions unless it is explicitly requested.

        // 	The response also contains token/token[] which contains the name and address of the token and the decimals.
        // 	WHEN YOU RETURN ANY TOKEN AMOUNTS, RETURN THEM ACCORDING TO THE DECIMALS OF THE TOKEN.
        //   `,
    });

    const inputs = {
        messages: [
            // { role: "user", content: "what is the current message on the board?" },
            // { role: "user", content: "add the message 'updated message 123' on the board" },
            { role: "user", content: "give me current the message?" }
        ],
    };
    const stream = await agent.stream(inputs, { streamMode: "values" });

    for await (const { messages } of stream) {
        console.log(messages);
    }

    return Response.json({});
}