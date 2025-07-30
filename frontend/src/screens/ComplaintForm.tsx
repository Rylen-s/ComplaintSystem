import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ComplaintForm(){
  const [form, setForm] = useState({ name: "", email: "", complaint: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/complaints", form);
    setSubmitted(true);
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Complaint</h1>
      {submitted ? (
        <div>
      <p className="text-green-500">Complaint submitted successfully!</p>
      <div>
        <Link to="/admin">
          <button>Go to Admin Dashboard</button>
        </Link>
      </div>
    </div>
      ) : (
       <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
  <div className="flex flex-col">
    <label htmlFor="name" className="mb-1 font-medium">Name:  </label>
    <input
      id="name"
      type="text"
      required
      className="border border-gray-300 rounded px-3 py-2"
      onChange={e => setForm({ ...form, name: e.target.value })}
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="mb-1 font-medium">Email:  </label>
    <input
      id="email"
      type="email"
      required
      className="border border-gray-300 rounded px-3 py-2"
      onChange={e => setForm({ ...form, email: e.target.value })}
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="complaint" className="mb-1 font-medium">Complaint: </label>
    <textarea
      id="complaint"
      required
      rows={4}
      className="border border-gray-300 rounded px-3 py-2 resize-none"
      onChange={e => setForm({ ...form, complaint: e.target.value })}
    />
  </div>
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
    Submit
  </button>
</form>

      )}
    </div>
  );
}