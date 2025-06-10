const db = require('../config/db'); 

const tripModel = {
  createTrip: (tripData, callback) => {
    const sql = `
      INSERT INTO trips (title, description, startDate, endDate, createdBy, img)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      tripData.title,
      tripData.description,
      tripData.startDate,
      tripData.endDate,
      tripData.createdBy,
      tripData.img || null 
    ];
    db.query(sql, params, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },


  getTripsByUser: (userId, callback) => {
    const sql = `SELECT * FROM trips WHERE createdBy = ?`;
    db.query(sql, [userId], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },


  getTripById: (tripId, callback) => {
    const sql = `SELECT * FROM trips WHERE id = ?`;
    db.query(sql, [tripId], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },


  getAllTrips: (callback) => {
    const sql = `SELECT * FROM trips`;
    db.query(sql, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  updateTrip: (tripId, tripData, callback) => {
    const sql = `
      UPDATE trips
      SET title = ?, description = ?, startDate = ?, endDate = ?, img = ?
      WHERE id = ?
    `;
    const params = [
      tripData.title,
      tripData.description,
      tripData.startDate,
      tripData.endDate,
      tripData.img || null,
      tripId
    ];
    db.query(sql, params, (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  deleteTrip: (tripId, callback) => {
    const sql = `DELETE FROM trips WHERE id = ?`;
    db.query(sql, [tripId], (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  }
};

module.exports = tripModel;
