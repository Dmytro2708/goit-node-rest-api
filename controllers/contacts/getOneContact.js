const { Contact } = require("../../models/contact");
const { HttpError, ctrlWrapper } = require("../../helpers");

const getOneContact = async (req, res) => {
    const { id } = req.params;
    const { _id: owner } = req.user;
    const result = await Contact.findOne({ _id: id, owner });
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  };


  module.exports = ctrlWrapper(getOneContact);