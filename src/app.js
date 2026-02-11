const express = require('express');
const path = require('path');
const requestLogger = require('./middleware/request-logger');
const errorHandler = require('./middleware/error-handler');

const indexRoutes = require('./routes/index.routes');
const courseRoutes = require('./routes/courses.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(requestLogger);

// Routes
app.use('/', indexRoutes);
app.use('/api/courses', courseRoutes);

// Static UI
app.use('/ui', express.static(path.join(__dirname, 'views')));

// Health check (VERY IMPORTANT FOR APP RUNNER)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// Error handling
app.use(errorHandler);

module.exports = app;

