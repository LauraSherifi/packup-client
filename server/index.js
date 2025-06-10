const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (important)
app.use(cors());
app.use(express.json());

//images using multer
app.use('/uploads', express.static('public/uploads'));

// Import Routes (api/...)
const authRoutes = require('./routes/authRoutes');      
const protectedRoutes = require('./routes/protectedRoutes'); 
const tripRoutes = require('./routes/trips');               
const adminRoutes = require('./routes/adminRoutes');        
const aboutUsRoute = require('./routes/aboutus');

// Use Routes
app.use('/api/about', aboutUsRoute);
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);
app.use('/api/trips', tripRoutes);
app.use('/api/admin', adminRoutes);
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

// Test DB conn
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
