const express = require('express');
const router = express.Router();
const reminderController = require('../controllers/reminderController');
const { authenticateToken, requirePatient } = require('../middleware/auth');

// Protect all routes with authentication - patients can manage their own reminders
router.use(authenticateToken, requirePatient);

router.get('/', reminderController.getAllReminders);
router.post('/', reminderController.createReminder);
router.get('/:id', reminderController.getReminderById);
router.put('/:id', reminderController.updateReminder);
router.delete('/:id', reminderController.deleteReminder);

module.exports = router;
