import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const addr: string = searchParams.get('address') || "";

    const config = new AptosConfig({
        network: Network.TESTNET
    });

    const aptos = new Aptos(config);

    const fund = await aptos.getAccountInfo({
        accountAddress: searchParams.get('address')!,
    });

    const resource = await aptos.getAccountResource<any>({
        accountAddress: addr,
        resourceType: "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>",
    });

    return Response.json({
        account: fund,
        resource
    });
}