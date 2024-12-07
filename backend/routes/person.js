const express = require("express");
const router = express.Router();
const PersonService = require("../services/person-service");
const PetService = require("../services/pet-service");
router.get("/all", async (req, res) => {
  const people = await PersonService.findAll();
  res.render("list", { items: people });
});
router.get('/all/json', async (req, res) => {
  const people = await PersonService.findAll()
  res.send(people)
})
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const person = await PersonService.find(id);
  if (!person) res.status(404)
  res.send(person);
});
router.get('/:id/json', async (req, res) => {
  const person = await PersonService.find(req.params.id)
  if (!person) res.status(404)
  res.send(person)
})
router.post("/", async (req, res) => {
  const person = await PersonService.add(req.body);
  res.send(person);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await PersonService.del(id);
  res.send("ok");
});
router.post("/:id/pets", async (req, res) => {
  const id = req.params.id;
  const person = await PersonService.find(id);
  const pet = await PetService.find(req.body.pet);
  await PersonService.adoptPet(person, pet);
  res.send(pet);
});
module.exports = router;