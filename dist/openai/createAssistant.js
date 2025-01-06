"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAssistant = createAssistant;
const allTools_1 = require("../tools/allTools");
async function createAssistant(client) {
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
            your name is Sender and your job is to send transactions to addresses.and post tweets.

            You will be given a message with a value and an address.
            You will need to send the transaction to the address with the value.
            You will also need to post a tweet about the transaction.
            you have the following tools available:
                ${Object.values(allTools_1.tools).map(tool => tool.definition).join('\n')}

        `,
        tools: Object.values(allTools_1.tools).map(tool => tool.definition)
    });
}
