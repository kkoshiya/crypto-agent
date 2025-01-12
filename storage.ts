import fs from 'fs/promises';
import path from 'path';

async function saveHistory(message: string) {
    const historyPath = path.join(__dirname, 'src/local/history.json');
    
    try {
        // Read existing history or create new if doesn't exist
        let history;
        try {
            const existingHistory = await fs.readFile(historyPath, 'utf-8');
            history = JSON.parse(existingHistory);
        } catch {
            history = { messages: [] };
        }

        // Add new message
        history.messages.push({
            role: "user",
            content: [
                {
                    type: "text",
                    text: message
                }
            ]
        });

        // Write back to file
        await fs.writeFile(
            historyPath, 
            JSON.stringify(history, null, 2)
        );

        return history;
    } catch (error) {
        console.error('Error saving history:', error);
        throw error;
    }
}

saveHistory("encrypt the number 102 with a bit length of 8");