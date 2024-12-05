import mongoose from "mongoose";
const commentsSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    text: { type: String, required: true },
    eventId: { type: String, required: true },
  },
  { timestamps: true }
);

const userComments =
  mongoose.models.userComments || mongoose.model("comments", commentsSchema);

export default userComments;
