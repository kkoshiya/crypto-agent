import { Contract, JsonRpcProvider } from 'ethers';
import { FhenixClient, SupportedProvider } from 'fhenixjs';
import { sampleAbi } from '../abi/sampleAbi';

const contractAddress = '0x62CaE4060C13563dF73c13a2A69C17AF98ede3Ca';
const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
const client = new FhenixClient({ provider: provider as unknown as SupportedProvider });

export const getSealedOutputTool = {
    definition: {
        type: 'function' as const,
        function: {
            name: 'getSealedOutput',
            description: 'Gets the sealed output from the contract and decrypts it',
            parameters: {
                type: 'object',
                properties: {},
                required: []
            }
        }
    },
    handler: async () => {
        try {
            const adminWallet = process.env.PRIVATE_KEY 
                ? new ethers.Wallet(process.env.PRIVATE_KEY, provider)
                : null;
                
            if (!adminWallet) {
                throw new Error("Private key not found in environment variables");
            }

            const contractInstance = new Contract(contractAddress, sampleAbi, adminWallet);

            const permit = await client.generatePermit(
                contractAddress, 
                provider as SupportedProvider, 
                adminWallet
            );

            if (!permit) {
                throw new Error("Failed to get permit");
            }

            const permission = await client.extractPermitPermission(permit);
            const response = await contractInstance.getSealedOutput(permission);
            const plaintext = await client.unseal(
                contractAddress, 
                response, 
                adminWallet.address
            );

            return {
                success: true,
                plaintext: plaintext.toString()
            };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error occurred'
            };
        }
    }
}; 