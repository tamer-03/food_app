const mongoose = require("mongoose");
const mongooseSequence = require("mongoose-sequence");

const AddressSchema = new mongoose.Schema(
  {
    cityId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "City",
      required: true,
    },
    districtId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "District",
      required: true,
    },
    fullAddress: {
      type: String,
      required: true,
      minlength: [10, "address must be at least 10 characters long"],
    },
    addressHeader: {
      type: String,
      required: true,
    },
    userId: {
      type: Number,
      ref: "User",
      required: true,
    },
    phone: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // 10 haneli sadece rakamlardan oluşan numara kontrolü
        },
        message: (props) =>
          `${props.value} is not a valid phone number! It should contain exactly 10 digits.`,
      },
    },
    firstName: {
      type: String,
      required: true,
      minlength: [2, "First name must be at least 2 characters long."],
    },
    lastName: {
      type: String,
      required: true,
      minlength: [2, "Last name must be at least 2 characters long."],
    },
  },
  {
    timestamps: true, // createdAt and updatedAt fields
  }
);
AddressSchema.plugin(mongooseSequence(mongoose), { inc_field: "addressId" });
const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
