import OpenAI from "openai";
import { Thread } from "openai/resources/beta/threads/threads";
import history1 from "../local/history.json";

export async function createThread(client: OpenAI, message: string): Promise<Thread> {
    const thread = await client.beta.threads.create(history1 as any);
    await client.beta.threads.messages.create(thread.id, {
        role: 'user',
        content: message
    });
    return thread;
}