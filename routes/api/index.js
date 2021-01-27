const router = require("express").Router();
const truckRoutes = require("./trucks");

// Truck routes
router.use("/trucks", truckRoutes);

module.exports = router;
