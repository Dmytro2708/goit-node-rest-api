const { Schema, model } = require("mongoose");
const joi = require("joi");

const hendleMongooseError = require("../helpers/hendleMongooseError");

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

contactSchema.post("save", hendleMongooseError);

const createContactSchema = joi.object({
  name: joi.string().alphanum().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(4).required(),
  favorite: joi.boolean(),
});

const updateContactSchema = joi.object({
  name: joi.string().alphanum().min(2),
  email: joi.string().email(),
  phone: joi.string().min(4),
  favorite: joi.boolean(),
});

const updateFavoriteSchema = joi.object({
   favorite: joi.boolean().required(),
});

const schemas = {
  createContactSchema,
  updateContactSchema,
  updateFavoriteSchema
}

const Contact = model("contact", contactSchema);

module.exports = {
  Contact,
  schemas
};
