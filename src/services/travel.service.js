import passengerRepository from "../repositories/passenger.repository.js";
import flightRepository from "../repositories/flight.repository.js";
import travelRepository from "../repositories/travel.repository.js";

import {
    notFoundError
} from "../errors/index.errors.js";

const insertTravel = async (payload) => {

    const {
        passengerId,
        flightId
    } = payload;

    const passenger = await passengerRepository.getPassengerById(passengerId);
    if (!passenger) {
        throw notFoundError("Passageiro não encontrado.");
    }

    const flight = await flightRepository.getFlightById(flightId);
    if (!flight) {
        throw notFoundError("Voo não encontrado.");
    }

    await travelRepository.insertTravel(payload);
}

const travelService = {
    insertTravel
}

export default travelService;