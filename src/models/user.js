const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
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

// Hash password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
