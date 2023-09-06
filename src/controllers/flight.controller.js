import flightService from "../services/flight.service.js";

export const insertFlight = async (req, res) => {

    try {
        await flightService.insertFlight(req.body);
        res.sendStatus(201);

    } catch (err) {
        res.status(500).send(err.message);
    }
}

export const getFlightsByQuery = async (req, res) => {

    const query = { ...req.query };

    try {
        const flights = await flightService.getFlightsByQuery(query);
        res.send(flights);

    } catch (err) {
        res.status(500).send(err.message);
    }
}