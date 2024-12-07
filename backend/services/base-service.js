const fs = require("fs");
module.exports = class Service {
  async findAll() {
    return this.model.find();
  }
  async add(item) {
    return this.model.create(item);
  }
  async del(itemId) {
    return this.model.deleteOne({ _id: itemId });
  }
  async find(itemId = 1) {
    return this.model.findById(itemId);
  }
};
//this file is the link that defines how should we interact with the database
