import { NextApiRequest, NextApiResponse } from "next";
import { TwitterApi } from 'twitter-api-v2';
import { CMS_URL } from "../../../lib/constants";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
    if (req.method === 'POST') {
        const client = new TwitterApi({
            // @ts-ignore
            appKey: process.env.TWITTER_API_KEY,
            appSecret: process.env.TWITTER_API_SECRET_KEY,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
        });
        
        // @ts-ignore
        // const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

        const { title, path } = req.body;

        try {
            await client.v2.tweet(title + "\n\n" + `${CMS_URL}/posts/${path}`);
            res.status(200).json({ message: 'Tweet posted successfully!' });
            } catch (error) {
            res.status(500).json({ error: 'Failed to post tweet', details: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}

export default handler;
