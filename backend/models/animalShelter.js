const mongoose = require("mongoose");
const ShelterSchema = new mongoose.Schema({
  location: String,
});
const ShelterModel = mongoose.model("Shelter", ShelterSchema);
module.exports = ShelterModel;
/* const AnimalShelterModel = class {
  constructor(location, animalList, id) {
    this.location = location;
    this.animalList = animalList;
    this.animalCount = animalList.length;
    this.id = id;
  }
  static create(location, animalList) {
    return new AnimalShelterModel(location, animalList, id);
  }
};
module.exports = AnimalShelterModel; */