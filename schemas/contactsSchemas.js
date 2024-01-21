const joi = require("joi");

// const addSchema = Joi.object({
//   name: Joi.string().alphanum().min(2).required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().min(5).required(),
// });

// module.exports = addSchema


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