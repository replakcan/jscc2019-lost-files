const express = require("express");
const router = express.Router()
const ShelterService = require("../services/shelter-service");
router.get("/all", async (req, res) => {
  const people = await ShelterService.findAll();
  res.render("list", { items: people });
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const person = await ShelterService.find(id);
  res.send(person);
});
router.post("/", async (req, res) => {
  const person = await ShelterService.add(req.body);
  res.send(person);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await ShelterService.del(id);
  res.send('ok');
});
module.exports = router