import OpenAi from 'openai';
import { createAssistant } from './openai/createAssistant';
import { createThread } from './openai/createThread';
import { createRun } from './openai/createRun';
import { performRun } from './openai/performRun';

async function main() {
    const client = new OpenAi();
    const message = "send .011 ETH to the address 0x17e968F5C0472941767F06b660Ab2E7149Bdf7ED and then post a tweet about it";
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