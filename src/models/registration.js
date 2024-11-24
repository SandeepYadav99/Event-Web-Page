import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

const userRegistration =
  mongoose.models.userRegistration ||
  mongoose.model("registration", registrationSchema);

export default userRegistration;
