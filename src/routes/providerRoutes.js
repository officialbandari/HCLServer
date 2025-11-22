const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');
const { authenticateToken, requireProvider } = require('../middleware/auth');

// Protect all routes with authentication
router.use(authenticateToken, requireProvider);

router.get('/', providerController.getAllProviders);
router.post('/', providerController.createProvider);
router.get('/:id', providerController.getProviderById);
router.put('/:id', providerController.updateProvider);
router.delete('/:id', providerController.deleteProvider);

module.exports = router;
