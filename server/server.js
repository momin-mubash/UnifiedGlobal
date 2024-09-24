const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const digRoutes = require('./routes/digs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // Middleware to parse JSON bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error', err);
});

// Define a simple root route
app.get('/', (req, res) => {
    res.send('Welcome to Unified Global API!'); // Response for the root URL
});

// Routes
app.use('/api/articles', articleRoutes);
app.use('/api/digs', digRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
