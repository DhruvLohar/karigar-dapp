import { DynamicStructuredTool, DynamicTool } from "@langchain/core/tools";
import { aptosClient } from "@/utils/aptosClient";
import { Account, Ed25519PrivateKey, PrivateKey, PrivateKeyVariants } from "@aptos-labs/ts-sdk";
import { z } from "zod";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS!;

// Setup admin account once
const privateKey = new Ed25519PrivateKey(
  PrivateKey.formatPrivateKey(
    process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY!,
    PrivateKeyVariants.Ed25519
  )
);
const adminAccount = Account.fromPrivateKey({ privateKey });

export const viewMessageTool = new DynamicTool({
  name: "view_messages_tool",
  description: "Checks and retrieves messages from the on-chain message board",
  func: async () => {
    try {
      const client = aptosClient();

      const checkPayload: any = {
        payload: {
          function: `${CONTRACT_ADDRESS}::message_board::exist_message`,
          type_arguments: [],
          arguments: []
        }
      };

      const viewPayload: any = {
        payload: {
          function: `${CONTRACT_ADDRESS}::message_board::get_message_content`,
          typeArguments: [],
          functionArguments: []
        }
      };

      const [exists] = await client.view(checkPayload);
      if (!exists) return "No messages found in the contract";

      const [message] = await client.view(viewPayload);
      return `Latest stored message: ${message}`;
    } catch (error) {
      return `Failed to retrieve messages: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
});

export const addMessageTool = new DynamicStructuredTool({
  name: "add_message_tool",
  description: `Adds a message to the on-chain message board. 
    Input should be the message content as a string.`,
  schema: z.object({
    message: z.string()
  }),
  func: async ({ message }) => {
    try {
      const client = aptosClient();
      const transaction = await client.transaction.build.simple({
        sender: adminAccount.accountAddress,
        data: {
          function: `${CONTRACT_ADDRESS}::message_board::post_message`,
          functionArguments: [message]
        }
      });

      const signedTxn = client.transaction.sign({
        signer: adminAccount,
        transaction,
      });

      const submittedTxn = await client.transaction.submit.simple({
        transaction,
        senderAuthenticator: signedTxn
      });

      await client.waitForTransaction({
        transactionHash: submittedTxn.hash
      });

      return `Message added successfully. Transaction hash: ${submittedTxn.hash}`;
    } catch (error) {
      return `Failed to add message: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  }
})