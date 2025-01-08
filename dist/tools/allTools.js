"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tools = void 0;
const getBalance_1 = require("./getBalance");
const sendTransaction_1 = require("./sendTransaction");
const getWalletAddress_1 = require("./getWalletAddress");
const sendTweet_1 = require("./sendTweet");
const encryptNumber_1 = require("./encryptNumber");
exports.tools = {
    getBalance: getBalance_1.getBalanceTool,
    sendTransaction: sendTransaction_1.sendTransactionTool,
    getWalletAddress: getWalletAddress_1.getWalletAddressTool,
    sendTweet: sendTweet_1.sendTweetTool,
    encryptNumber: encryptNumber_1.encryptNumberTool
};
