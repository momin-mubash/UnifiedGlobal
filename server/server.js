const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const articleRoutes = require('./routes/articles');
const digRoutes = require('./routes/digs');
const User = require('./models/Article');
const path = require('path');//for static files

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); // Middleware to parse JSON bodies

// Middleware to serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Define a catch-all route to serve the React app for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('MongoDB connected');
  const Article = mongoose.model('Article', articleSchema);
    const testArticle = new Article({
        title: 'Test Article',
        summary: 'This is a test article for checking MongoDB insertion.',
        url:'https://www.google.com/',
        source:'Google'
    });
    //saving the article
return testArticle.save();

})
.then(() => {
  console.log('Test article saved to MongoDB');
})
.catch(err => {
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
