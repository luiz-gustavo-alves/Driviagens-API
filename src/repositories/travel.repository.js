import db from "../database/db.connection.js";
import {
    mapObjectToGenericQuery
} from "../utils/sql.utils.js";

const insertTravel = async (payload) => {

    const {
        objectColumns,
        objectValues,
        paramsOrder
    } = mapObjectToGenericQuery(payload);

    await db.query(`INSERT INTO travels (${objectColumns}) VALUES (${paramsOrder});`, 
        [...objectValues]
    );
}

const travelRepository = {
    insertTravel
};

export default travelRepository;