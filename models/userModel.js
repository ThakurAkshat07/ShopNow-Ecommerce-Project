import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //removes any whitespace.
    },
    email: {
      type: String,
      required: true,
      unique: true, // only one email-account against each user.
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: {},
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
); // whenever a new user is created its time of addition to database is added.

export default mongoose.model("users", userSchema);
