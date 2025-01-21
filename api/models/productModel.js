const { mongoose } = require("mongoose");
const { mongooseSequence } = require("mongoose-sequence");

const ProductSchema = new mongoose.Schema(
  {
    categoryId: {
      type: Number,
      ref: "Category",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongooseSequence(mongoose), { inc_field: "productId" });

module.exports = mongoose.model("Product", ProductSchema);
