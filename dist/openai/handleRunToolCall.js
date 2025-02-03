"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRunToolCall = handleRunToolCall;
const allTools_1 = require("../tools/allTools");
async function handleRunToolCall(run, client, thread) {
    const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls;
    if (!toolCalls)
        return run;
    const toolOutputs = await Promise.all(toolCalls.map(async (tool) => {
        const toolConfig = allTools_1.tools[tool.function.name];
        console.log(tool.function.name);
        if (!toolConfig) {
            console.error(`Tool ${tool.function.name} not found`);
            return null;
        }
        try {
            const args = JSON.parse(tool.function.arguments);
            const output = await toolConfig.handler(args);
            return {
                tool_call_id: tool.id,
                output: String(output)
            };
        }
        catch (error) {
            console.error(`Error calling tool ${tool.function.name}: ${error}`);
            return null;
        }
    }));
    const validOutputs = toolOutputs.filter(Boolean);
    if (validOutputs.length === 0)
        return run;
    return client.beta.threads.runs.submitToolOutputsAndPoll(thread.id, run.id, { tool_outputs: validOutputs });
}
