const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const { authenticateToken, requirePatient } = require('../middleware/auth');

// Protect all routes with authentication
router.use(authenticateToken);
router.use(requirePatient);

router.get('/', patientController.getAllPatients);
router.post('/', patientController.createPatient);
router.get('/:id', patientController.getPatientById);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);
router.get('/:id/goals', patientController.getPatientGoals);
router.post('/:id/goals', patientController.createPatientGoal);
router.get('/:id/reminders', patientController.getPatientReminders);
router.post('/:id/reminders', patientController.createPatientReminder);

module.exports = router;
