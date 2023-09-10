import cityRepository from "../repositories/city.repository.js";
import flightRepository from "../repositories/flight.repository.js";

import {
    dateComparisonWithToday,
    convertDateToISOFormat,
    dateComparison
} from "../utils/date.utils.js";

import {
    conflictError,
    unprocessableEntityError,
    notFoundError,
    badRequestError
} from "../errors/index.errors.js";

const insertFlight = async (payload) => {

    const {
        origin, 
        destination,
        date
    } = payload;

    if (origin === destination) {
        throw conflictError("Cidades de origem e destino devem ser diferentes.");
    }

    if (!dateComparisonWithToday(date)) {
        throw unprocessableEntityError("A data de voo fornecida deve ser maior que a data atual.");
    }

    const cities = await cityRepository.getCitiesByIds({origin, destination});
    if (cities.length < 2) {
        throw notFoundError("Cidades de origem e/ou destino não encontrado(s).");
    }

    payload.date = convertDateToISOFormat(date);
    await flightRepository.insertFlight(payload);
}

const getFlightsByQuery = async (query) => {

    const usingQuery = {};
    const queryParams = ['origin', 'destination', 'smaller-date', 'bigger-date'];
    queryParams.forEach(param => {
        if (!query[param]) query[param] = 'null';
        else usingQuery[param] = true;
    });

    if (usingQuery['smaller-date'] || usingQuery['bigger-date']) {

        if (!usingQuery['smaller-date'] || !usingQuery['bigger-date']) {
            throw unprocessableEntityError("Os parâmetros 'smaller-date' e 'bigger-date' devem ser passados juntos.");
        }

        if (!dateComparison(query['smaller-date'], query['bigger-date'])) {
            throw badRequestError("Parâmetro 'smaller-date' maior que o parâmetro 'bigger-date'.");
        }

        query['smaller-date'] = convertDateToISOFormat(query['smaller-date']);
        query['bigger-date'] = convertDateToISOFormat(query['bigger-date']);
    }

    const flights = await flightRepository.getFlightsByQuery(query);
    return flights;
}

const flightService = {
    insertFlight,
    getFlightsByQuery
}

export default flightService;