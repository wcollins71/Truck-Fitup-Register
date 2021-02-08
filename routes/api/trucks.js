const router = require("express").Router();
const trucksController = require("../../controllers/trucksController");

// Matches with "/api/trucks"
router
  .route("/")
  .get(trucksController.findActive)
  .post(trucksController.create);

router
  .route("/archives")
  .get(trucksController.findArchives);


router
  .route("/:id")
  .get(trucksController.findById)
  .put(trucksController.update);
//   .delete(trucksController.remove);
module.exports = router;

