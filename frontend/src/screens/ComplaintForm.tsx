import axios from 'axios';
import { useState } from 'react';

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
        <p className="text-green-500">Complaint submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required type="text" placeholder="Name" className="w-full p-2 border" onChange={e => setForm({ ...form, name: e.target.value })} />
          <input required type="email" placeholder="Email" className="w-full p-2 border" onChange={e => setForm({ ...form, email: e.target.value })} />
          <textarea required placeholder="Complaint" className="w-full p-2 border" onChange={e => setForm({ ...form, complaint: e.target.value })} />
          <button className="bg-blue-600 text-white px-4 py-2">Submit</button>
        </form>
      )}
    </div>
  );
}