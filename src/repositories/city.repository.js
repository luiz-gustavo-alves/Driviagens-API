import db from "../database/db.connection.js";
import { 
    mapObjectToGenericQuery 
} from "../utils/sql.utils.js";

const getCitiesByIds = async (ids) => {

    const { objectValues } = mapObjectToGenericQuery(ids);

    const cities = await db.query(`SELECT * FROM cities WHERE id IN (${objectValues});`);
    return cities.rows;
}

const getCityByName = async (name) => {

    const city = await db.query(`SELECT * FROM cities WHERE name = $1;`, 
        [name]
    );
    return city.rows[0];
}

const insertCity = async (payload) => {

    const { name } = payload;

    await db.query(`INSERT INTO cities ("name") VALUES ($1);`, 
        [name]
    );
}

const cityRepository = {
    getCitiesByIds,
    getCityByName,
    insertCity
};

export default cityRepository;