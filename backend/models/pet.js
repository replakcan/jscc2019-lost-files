const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
  breed: String,
  age: Number,
  owners: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Person",
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
});
PetSchema.plugin(require("mongoose-autopopulate"));
const PetModel = mongoose.model("Pet", PetSchema);
module.exports = PetModel;
/* const PetModel = class {
  hasOwner = false;
  constructor(breed, age, id) {
    this.breed = breed;
    this.age = age;
    this.id = id;
  }
  talk() {
    if (this.breed[0] === "d") {
      console.log("barkBark");
    } else {
      console.log("meowwWWwwwWww");
    }
  }
  static create({ breed, age, id }) {
    return new PetModel(breed, age, id);
  }
};
module.exports = PetModel;
 */