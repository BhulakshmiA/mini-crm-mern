import React, { useState, useEffect } from 'react';
import api from '../services/api';
import CustomerForm from '../components/Customers/CustomerForm';
import CustomerEditForm from '../components/Customers/CustomerEditForm'; // Import the new component

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCustomer, setEditingCustomer] = useState(null); // State to track the customer being edited

  const fetchCustomers = async () => {
    try {
      const res = await api.get('/customers');
      setCustomers(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch customers.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm('Are you sure you want to delete this customer?')) {
        await api.delete(`/customers/${id}`);
        fetchCustomers(); // Refresh the list
      }
    } catch (err) {
      console.error(err);
      alert('Failed to delete customer.');
    }
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h1>CRM Dashboard</h1>
      {editingCustomer ? (
        <CustomerEditForm 
          customer={editingCustomer}
          onCustomerUpdated={fetchCustomers}
          onCancel={() => setEditingCustomer(null)}
        />
      ) : (
        <CustomerForm onCustomerAdded={fetchCustomers} />
      )}
      <h2>My Customers</h2>
      {customers.length === 0 ? (
        <p>You have no customers yet. Add one to get started!</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer._id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>{customer.name} ({customer.email})</span>
              <div>
                <button onClick={() => handleEdit(customer)} style={{ marginRight: '0.5rem' }}>Edit</button>
                <button onClick={() => handleDelete(customer._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;