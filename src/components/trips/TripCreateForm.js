import React, { useState } from 'react';
import axios from 'axios';

const TripCreateForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        '/api/trips',
        { title, description, startDate, endDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage('Trip created successfully');
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch (err) {
      setMessage('Error creating trip');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Trip</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Create Trip</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default TripCreateForm;
