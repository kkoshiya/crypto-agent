import { ToolConfig } from './allTools';
import { ethers, JsonRpcProvider } from 'ethers';
import 'dotenv/config';

export const getWalletAddressTool: ToolConfig = {
    definition: {
        type: 'function',
        function: {
            name: 'getWalletAddress',
            description: 'Get the wallet address of the account defined in .env',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    handler: async () => {
        const privateKey = process.env.PRIVATE_KEY;
        if (!privateKey) throw new Error('PRIVATE_KEY environment variable is not set');

        const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
        const wallet = new ethers.Wallet(privateKey, provider);
        
        return {
            address: wallet.address
        };
    }
};
