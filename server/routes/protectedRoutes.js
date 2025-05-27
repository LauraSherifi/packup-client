const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth');

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({
    message: '✅ Welcome to the protected dashboard!',
    user: req.user
  });
});

module.exports = router;
