import { JsonRpcProvider } from 'ethers';
import { ToolConfig } from './allTools';
import { Address, formatEther } from 'viem';
import 'dotenv/config';

interface GetBalanceArgs {
    wallet: Address;
}

export const getBalanceTool: ToolConfig<GetBalanceArgs> = {
    definition: {
        type: "function",
        function: {
            name: "getBalance",
            description: "get the balance of a wallet",
            parameters: {
                type: "object",
                properties: {
                    wallet: { 
                        type: "string",
                        pattern: "^0x[a-fA-F0-9]{40}$",
                        description: "the wallet address to get the balance of"
                    },
                },
                required: ["wallet"],
            },
        }
    },
    handler: async ({ wallet }) => {
        const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
        const balance = await provider.getBalance(wallet);
        return formatEther(balance);
    }
};

