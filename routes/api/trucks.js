const router = require("express").Router();
const trucksController = require("../../controllers/trucksController");

// Matches with "/api/trucks"
router.route("/")
  .get(trucksController.findAll);
  // .post(trucksController.create);

// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(trucksController.findById)
//   .put(trucksController.update)
//   .delete(trucksController.remove);

module.exports = router;

// const router = require("express").Router();
// const Truck = require("../models/truck.js");

// router.get("/api/trucks", (req, res) => {
//   Transaction.find({})
//     .then((dbTrucks) => {
//       res.json(dbTrucks);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

// module.exports = router;
