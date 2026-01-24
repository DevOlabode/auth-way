const mongoose = require('mongoose');
const { Schema } = mongoose;

const refreshTokenSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tokenHash: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    revokedAt: Date,
    replacedByToken: String,
  
    ipAddress: String,
    
    userAgent: String,
  }, { timestamps: true });
  
module.exports = mongoose.model("RefreshToken", refreshTokenSchema);