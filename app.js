const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const { DB_HOST, PORT = 3000 } = process.env;

const app = express();

const contactsRouter = require("./routes/contactsRouter.js");

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});
