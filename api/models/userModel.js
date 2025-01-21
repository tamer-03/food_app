const mongoose = require("mongoose");
//otomatik artan id için mongoose-sequence paketini ekledik
const mongooseSequence = require("mongoose-sequence");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      match: [/^[a-zA-Z]+$/, "Name must contain only letters"],
      minlength: [2, "Name must be at least 2 characters long"],
    },
    lastName: {
      type: String,
      required: true,
      match: [/^[a-zA-Z]+$/, "LastName must contain only letters"],
      minlength: [2, "Last name must be at least 2 characters long"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.plugin(mongooseSequence(mongoose), { inc_field: "userId" });

module.exports = mongoose.model("User", userSchema);
