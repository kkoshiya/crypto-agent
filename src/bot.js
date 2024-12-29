import { Telegraf, Markup, Scenes, session } from 'telegraf';
import 'dotenv/config';
import { triggerAgent } from '../dist/index.js';
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.command('startTest', (ctx) => {
    ctx.reply('Hello! I am your AI agent. Use /ai followed by your message to chat with me.');
});

// Handle /ai command
bot.command('ai', async (ctx) => {
    // Extract the text after "/ai "
    const message = ctx.message.text.slice(4).trim(); // Remove "/ai " from the start
    
    if (!message) {
        return ctx.reply('Please provide a message after /ai');
    }

    const result = await triggerAgent(message);
    ctx.reply(result);
});

// Remove the general message handler to only respond to /ai commands
bot.launch();
