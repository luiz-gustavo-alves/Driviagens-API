import cityRepository from "../repositories/city.repository.js";

import {
    conflictError
} from "../errors/index.errors.js";

const insertCity = async (payload) => {

    const { name } = payload;
    const city = await cityRepository.getCityByName(name);

    if (city) {
        throw conflictError("Cidade já existe."); 
    }

    await cityRepository.insertCity(payload);
}

const cityService = {
    insertCity
}

export default cityService;