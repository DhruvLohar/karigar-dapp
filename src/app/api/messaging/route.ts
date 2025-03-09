import { aptosClient } from "@/utils/aptosClient";
import { Account, Ed25519PrivateKey, PrivateKey, PrivateKeyVariants } from "@aptos-labs/ts-sdk";

const PRIVATE_KEY: any = process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_PRIVATE_KEY;
// const ACCOUNT_ADDRESS = process.env.NEXT_MODULE_PUBLISHER_ACCOUNT_ADDRESS;
const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_MODULE_ADDRESS;

const client = aptosClient();

export async function GET(request: Request) {

    try {
        const viewPayload: any = {
            payload: {
                function: `${CONTRACT_ADDRESS}::message_board::get_message_content`,
                typeArguments: [],
                functionArguments: []
            }
        };

        const checkIfExistsPayload: any = {
            payload: {
                function: `${CONTRACT_ADDRESS}::message_board::exist_message`,
                type_arguments: [],
                arguments: []
            }
        }

        const ifMessageExists = await client.view(checkIfExistsPayload);
        if (ifMessageExists[0]) {
            const message = await client.view(viewPayload);

            return Response.json({
                message: message[0]
            });
        }

        return Response.json({
            message: null
        });

    } catch (error: any) {
        console.error('Error getting message:', error);
        return Response.json(
            { error: 'Failed to get message', details: error.message },
            { status: 500 }
        );
    }

}

export async function POST(request: Request) {

    const { message } = await request.json();

    const key = PrivateKey.formatPrivateKey(PRIVATE_KEY, PrivateKeyVariants.Ed25519);
    const privateKey = new Ed25519PrivateKey(key);
    const admin = Account.fromPrivateKey({ privateKey });

    try {
        const transaction = await client.transaction.build.simple({
            sender: admin.accountAddress,
            data: {
                function: `${CONTRACT_ADDRESS}::message_board::post_message`,
                functionArguments: [message]
            }
        });
        console.log("Built the txn");

        // Sign the transaction (optional: can simulate also)
        const senderAuthenticator = client.transaction.sign({
            signer: admin,
            transaction,
        });
        console.log("Signed the txn");

        // submit the tnx
        const submittedTransaction = await client.transaction.submit.simple({
            transaction,
            senderAuthenticator,
        });
        console.log("Submitted the txn");

        // wait for results
        const executedTransaction = await client.waitForTransaction({ transactionHash: submittedTransaction.hash });
        console.log(executedTransaction)

        return Response.json(executedTransaction)

    } catch (err: any) {
        console.log("error : ", err.message);
        return Response.json("error occured");
    }

    return Response.json("ok")

}