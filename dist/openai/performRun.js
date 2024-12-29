"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.performRun = performRun;
const handleRunToolCall_1 = require("./handleRunToolCall");
async function performRun(run, client, thread) {
    while (run.status === "requires_action") {
        run = await (0, handleRunToolCall_1.handleRunToolCall)(run, client, thread);
    }
    if (run.status === 'failed') {
        const errorMessage = `I encountered an error: ${run.last_error?.message || 'Unknown error'}`;
        console.error('Run failed:', run.last_error);
        await client.beta.threads.messages.create(thread.id, {
            role: 'assistant',
            content: errorMessage
        });
        return {
            type: 'text',
            text: {
                value: errorMessage,
                annotations: []
            }
        };
    }
    const messages = await client.beta.threads.messages.list(thread.id);
    const assistantMessage = messages.data.find(message => message.role === 'assistant');
    console.log(`🚀 Assistant message: ${assistantMessage?.content[0]}`);
    return assistantMessage?.content[0] ||
        { type: 'text', text: { value: 'No response from assistant', annotations: [] } };
}
