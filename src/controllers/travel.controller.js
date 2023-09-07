import travelService from "../services/travel.service.js";
import httpStatus from "http-status";

export const insertTravel = async (req, res) => {

    await travelService.insertTravel(req.body);
    res.sendStatus(httpStatus.CREATED);
}