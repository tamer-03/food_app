const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const CategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
      unique: true,
      minlength: [2, "Category name must be at least 2 characters long."],
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "Description must be at least 10 characters long."],
    },
    parentId: {
      type: Number,
      ref: "Category",
      default: null, //null ana karetgori
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

CategorySchema.plugin(mongooseSequence(mongoose), { inc_field: "categoryId" });

module.exports = mongoose.model("Category", CategorySchema);
