import { NextApiRequest, NextApiResponse } from "next"
import { getAllPostsByCategory } from "../../../lib/api";
import { unslug } from "../../../lib/helpers";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    const {slug} = req.query
    // const { edges } = await getAllPostsByCategory(slug);
    // res.status(200).json(edges)
    const { edges, pageInfo } = await getAllPostsByCategory(slug, req.body.endCursor);
    res.status(200).json({edges, pageInfo})
}
export default handler