import OpenAi from 'openai';
import { createAssistant } from './openai/createAssistant';
import { createThread } from './openai/createThread';
import { createRun } from './openai/createRun';
import { performRun } from './openai/performRun';

async function main() {
    const client = new OpenAi();
    const message = "encrypt the number 100 with a bit length of 8, then return the encryptedAmount";
    const assistant = await createAssistant(client);
    const thread = await createThread(client, message);
    const run = await createRun(client, thread, assistant.id);
    const result = await performRun(run, client, thread);
    console.log(result);
}

export async function triggerAgent(input: string) {
    const client = new OpenAi();
    const assistant = await createAssistant(client);
    const thread = await createThread(client, input);
    const run = await createRun(client, thread, assistant.id);
    const result = await performRun(run, client, thread);
    console.log(result);
}

main();