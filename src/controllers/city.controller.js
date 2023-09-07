import cityService from "../services/city.service.js";

export const insertCity = async (req, res) => {

    await cityService.insertCity(req.body);
    res.sendStatus(201);
}