const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PoInfoSchema = new Schema({
  _id: Schema.Types.ObjectId,
  // charity: { 
  //   type: Schema.Types.ObjectId, 
  //   ref: "Charity" 
  // },
  // donors: { 
  //   type: Schema.Types.ObjectId, 
  //   ref: "Donor" 
  // },
  SupplierName: {
    type: String
  },
  Amount: {
    type: Number
  },
  PONumber: {
    type: Number
  },
  image: {
    type: String
  },
  project: {
    type: String
  },
  DonorList: {
    type: Array
  }
});

const PoInfo = mongoose.model("PoInfo", PoInfoSchema);

module.exports = PoInfo;
