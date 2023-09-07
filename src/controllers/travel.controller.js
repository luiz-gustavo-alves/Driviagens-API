import travelService from "../services/travel.service.js";

export const insertTravel = async (req, res) => {

    await travelService.insertTravel(req.body);
    res.sendStatus(201);
}