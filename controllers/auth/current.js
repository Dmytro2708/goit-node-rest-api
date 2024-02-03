// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// const { SECRET_KEY } = process.env;

// const { User } = require("../../models/user");

const { ctrlWrapper } = require("../../helpers");




const current = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    email,
    subscription,
  });
};


module.exports = ctrlWrapper(current);