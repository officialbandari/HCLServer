// models/Goal.js
const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema(
  {
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: String,
      required: true,
      trim: true,
    },
    steps: {
      type: Number,
      default: 0,
    },
    water: {
      type: Number,
      default: 0,
    },
    sleep: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }
);
const Goal = mongoose.model("Goal", GoalSchema);
module.exports = Goal;