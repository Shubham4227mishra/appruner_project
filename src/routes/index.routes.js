const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    app: 'Cloud & DevOps Learning Platform',
    environment: process.env.NODE_ENV || 'dev',
    version: process.env.APP_VERSION || '1.0.0'
  });
});

module.exports = router;

