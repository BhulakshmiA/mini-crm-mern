const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const leadController = require('../controllers/leadController');

router.post('/:customerId/leads', auth, leadController.createLead);
router.get('/:customerId/leads', auth, leadController.getLeadsByCustomer);

// You can add more routes here for updating and deleting leads
// router.put('/:leadId', auth, leadController.updateLead);
// router.delete('/:leadId', auth, leadController.deleteLead);

module.exports = router;