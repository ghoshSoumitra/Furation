const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const db = require('./config/mongoose');
const itemRoutes = require('./routes/routes');

const app = express();
const PORT = 3000; // You can change the port if needed

// Connect to the MongoDB database


// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Routes
app.use('/', itemRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  winston.error('An error occurred', error);
  res.status(500).json({ error: 'An error occurred' });
});

// Start the server
app.listen(PORT, () => {
  winston.info(`Server is running on port ${PORT}`);
});
