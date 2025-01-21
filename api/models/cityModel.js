const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

CitySchema.plugin(mongooseSequence(mongoose), { inc_field: "cityId" });

module.exports = mongoose.model("City", CitySchema);
