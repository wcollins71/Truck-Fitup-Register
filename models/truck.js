const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
  chassisId: { type: String, required: true },
  customer: String,
  location: String,
  purpose: String,
  dropOffDate: Date,
  collectionDate: Date,
  conactPerson: String,
  conactEmail: String,
  conactNumber: String,
  archived: {
    type: Boolean,
    default: false
},
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;
