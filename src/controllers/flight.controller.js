import flightService from "../services/flight.service.js";

export const insertFlight = async (req, res) => {

    await flightService.insertFlight(req.body);
    res.sendStatus(201);
}

export const getFlightsByQuery = async (req, res) => {

    const query = { ...req.query };

    const flights = await flightService.getFlightsByQuery(query);
    res.send(flights);
}