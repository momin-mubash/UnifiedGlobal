const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Dig = require('../models/Dig');  // Assuming you have a Dig model
const protect = require('../middleware/authMiddleware');  // Import authentication middleware

// GET logged-in user's data
router.get('/me', protect, async (req, res) => {
  try {
    // Get the authenticated user's ID from the `protect` middleware
    const userId = req.user.id;

    // Find user by ID and select only name and email fields
    const user = await User.findById(userId).select('name email');

    // Fetch all digs that belong to the authenticated user
    const digs = await Dig.find({ owner: userId }).select('name');

    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user's name, email, and their digs
    res.json({ user, digs });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
