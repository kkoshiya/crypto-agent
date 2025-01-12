import OpenAI from "openai";
import { Thread } from "openai/resources/beta/threads/threads";
import { Run } from "openai/resources/beta/threads/runs/runs";
import { handleRunToolCall } from "./handleRunToolCall";
import { saveMessage } from '../tools/conversationHistory';

export async function performRun(run: Run, client: OpenAI, thread: Thread) {
    while (run.status === "requires_action") {
        run = await handleRunToolCall(run, client, thread);
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

    if (assistantMessage?.content[0]) {
        const content = 'text' in assistantMessage.content[0] 
            ? assistantMessage.content[0].text.value 
            : JSON.stringify(assistantMessage.content[0]);
            
        // Save assistant's response
        saveMessage(thread.id, {
            role: 'assistant',
            content: content
        });
    }

    console.log(`🚀 Assistant message: ${assistantMessage?.content[0]}`);

    return assistantMessage?.content[0] ||
        { type: 'text', text: { value: 'No response from assistant', annotations: [] } };
}