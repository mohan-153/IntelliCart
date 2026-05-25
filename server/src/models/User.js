import mongoose from "mongoose"
const userSchema = mongoose.Schema(
  {
    name: String,

    email: String,

    password: String,

    role: {
      type: String,
      default: "customer",
    },

    address: {
      fullName: String,
      mobile: String,
      addressLine: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;