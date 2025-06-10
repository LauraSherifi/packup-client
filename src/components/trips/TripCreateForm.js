// import React, { useState, useRef } from 'react';
// import axios from 'axios';

// const TripCreateForm = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [img, setImg] = useState(null);
//   const [preview, setPreview] = useState('');
//   const [message, setMessage] = useState('');

//   const fileInputRef = useRef(null);

//   const handleImageSelect = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImg(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('startDate', startDate);
//     formData.append('endDate', endDate);
//     if (img) formData.append('img', img);

//     try {
//       await axios.post('/api/trips', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       setMessage('Trip created successfully');
//       setTitle('');
//       setDescription('');
//       setStartDate('');
//       setEndDate('');
//       setImg(null);
//       setPreview('');
//     } catch (err) {
//       setMessage('Error creating trip');
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
//       <h2>Create New Trip</h2>

//       <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
//       <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
//       <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

//       {/* Hidden file input */}
//       <input
//         type="file"
//         accept="image/*"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleImageSelect}
//       />

//       {/* Button to trigger file input */}
//       <button type="button" onClick={() => fileInputRef.current.click()}>
//         {img ? 'Change Image' : 'Add Image'}
//       </button>

//       {/* Image preview */}
//       {preview && (
//         <div style={{ marginTop: '10px' }}>
//           <img src={preview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
//         </div>
//       )}

//       <button type="submit">Create Trip</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default TripCreateForm;
