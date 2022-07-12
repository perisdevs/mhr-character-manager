import { queryExternalAPI, requestJSONObject } from "../../lib/requests";

export default async function handler(req, res) {
    
    let objects = await queryExternalAPI(req.body);
    res.status(200).json(objects);
}