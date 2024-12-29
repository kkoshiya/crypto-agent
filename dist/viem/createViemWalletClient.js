"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createViemWalletClient = createViemWalletClient;
const viem_1 = require("viem");
const accounts_1 = require("viem/accounts");
const chains_1 = require("viem/chains");
const zksync_1 = require("viem/zksync");
function createViemWalletClient() {
    if (!process.env.PRIVATE_KEY) {
        throw new Error("⛔ PRIVATE_KEY environment variable is not set.");
    }
    const account = (0, accounts_1.privateKeyToAccount)(process.env.PRIVATE_KEY);
    return (0, viem_1.createWalletClient)({
        account,
        chain: chains_1.abstractTestnet,
        transport: (0, viem_1.http)(),
    }).extend((0, zksync_1.eip712WalletActions)());
}
