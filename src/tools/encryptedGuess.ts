import { JsonRpcProvider } from 'ethers';
import { ToolConfig } from './allTools';
import { Address, formatEther } from 'viem';
import 'dotenv/config';


interface EncryptedGuessArgs {
    amount: Number;
}

// export const encryptedGuessTool: ToolConfig<EncryptedGuessArgs> = {
//     definition: {
//         type: "function",
//         function: {
//             name: "encryptedGuess",
//             description: "guess the amount of the encrypted number",
//             parameters: {
//                 type: "object",
//                 properties: {
//                     amount: { type: "number", description: "the amount to guess" },
//                 },
//                 required: ["amount"],
//             },
//         }
//     }
// }

