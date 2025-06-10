const express = require('express');
const router = express.Router();
const db = require('../config/db'); 

//get from db
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM about_us ORDER BY updated_at DESC LIMIT 1';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (results.length === 0) return res.status(404).json({ message: 'No content found' });
    res.json(results[0]);
  });
});

module.exports = router;
