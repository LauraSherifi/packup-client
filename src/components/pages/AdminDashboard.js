import React, { useEffect, useState, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);
  const [editFormData, setEditFormData] = useState({ username: '', role: '' });

  const token = localStorage.getItem('token');

  const fetchUsers = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:5000/api/admin/users', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch users');
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleDelete = async (id, role) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this ${role}?`);
    if (!confirmDelete) return;

    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to delete');
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditFormData({ username: user.username, role: user.role });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleEditSubmit = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/admin/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(editFormData)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update');
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" >
      <h2 className="text-center mb-4">Admin Dashboard - Manage Users</h2>

      {error && (
        <div className="alert alert-danger text-center" role="alert">
          {error}
        </div>
      )}

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    className="form-control"
                    name="username"
                    value={editFormData.username}
                    onChange={handleEditChange}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>{user.email}</td>
              <td>
                {editingUserId === user.id ? (
                  <select
                    className="form-select"
                    name="role"
                    value={editFormData.role}
                    onChange={handleEditChange}
                  >
                    <option value="user">user</option>
                    <option value="trip_planner">trip_planner</option>
                    {/* <option value="admin">admin</option> */}
                  </select>
                ) : (
                  user.role
                )}
              </td>
              <td className="text-center">
                {editingUserId === user.id ? (
                  <>
                    <button className="btn btn-success btn-sm me-2" onClick={() => handleEditSubmit(user.id)}>Save</button>
                    <button className="btn btn-secondary btn-sm" onClick={() => setEditingUserId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id, user.role)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
