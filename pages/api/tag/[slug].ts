import { NextApiRequest, NextApiResponse } from "next"
import { getAllPostsByTag } from "../../../lib/api";
import { unslug } from "../../../lib/helpers";

// const handler = async(req: NextApiRequest, res: NextApiResponse) => {
//     const data = await(await fetch('https://reqres.in/api/todos')).json() //../../public/data/sample.json
//     res.status(200).json(data)
// }
// export default handler

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    const {slug} = req.query
    const { edges, pageInfo } = await getAllPostsByTag(slug, req.body.endCursor);
    res.status(200).json({edges, pageInfo})
}
export default handler