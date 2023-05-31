const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Pet = require("./models/Pet");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://soberbat:412ZTmsa5rVZ0EaL@cluster0.hpsovic.mongodb.net/pet?retryWrites=true&w=majority"
);

app.get("/", async (req, res) => {
  const newPet = new Pet({
    specie: "Dog",
    breed: "Doberman",
    age: 3,
    kg: 7,
  });

  try {
    await newPet.save();
    res.send("saved to db");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server is Running ");
});
