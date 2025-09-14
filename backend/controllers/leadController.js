const Lead = require('../models/Lead');

exports.createLead = async (req, res) => {
  try {
    const { customerId } = req.params;
    const lead = new Lead({ ...req.body, customerId });
    await lead.save();
    res.status(201).send(lead);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getLeadsByCustomer = async (req, res) => {
  try {
    const { customerId } = req.params;
    const leads = await Lead.find({ customerId });
    res.send(leads);
  } catch (error) {
    res.status(500).send(error.message);
  }
};