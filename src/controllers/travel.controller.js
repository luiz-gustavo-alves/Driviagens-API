import travelService from "../services/travel.service.js";

export const insertTravel = async (req, res) => {

    try {
        await travelService.insertTravel(req.body);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}