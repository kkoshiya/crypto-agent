"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRun = createRun;
async function createRun(client, thread, assistantId) {
    let run = await client.beta.threads.runs.create(thread.id, {
        assistant_id: assistantId,
    });
    while (run.status === "queued" || run.status === "in_progress") {
        await new Promise(resolve => setTimeout(resolve, 1000));
        run = await client.beta.threads.runs.retrieve(thread.id, run.id);
    }
    return run;
}
