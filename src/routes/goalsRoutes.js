const express = require('express');
const router = express.Router();
const goalsController = require('../controllers/goalsController');
const { authenticateToken, requirePatient } = require('../middleware/auth');

// Protect all routes with authentication - patients can manage their own goals
router.use(authenticateToken, requirePatient);

router.get('/', goalsController.getAllGoals);
router.post('/', goalsController.createGoal);
router.get('/:id', goalsController.getGoalById);
router.put('/:id', goalsController.updateGoal);
router.delete('/:id', goalsController.deleteGoal);

module.exports = router;
