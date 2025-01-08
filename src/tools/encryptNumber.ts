import { ToolConfig } from './allTools';
import { FhenixClient, EncryptionTypes } from 'fhenixjs';
import { JsonRpcProvider } from 'ethers';
import 'dotenv/config';

interface EncryptNumberArgs {
    number: number;
    bitLength: number;  // 8, 16, 32, or 64
}

export const encryptNumberTool: ToolConfig<EncryptNumberArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'encryptNumber',
            description: 'Encrypt a number using FhenixClient with specified bit length',
            parameters: {
                type: 'object',
                properties: {
                    number: {
                        type: 'number',
                        description: 'The number to encrypt'
                    },
                    bitLength: {
                        type: 'number',
                        enum: [8, 16, 32, 64],
                        description: 'Bit length for encryption (8, 16, 32, or 64)'
                    }
                },
                required: ['number', 'bitLength']
            }
        }
    },
    handler: async ({ number, bitLength }) => {
        const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
        const client = new FhenixClient({ provider: provider as any });

        let encryptionType;
        switch (bitLength) {
            case 8:
                encryptionType = EncryptionTypes.uint8;
                break;
            case 16:
                encryptionType = EncryptionTypes.uint16;
                break;
            case 32:
                encryptionType = EncryptionTypes.uint32;
                break;
            case 64:
                encryptionType = EncryptionTypes.uint64;
                break;
            default:
                throw new Error('Invalid bit length');
        }

        const encryptedAmount = await client.encrypt(Number(number), encryptionType);
        console.log(encryptedAmount);
        return {
            encryptedAmount,
            originalNumber: number,
            bitLength: bitLength
        };
    }
}; 