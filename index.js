const express = require("express");
const os = require("os");

const app = express();

// App Runner injects PORT automatically
const PORT = process.env.PORT || 8080;
const APP_NAME = process.env.APP_NAME || "App Runner Demo App";

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({
    app: APP_NAME,
    message: "🚀 Successfully running on AWS App Runner",
    hostname: os.hostname(),
    timestamp: new Date().toISOString()
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.get("/info", (req, res) => {
  res.json({
    nodeVersion: process.version,
    platform: process.platform,
    uptime: process.uptime()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

