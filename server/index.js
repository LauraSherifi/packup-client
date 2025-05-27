const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware FIRST
app.use(cors());
app.use(express.json()); // Important for parsing JSON bodies

// ✅ Routes
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const tripRoutes = require('./routes/trips');

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/trips', tripRoutes);

// ✅ Test DB Route
app.get('/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database test failed', details: err });
    }
    res.json({ message: '✅ Database connected and working!', result: results[0].result });
  });
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
