const express = require("express");
const cors = require("cors");
const personRouter = require("./routes/person");
const petRouter = require("./routes/pet");
const animalShelterRouter = require("./routes/animalShelter");
require("./mongo-connection");
const app = express();
app.use(cors());
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/person", personRouter);
app.use("/pet", petRouter);
app.use("/shelter", animalShelterRouter);
app.get("/", (req, res) => {
  res.render("index");
});
module.exports = app;
