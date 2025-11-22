const express = require('express');
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login/patient', authController.patientLogin);
router.post('/login/provider', authController.providerLogin);

