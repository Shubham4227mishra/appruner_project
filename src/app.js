const express = require('express');
const path = require('path');

const indexRoutes = require('./routes/index.routes');
const destinationRoutes = require('./routes/destinations.routes');

const app = express();

app.use(express.json());

// Static UI
app.use('/ui', express.static(path.join(__dirname, 'views')));

// Routes
app.use('/', indexRoutes);
app.use('/api/destinations', destinationRoutes);

// Health check (App Runner)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP' });
});

module.exports = app;

