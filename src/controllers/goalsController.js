const goalsService = require('../services/goalsService');

class GoalsController {
  // Create a new goal
  async createGoal(req, res) {
    try {
      const goalData = req.body;
      const newGoal = await goalsService.createGoal(goalData);
      res.status(201).json(newGoal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all goals
  async getAllGoals(req, res) {
    try {
      const goals = await goalsService.getAllGoals();
      res.status(200).json(goals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get goal by ID
  async getGoalById(req, res) {
    try {
      const { id } = req.params;
      const goal = await goalsService.getGoalById(id);
      res.status(200).json(goal);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Update goal by ID
  async updateGoal(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedGoal = await goalsService.updateGoal(id, updateData);
      res.status(200).json(updatedGoal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete goal by ID
  async deleteGoal(req, res) {
    try {
      const { id } = req.params;
      const deletedGoal = await goalsService.deleteGoal(id);
      res.status(200).json(deletedGoal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new GoalsController();
