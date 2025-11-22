const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const ProviderSchema = new mongoose.Schema({
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
  specialization: {
    type: String,
    trim: true,
  },
  licenseNumber: {
    type: String,
    unique: true,
  },
  clinic: {
    type: String,
    trim: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  experience: {
    type: Number, // years of experience
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
ProviderSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
ProviderSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Provider = mongoose.model("Provider", ProviderSchema);
module.exports = Provider;
