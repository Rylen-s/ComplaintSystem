import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type Complaint = {
  id: string;
  name: string;
  email: string;
  complaint: string;
  status: string;
  created_at: string;
};

export default function AdminDashboard(){
    const [complaints, setComplaints] = useState<Complaint[]>([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    const res = await axios.get("http://localhost:3000/complaints");
    setComplaints(res.data);
  };

  const toggleStatus = async (id: string, status: string) => {
    await axios.patch(`http://localhost:3000/complaints/${id}`, {
      status: status === "Pending" ? "Resolved" : "Pending",
    });
    fetchComplaints();
  };

  const deleteComplaint = async (id: string) => {
    await axios.delete(`http://localhost:3000/complaints/${id}`);
    const updatedData = complaints.filter(c => c.id !== id);
    setComplaints(updatedData);
    fetchComplaints();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Complaint</th><th>Date</th><th>Status</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.complaint}</td>
              <td>{new Date(c.created_at).toLocaleString()}</td>
              <td>{c.status}</td>
              <td>
                <button onClick={() => toggleStatus(c.id, c.status)} className="text-blue-600 mr-2">Toggle</button>
                <button onClick={() => deleteComplaint(c.id)} className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/submit">
            <button>Go to Complaint Form</button>
          </Link>
    </div>
  );
}