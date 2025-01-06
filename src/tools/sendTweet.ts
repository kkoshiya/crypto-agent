import { ToolConfig } from './allTools';
import { TwitterApi } from 'twitter-api-v2';
import 'dotenv/config';

interface SendTweetArgs {
    message: string;
}

export const sendTweetTool: ToolConfig<SendTweetArgs> = {
    definition: {
        type: 'function',
        function: {
            name: 'sendTweet',
            description: 'Post a tweet using Twitter API v2',
            parameters: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string',
                        description: 'The message to tweet'
                    }
                },
                required: ['message']
            }
        }
    },
    handler: async ({ message }) => {
        const userClient = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY,
            appSecret: process.env.TWITTER_API_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        } as any);

        const rwClient = userClient.readWrite;
        const tweet = await rwClient.v2.tweet(message);
        
        return {
            success: true,
            tweetId: tweet.data.id,
            text: tweet.data.text
        };
    }
};
