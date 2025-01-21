const mongoose = require("mongoose");
const { mongooseSequence } = require("mongoose-sequence");

const ProductImageSchema = new mongoose.Schema(
  {
    productId: {
      type: Number,
      ref: "Product",
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProductImageSchema.plugin(mongooseSequence(mongoose), {
  inc_field: "productImageId",
});

module.exports = mongoose.model("ProductImage", ProductImageSchema);
