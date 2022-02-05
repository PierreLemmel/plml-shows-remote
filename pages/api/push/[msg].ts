import { NextApiRequest, NextApiResponse } from 'next'
import { writeRngMessage } from '../../../services/firebase';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST" || process.env.DEV) {

        const msg = <string> req.query["msg"];

        const payload = {
            type: msg,
            data: req.body
        };

        await writeRngMessage(payload);

        res.status(200).json(payload);
    }
    else {
        res.status(400).json("Invalid request");
    }
}