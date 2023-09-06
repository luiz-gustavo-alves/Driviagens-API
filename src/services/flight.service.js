import cityRepository from "../repositories/city.repository.js";
import flightRepository from "../repositories/flight.repository.js";
import dayjs from "dayjs";

function convertDateToISOFormat (date) {
    const parts = date.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

const insertFlight = async (payload) => {

    const {
        origin, 
        destination
    } = payload;

    if (origin === destination) {
        throw { type: "conflict", message: "origem e destino devem ser diferentes." };
    }

    payload.date = convertDateToISOFormat(payload.date);
    const currentDate = convertDateToISOFormat(dayjs().format("DD-MM-YYYY"));
    
    if (currentDate > payload.date) {
        throw { type: "unprocessableEntity", message: "A data do voo deve ser maior do que a data atual." };
    }

    const cities = await cityRepository.getCitiesByIds({origin, destination});
    if (cities.length < 2) {
        throw { type: "notFound", message: "Cidades de origem e/ou destino não encontrado(s)." };
    }

    await flightRepository.insertFlight(payload);
}

const flightService = {
    insertFlight
}

export default flightService;