import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN as any );
const readOnlyClient = twitterClient.readOnly;
const userClient = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY,
    appSecret: process.env.TWITTER_API_SECRET,
    accessToken: process.env.TWITTER_ACCESS_TOKEN,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  } as any);

const rwClient = userClient.readWrite;
rwClient.v2.tweet('Happy new year, FHE mainnet 2025?? testing for accurate tweet???');


//export async function tweet(message) {
//     await rwClient.v2.tweet(message);
// }

// async function getTweet(tweetId) {
//   const tweet = await readOnlyClient.v2.tweets(tweetId);
//   return tweet;
// }

