import { requestJSONObject } from "../../lib/requests";

export default async function handler(req, res) {
    
    let objects = await requestJSONObject('localhost', 3001, req.body);
    res.status(200).json(objects);
}