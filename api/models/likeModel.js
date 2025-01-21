const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const LikeSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      ref: "User",
      required: true,
    },
    targetId: {
      type: Number,
      ref: "Post",
      required: true,
    },
    targetType: {
      type: String,
      enum: ["product", "comment", "review"], // Beğenilen içerik türleri
      required: true,
      default: "product",
    },
  },
  {
    timestamps: true,
  }
);

LikeSchema.plugin(mongooseSequence(mongoose), { inc_field: "likeId" });
// Aynı kullanıcı aynı içeriği birden fazla kez beğenememesi için bir indeks
LikeSchema.index({ userId: 1, targetId: 1, targetType: 1 }, { unique: true });

module.exports = mongoose.model("Like", LikeSchema);
