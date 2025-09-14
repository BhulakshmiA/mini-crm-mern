const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const customerController = require('../controllers/customerController');

router.post('/', auth, customerController.createCustomer);
router.get('/', auth, customerController.getCustomers);

// You can add more routes here as you build out your application
// router.get('/:id', auth, customerController.getCustomerById);
// router.put('/:id', auth, customerController.updateCustomer);
// router.delete('/:id', auth, customerController.deleteCustomer);

module.exports = router;