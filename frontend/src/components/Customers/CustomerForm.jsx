import React, { useState } from 'react';
import api from '../../services/api';

const CustomerForm = ({ onCustomerAdded }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/customers', { name, email });
      onCustomerAdded(); 
      setName('');
      setEmail('');
      alert('Customer added successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to add customer.');
    }
  };

  return (
    <div>
      <h2>Add a New Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;