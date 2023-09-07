import flightService from "../services/flight.service.js";
import httpStatus from "http-status";

export const insertFlight = async (req, res) => {

    await flightService.insertFlight(req.body);
    res.sendStatus(httpStatus.CREATED);
}

export const getFlightsByQuery = async (req, res) => {

    const query = { ...req.query };

    const flights = await flightService.getFlightsByQuery(query);
    res.send(flights);
}