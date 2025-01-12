"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThread = createThread;
const history_json_1 = __importDefault(require("../local/history.json"));
async function createThread(client, message) {
    const thread = await client.beta.threads.create(history_json_1.default);
    await client.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: message
    });
    return thread;
}
