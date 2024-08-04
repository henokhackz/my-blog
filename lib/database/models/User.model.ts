import mongoose, { model, models, Schema } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  blogs: [{ type: mongoose.Schema.ObjectId, ref: "Blog" }],
});

// Check if the User model is already defined, otherwise define it
const User = models.User || model("User", userSchema);

export default User;
