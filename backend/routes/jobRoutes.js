const express = require('express');
const router = express.Router();

// Temporary route handler until we implement the controller
router.get('/', (req, res) => {
  res.json({ message: 'Job routes working' });
});

module.exports = router; 