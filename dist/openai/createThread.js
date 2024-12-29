"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createThread = createThread;
async function createThread(client, message) {
    const thread = await client.beta.threads.create();
    await client.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: message
    });
    return thread;
}
