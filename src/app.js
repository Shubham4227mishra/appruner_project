const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index.routes');
const destinationRoutes = require('./routes/destinations.routes');
const logger = require('./middleware/request-logger');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(express.json());
app.use(logger);

// STATIC FILES FIRST (important)
app.use('/ui', express.static(path.join(__dirname, 'views')));

// ROUTES
app.use('/', indexRoutes);
app.use('/api/destinations', destinationRoutes);

// HEALTH CHECK (must always respond)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

// ERROR HANDLER LAST
app.use(errorHandler);

module.exports = app;

