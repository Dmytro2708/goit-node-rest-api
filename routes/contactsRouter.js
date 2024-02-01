const express = require("express");

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateStatusContact,
} = require("../controllers/contactsControllers.js");

const res = require("express/lib/response.js");

const {validateBody, isValidId} = require("../middlewares");

const { schemas } = require("../db/contact.js");

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post(
  "/",
  validateBody(schemas.createContactSchema),
  createContact
);

contactsRouter.put(
  "/:id",
  isValidId,
  validateBody(schemas.updateContactSchema),
  updateContact
);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = contactsRouter;
