import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    sessionId: {
      type: String,
      required: true,
      unique: true,
    },

    loginTime: {
      type: Date,
      default: Date.now,
    },

    logoutTime: {
      type: Date,
    },

    sessionDuration: {
      type: Number,
      default: 0,
    },

    device: {
      type: String,
    },

    browser: {
      type: String,
    },

    operatingSystem: {
      type: String,
    },

    ipAddress: {
      type: String,
    },

    location: {
      country: String,
      state: String,
      city: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model(
  "Session",
  sessionSchema
);

export default Session;