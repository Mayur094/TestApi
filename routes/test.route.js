const express = require('express');
const router = express.Router();

// Simple Testing API
router.get('/test', (req, res) => {
  res.json({
    success: true,
    message: "API test successful",
    time: new Date()
  });
});

module.exports = router;
