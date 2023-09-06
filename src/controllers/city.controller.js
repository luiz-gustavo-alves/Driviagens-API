import cityService from "../services/city.service.js";

export const insertCity = async (req, res) => {

    try {
        await cityService.insertCity(req.body);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}