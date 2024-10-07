const mongoose = require('mongoose');

// Define the Dig schema
const digSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  articles: [{
    title: String,
    url: String,
    savedAt: {
      type: Date,
      default: Date.now,
    },
  }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
}, {
  timestamps: true, // Automatically create timestamps for createdAt and updatedAt
});

// Create the Dig model
const Dig = mongoose.model('Dig', digSchema);

module.exports = Dig;
