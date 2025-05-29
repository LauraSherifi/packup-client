const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/auth'); // JWT auth
const { authorizeRoles } = require('../middleware/roleMiddleware'); // Role-based auth
const tripModel = require('../models/tripModel'); // DB queries for trips

// POST /api/trips - Create a trip (only 'planner' role allowed)
router.post('/', authMiddleware, authorizeRoles('planner'), (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  if (!title || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const createdBy = req.user.id;

  tripModel.createTrip({ title, description, startDate, endDate, createdBy }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error saving trip', error: err });
    }
    res.status(201).json({
      message: 'Trip created successfully!',
      trip: { id: result.insertId, title, description, startDate, endDate, createdBy }
    });
  });
});

// GET /api/trips - Get all trips (any authenticated user)
router.get('/', authMiddleware, (req, res) => {
  tripModel.getAllTrips((err, trips) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching trips', error: err });
    }
    res.status(200).json({ trips });
  });
});

// GET /api/trips/:id - Get single trip by ID
router.get('/:id', authMiddleware, (req, res) => {
  const tripId = req.params.id;
  tripModel.getTripById(tripId, (err, trip) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching trip', error: err });
    }
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json({ trip });
  });
});

// PUT /api/trips/:id - Update trip (only 'planner')
router.put('/:id', authMiddleware, authorizeRoles('planner'), (req, res) => {
  const tripId = req.params.id;
  const { title, description, startDate, endDate } = req.body;

  if (!title || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  tripModel.updateTrip(tripId, { title, description, startDate, endDate }, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating trip', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json({ message: 'Trip updated successfully' });
  });
});

// DELETE /api/trips/:id - Delete trip (only 'planner')
router.delete('/:id', authMiddleware, authorizeRoles('planner'), (req, res) => {
  const tripId = req.params.id;

  tripModel.deleteTrip(tripId, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting trip', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Trip not found' });
    }
    res.status(200).json({ message: 'Trip deleted successfully' });
  });
});

module.exports = router;
