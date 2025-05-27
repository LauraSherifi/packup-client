const db = require('../config/db');

const createUser = (userData, callback) => {
  const sql = 'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)';
  const values = [userData.username, userData.email, userData.password, userData.role || 'user'];
  db.query(sql, values, callback);
};

const findUserByEmail = (email, callback) => {
  db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

module.exports = {
  createUser,
  findUserByEmail,
};
