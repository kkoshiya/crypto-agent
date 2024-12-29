"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceTool = void 0;
const ethers_1 = require("ethers");
const viem_1 = require("viem");
require("dotenv/config");
exports.getBalanceTool = {
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
        const provider = new ethers_1.JsonRpcProvider('https://api.nitrogen.fhenix.zone');
        const balance = await provider.getBalance(wallet);
        return (0, viem_1.formatEther)(balance);
    }
};
