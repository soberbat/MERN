const mongoose = require("mongoose");

const PetSchema = mongoose.Schema({
  specie: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  kg: {
    type: Number,
    required: false,
  },
});

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;
