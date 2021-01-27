const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/truckfitup"
);

const truckSeed = [
  {
    chassisId: "000111",
    customer: "Bob",
    location: "Dave's signs",
    purpose: "Signwriters",
    dropOffDate: new Date(Date.now()),
    collectionDate: new Date(Date.now()),
    conactPerson: "Bob",
    conactEmail: "bob@email.com",
    conactNumber: "019877952"
  },
  {
    chassisId: "000112",
    customer: "Jack",
    location: "Bill's trays",
    purpose: "Body Builder",
    dropOffDate: new Date(Date.now()),
    collectionDate: new Date(Date.now()),
    conactPerson: "Bob",
    conactEmail: "Jack@email.com",
    conactNumber: "158562854"
  }
];

db.Truck
  .remove({})
  .then(() => db.Truck.collection.insertMany(truckSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
