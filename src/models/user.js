const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Patient", "Admin"],
      required: true,
    },
    age: {
      type: Number,
    },
    allergies: {
      type: String,
    },
    medications: {
      type: String,
    },
    height: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    bloodgroup: {
      type: String,
    },
    bodymass: {
      type: Number,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;