const contactServices = require("../services/contactsServices.js");

const HttpError = require("../helpers/HttpError.js");

const ctrlWrapper = require("../helpers/ctrlWrapper.js");

const getAllContacts = async (req, res) => {
  const result = await contactServices.listContacts();
  res.json(result);
};

const getOneContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactServices.getContactById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contactServices.removeContact(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createContact = async (req, res) => {
   const result = await contactServices.addContact(req.body);
  res.status(201).json(result);
};

const updateContact = async (req, res) => {
   const { id } = req.params;
  const result = await contactServices.updateContact(id, req.body);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
};
