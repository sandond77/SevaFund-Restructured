const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DonorSchema = new Schema({
  Password: {
    type: String,
  },
  Email: {
    type: String
    // unique: true,
  },
  PurchaseOrders: {
    type: Array,
    default: []
  },
  EthereumAddress: {
    type: String
  }
});

const Donor = mongoose.model("Donors", DonorSchema);

module.exports = Donor;
