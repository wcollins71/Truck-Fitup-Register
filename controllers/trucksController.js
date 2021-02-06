const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Truck
      .find(req.query)
      .then(dbTrucks => res.json(dbTrucks))
      .catch(err => res.status(422).json(err));
  }
  ,
  findById: function(req, res) {
    db.Truck
      .findById(req.params.id)
      .then(dbTrucks => res.json(dbTrucks))
      .catch(err => res.status(422).json(err));
  }
  ,
  create: function(req, res) {
    console.log(req.body)
    db.Truck
      .create(req.body)
      .then(dbTrucks => res.json(dbTrucks))
      .catch(err => res.status(422).json(err));
  }
  ,
  update: function(req, res) {
    console.log("req")
    db.Truck
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTrucks => res.json(dbTrucks))
      .catch(err => res.status(422).json(err));
  }
  // ,
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
