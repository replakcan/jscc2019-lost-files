const BaseService = require("./base-service");
const PersonModel = require("../models/person");
class PersonService extends BaseService {
  //node.js'te constructor tanımı
  model = PersonModel;
  // since this is NOT person specified function, normally we should implement this under a new service called adoption?Service (single responsibility)
  async adoptPet(person, pet) {
    person.pets.push(pet);
    pet.owners.push(person);
    await pet.save();
    await person.save();
  }
}
module.exports = new PersonService();