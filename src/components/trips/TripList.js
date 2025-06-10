// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TripList = () => {
//   const [trips, setTrips] = useState([]);

//   useEffect(() => {
//     const fetchTrips = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const res = await axios.get('/api/trips', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setTrips(res.data.trips);
//       } catch (err) {
//         console.error('Error fetching trips:', err);
//       }
//     };
//     fetchTrips();
//   }, []);

//   return (
//     <div>
//       <h2>Your Trips</h2>
//       {trips.length === 0 && <p>No trips found.</p>}
//       <ul>
//         {trips.map((trip) => (
//           <li key={trip.id}>
//             <strong>{trip.title}</strong> — {trip.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TripList;
