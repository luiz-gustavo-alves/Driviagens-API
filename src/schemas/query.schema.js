import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);

export const querySchema = Joi.object({
    "origin": Joi.string(),
    "destination": Joi.string(),
    "smaller-date": Joi.date().format('DD-MM-YYYY'),
    "bigger-date": Joi.date().format('DD-MM-YYYY'),
    "page": Joi.number().positive()
})