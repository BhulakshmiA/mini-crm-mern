import React, { useState } from 'react';
import api from '../../services/api';

const CustomerEditForm = ({ customer, onCustomerUpdated, onCancel }) => {
  const [name, setName] = useState(customer.name);
  const [email, setEmail] = useState(customer.email);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/customers/${customer._id}`, { name, email });
      onCustomerUpdated();
      onCancel();
      alert('Customer updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to update customer.');
    }
  };
  
  return (
    <div>
      <h2>Edit Customer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Update Customer</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default CustomerEditForm;