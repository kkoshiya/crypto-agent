"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTransactionTool = void 0;
const ethers_1 = require("ethers");
require("dotenv/config");
exports.sendTransactionTool = {
    definition: {
        type: 'function',
        function: {
            name: 'sendTransaction',
            description: 'Send a transaction to an address with set value',
            parameters: {
                type: 'object',
                properties: {
                    to: {
                        type: 'string',
                        pattern: '^0x[a-fA-F0-9]{40}$',
                        description: 'The address to send the transaction to'
                    },
                    value: {
                        type: 'string',
                        description: 'The amount of ETH to send (in ETH, not Wei)'
                    }
                },
                required: ['to', 'value']
            }
        }
    },
    handler: async ({ to, value }) => {
        const provider = new ethers_1.JsonRpcProvider('https://api.nitrogen.fhenix.zone');
        const adminWallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
        const amount = ethers_1.ethers.parseEther(value);
        const tx = await adminWallet.sendTransaction({
            to,
            value: amount
        });
        const receipt = await tx.wait();
        return receipt;
    }
};
// async function sendTransaction({
//     to,
//     value
// }: SendTransactionArgs) {
//     const provider = new JsonRpcProvider('https://api.nitrogen.fhenix.zone');
//     const adminWallet = new ethers.Wallet(process.env.PRIVATE_KEY as string, provider);
//     const amount = ethers.parseEther(value as string);
//     const tx = await adminWallet.sendTransaction({
//         to,
//         value: amount
//     });
//     const receipt = await tx.wait();
//     return receipt;
// }
