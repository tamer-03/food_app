const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const DistrictSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cityId: {
    type: Number,
    ref: "City",
    required: true,
  },
});

DistrictSchema.plugin(mongooseSequence(mongoose), { inc_field: "districtId" });

module.exports = mongoose.model("District", DistrictSchema);
