const express = require('express');
const router = express.Router();
const db = require('../config/db'); // fixed path
const authenticateToken = require('../middleware/auth');
const { authorizeRoles } = require('../middleware/roleMiddleware');

// Protect all routes below - only admin access
router.use(authenticateToken, authorizeRoles('admin'));

// GET all users
router.get('/users', (req, res) => {
  const query = 'SELECT id, username, email, role FROM users';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// UPDATE a user (username, role)
router.put('/users/:id', (req, res) => {
  const { username, role } = req.body;
  const { id } = req.params;
  const query = 'UPDATE users SET username = ?, role = ? WHERE id = ?';
  db.query(query, [username, role, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated successfully' });
  });
});

// DELETE a user
router.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM users WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  });
});

module.exports = router;
