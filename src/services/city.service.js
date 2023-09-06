import cityRepository from "../repositories/city.repository.js";

const insertCity = async (payload) => {

    const { name } = payload;
    const city = await cityRepository.getCityByName(name);

    if (city) {
        throw { type: "conflict", message: "Cidade já existe." }; 
    }

    await cityRepository.insertCity(payload);
}

const cityService = {
    insertCity
}

export default cityService;