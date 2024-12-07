const BaseService = require("./base-service");
const PetModel = require("../models/pet");
class PetService extends BaseService {
  model = PetModel;
}
module.exports = new PetService();