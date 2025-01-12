import OpenAi from 'openai';
import { Assistant } from 'openai/resources/beta/assistants.mjs';
import { tools } from '../tools/allTools';

export async function createAssistant(client: OpenAi): Promise<Assistant> {
    
    // const assistants = await client.beta.assistants.list();
    // const existingAssistant = assistants.data.find(a => a.name === "kyle");
    
    // if (existingAssistant) {
    //     return existingAssistant;
    // }

    return await client.beta.assistants.create({
        model: "gpt-4o-mini",
        //model: "gpt-3.5-turbo",
        name: "Sender",
        instructions: `
            your name is Sender and your job is to send transactions to addresses.
            your other job is to encrypt numbers using the encryptNumber tool, don't tweet about this. 
            you will be given a number and a bit length, you will need to encrypt the number using the encryptNumber tool.
            You will be given a message with a value and an address.
            You will need to send the transaction to the address with the value.
            You will also need to post a tweet about the transaction.
            you have the following tools available:
                ${Object.values(tools).map(tool => tool.definition).join('\n')}

        `,
        tools: Object.values(tools).map(tool => tool.definition)
    });
}