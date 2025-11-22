const goalsDAO = require('../dao/goalsDAO');

class GoalsService {
  // Create a new goal
  async createGoal(goalData) {
    try {
      return await goalsDAO.create(goalData);
    } catch (error) {
      throw error;
    }
  }

  // Get all goals
  async getAllGoals() {
    try {
      return await goalsDAO.findAll();
    } catch (error) {
      throw error;
    }
  }

  // Get goals for a specific patient
  async getGoalsByPatientId(patientId) {
    try {
      return await goalsDAO.findByPatientId(patientId);
    } catch (error) {
      throw error;
    }
  }

  // Get goal by ID
  async getGoalById(id) {
    try {
      const goal = await goalsDAO.findById(id);
      if (!goal) {
        throw new Error('Goal not found');
      }
      return goal;
    } catch (error) {
      throw error;
    }
  }

  // Update goal by ID
  async updateGoal(id, updateData) {
    try {
      return await goalsDAO.updateById(id, updateData);
    } catch (error) {
      throw error;
    }
  }

  // Delete goal by ID
  async deleteGoal(id) {
    try {
      return await goalsDAO.deleteById(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new GoalsService();
