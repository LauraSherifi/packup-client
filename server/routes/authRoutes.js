const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const JWT_SECRET = process.env.JWT_SECRET;

// Register Route
router.post('/register', async (req, res) => {
  const { username, email, password, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  userModel.createUser({ username, email, password: hashedPassword, role }, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User registered!' });
  });
});

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  userModel.findUserByEmail(email, async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);

    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Logged in', token });
  });
});

module.exports = router;
