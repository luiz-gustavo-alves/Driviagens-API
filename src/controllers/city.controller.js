import cityService from "../services/city.service.js";
import httpStatus from "http-status";

export const insertCity = async (req, res) => {

    await cityService.insertCity(req.body);
    res.sendStatus(httpStatus.CREATED);
}