"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.triggerAgent = triggerAgent;
const openai_1 = __importDefault(require("openai"));
const createAssistant_1 = require("./openai/createAssistant");
const createThread_1 = require("./openai/createThread");
const createRun_1 = require("./openai/createRun");
const performRun_1 = require("./openai/performRun");
async function main() {
    const client = new openai_1.default();
    const message = "encrypt the number 100 with a bit length of 8, then return the encryptedAmount";
    const assistant = await (0, createAssistant_1.createAssistant)(client);
    const thread = await (0, createThread_1.createThread)(client, message);
    const run = await (0, createRun_1.createRun)(client, thread, assistant.id);
    const result = await (0, performRun_1.performRun)(run, client, thread);
    console.log(result);
}
async function triggerAgent(input) {
    const client = new openai_1.default();
    const assistant = await (0, createAssistant_1.createAssistant)(client);
    const thread = await (0, createThread_1.createThread)(client, input);
    const run = await (0, createRun_1.createRun)(client, thread, assistant.id);
    const result = await (0, performRun_1.performRun)(run, client, thread);
    console.log(result);
}
main();
