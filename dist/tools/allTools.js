"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tools = void 0;
const getBalance_1 = require("./getBalance");
const sendTransaction_1 = require("./sendTransaction");
exports.tools = {
    getBalance: getBalance_1.getBalanceTool,
    sendTransaction: sendTransaction_1.sendTransactionTool
};
