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

app.use('/uploads', express.static('public/uploads'));

// Import Routes
const authRoutes = require('./routes/authRoutes');         // /api/auth
const protectedRoutes = require('./routes/protectedRoutes'); // /api/protected (example protected endpoints)
const tripRoutes = require('./routes/trips');               // /api/trips
const adminRoutes = require('./routes/adminRoutes');        // /api/admin
const aboutUsRoute = require('./routes/aboutus');

app.use('/api/about', aboutUsRoute);
// Use Routes with prefixes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/admin', adminRoutes);

// ➕ Contact form route with DB save
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('❌ Error saving message:', err);
      return res.status(500).json({ error: 'Database error.' });
    }

    console.log('✅ Message saved with ID:', result.insertId);
    res.status(200).json({ success: true });
  });
});

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
