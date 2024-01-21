const joi = require("joi");

const createContactSchema = joi.object({
  name: joi.string().alphanum().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(4).required(),
});

const updateContactSchema = joi.object({
  name: joi.string().alphanum().min(2),
  email: joi.string().email(),
  phone: joi.string().min(4),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
};