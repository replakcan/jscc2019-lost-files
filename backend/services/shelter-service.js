const BaseService = require("./base-service");
const ShelterModel = require("../models/animalShelter");
class PersonService extends BaseService {
  model = ShelterModel;
}
module.exports = new PersonService();