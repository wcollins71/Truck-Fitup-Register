const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
  chassisId: { type: String, required: true },
  customer: String,
  location: String,
  purpose: String,
  dropOffDate: Date,
  collectionDate: Date,
  contactPerson: String,
  contactEmail: String,
  contactNumber: String,
  archived: {
    type: Boolean,
    default: false
},
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;
