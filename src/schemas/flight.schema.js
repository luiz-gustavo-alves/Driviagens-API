import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);

export const flightSchema = Joi.object({
    origin: Joi.number().positive().required(),
    destination: Joi.number().positive().required(),
    date: Joi.date().format('DD-MM-YYYY').required()
}) 