
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/signup', formData);
      alert(res.data.message);
    } catch (err) {
      alert("Error: " + err.response.data.error);
    }
  };

  return (
  <div className="auth-card">
    <h2>Join CoRide</h2>
    <form className="auth-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Full Name" 
        onChange={e => setFormData({...formData, name: e.target.value})} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email Address" 
        onChange={e => setFormData({...formData, email: e.target.value})} 
        required 
      />
      <input 
        type="password" 
        placeholder="Create Password" 
        onChange={e => setFormData({...formData, password: e.target.value})} 
        required 
      />
      <button type="submit" className="btn-primary">Get Started</button>
    </form>
  </div>
);
};

export default Signup;