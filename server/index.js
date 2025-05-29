const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware: Enable CORS and parse JSON bodies
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');         // /api/auth
const protectedRoutes = require('./routes/protectedRoutes'); // /api/protected (example protected endpoints)
const tripRoutes = require('./routes/trips');               // /api/trips

// Use Routes with prefixes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/trips', tripRoutes);

// Test DB connection route
app.get('/test-db', (req, res) => {
  db.query('SELECT 1 + 1 AS result', (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database test failed', details: err });
    }
    res.json({ message: '✅ Database connected and working!', result: results[0].result });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
