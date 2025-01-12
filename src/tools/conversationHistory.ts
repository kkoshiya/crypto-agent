import fs from 'fs';
import path from 'path';

const HISTORY_PATH = path.join(process.cwd(), 'data', 'conversations.json');

// Initialize history file if it doesn't exist
if (!fs.existsSync(path.dirname(HISTORY_PATH))) {
    fs.mkdirSync(path.dirname(HISTORY_PATH), { recursive: true });
}
if (!fs.existsSync(HISTORY_PATH)) {
    fs.writeFileSync(HISTORY_PATH, JSON.stringify({}));
}

export function saveMessage(threadId: string, message: { role: 'user' | 'assistant', content: string }) {
    const history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
    
    if (!history[threadId]) {
        history[threadId] = [];
    }
    
    history[threadId].push({
        ...message,
        timestamp: new Date().toISOString()
    });
    
    fs.writeFileSync(HISTORY_PATH, JSON.stringify(history, null, 2));
}

export function getThreadHistory(threadId: string) {
    const history = JSON.parse(fs.readFileSync(HISTORY_PATH, 'utf-8'));
    return history[threadId] || [];
} 