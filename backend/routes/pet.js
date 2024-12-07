const express = require("express");
const router = express.Router();
const PetService = require("../services/pet-service");
const PersonService = require("../services/person-service");
router.get("/all", async (req, res) => {
  const pets = await PetService.findAll();
  res.render("list", { items: pets });
});
router.get('/all/json', async (req, res) => {
  const pets = await PetService.findAll()
  res.send(pets)
})
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const pet = await PetService.find(id);
  if (!pet) res.status(404)
  res.send(pet);
});
router.get("/:id/json", async (req, res) => {
  const id = req.params.id;
  const pet = await PetService.find(id);
  if (!pet) res.status(404);
  res.send(pet);
});
router.post("/", async (req, res) => {
  const pet = await PetService.add(req.body);
  res.send(pet);
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await PetService.del(id);
  res.send("ok");
});
module.exports = router;