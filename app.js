const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Import routes
const uploadRoute = require('./routes/upload');
const weatherRoute = require('./routes/weather');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

// Use routes
app.use('/upload', uploadRoute);
app.use('/weather', weatherRoute);

// Use error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
