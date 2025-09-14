const Customer = require('../models/Customer');

exports.createCustomer = async (req, res) => {
  try {
    const customer = new Customer({ ...req.body, ownerId: req.user.id });
    await customer.save();
    res.status(201).send(customer);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ ownerId: req.user.id });
    res.send(customers);
  } catch (error) {
    res.status(500).send(error.message);
  }
};