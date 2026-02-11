const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index.routes');
const destinationRoutes = require('./routes/destinations.routes');
const logger = require('./middleware/request-logger');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(express.json());
app.use(logger);

// Routes
app.use('/', indexRoutes);
app.use('/api/destinations', destinationRoutes);

// Static UI
app.use('/ui', express.static(path.join(__dirname, 'views')));

// Health check (App Runner)
app.get('/health', (req, res) => res.status(200).json({ status: 'UP' }));

app.use(errorHandler);

module.exports = app;

