import { getBalanceTool } from "./getBalance";
import { sendTransactionTool } from "./sendTransaction";
import { getWalletAddressTool } from "./getWalletAddress";
import { sendTweetTool } from "./sendTweet";

export interface ToolConfig<T = any> {
    definition: {
        type: 'function';
        function: {
            name: string;
            description: string;
            parameters: {
                type: 'object';
                properties: Record<string, unknown>;
                required: string[];
            };
        };
    };
    handler: (args: T) => Promise<any>;
}

export const tools: Record<string, ToolConfig> = {
    getBalance: getBalanceTool,
    sendTransaction: sendTransactionTool,
    getWalletAddress: getWalletAddressTool,
    sendTweet: sendTweetTool
};