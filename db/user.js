const { Schema, model } = require("mongoose");
const joi = require("joi");

const { hendleMongooseError } = require("../helpers");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      match: emailRegexp,
      required: true,
    },
    password: {
      type: String,
      minlength: 5,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", hendleMongooseError);

