import OpenAI from "openai";
import { tools } from "../tools/allTools";
import { Run } from "openai/resources/beta/threads/runs/runs";
import { Thread } from "openai/resources/beta/threads/threads";

export async function handleRunToolCall(run: Run, client: OpenAI, thread: Thread): Promise<Run> {
    const toolCalls = run.required_action?.submit_tool_outputs?.tool_calls;
    if (!toolCalls) return run;

    const toolOutputs = await Promise.all(
        toolCalls.map(async (tool) => {
            const toolConfig = tools[tool.function.name];
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
            } catch (error) {
                console.error(`Error calling tool ${tool.function.name}: ${error}`);
                return null;
            }
        })
    );

    const validOutputs = toolOutputs.filter(Boolean) as OpenAI.Beta.Threads.Runs.RunSubmitToolOutputsParams.ToolOutput[];
    if (validOutputs.length === 0) return run;

    return client.beta.threads.runs.submitToolOutputsAndPoll(
        thread.id,
        run.id,
        { tool_outputs: validOutputs }
    );
}