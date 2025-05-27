// routes/trips.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // or your JWT middleware

// POST /api/trips
router.post('/', authMiddleware, (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  if (!title || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Placeholder: Save trip to DB (you can add actual DB logic here)
  res.status(201).json({
    message: 'Trip created successfully!',
    trip: {
      title,
      description,
      startDate,
      endDate,
      createdBy: req.user.id
    }
  });
});

module.exports = router;
