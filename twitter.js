import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
const readOnlyClient = twitterClient.readOnly;
const userClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  });

const rwClient = userClient.readWrite;
//await rwClient.v2.tweet('Happy new year, FHE mainnet 2025??');


export async function tweet(message) {
    await rwClient.v2.tweet(message);
}

async function getTweet(tweetId) {
  const tweet = await readOnlyClient.v2.tweet(tweetId);
  return tweet;
}

