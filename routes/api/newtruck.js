const router = require("express").Router();
const trucksController = require("../../controllers/trucksController");

// Matches with "/api/trucks"
router
  .route("/")
  .get(trucksController.findAll);

// Matches with "/api/books/:id"
router
  .route("/newtruck")
  .post(trucksController.create);

router
  .route("/truck/:id")
  .get(trucksController.findById)
  .put(trucksController.update);
  // .delete(trucksController.remove);
module.exports = router;

