const router = require("express").Router();
const truckRoutes = require("./trucks");
const newTruckRoutes = require("./newtruck");

// Truck routes
router.use("/trucks", truckRoutes);
router.use("/newtruck", newTruckRoutes);

module.exports = router;
