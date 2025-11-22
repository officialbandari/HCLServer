const Goal = require('../models/goals');

class GoalsDAO {
  // Create a new goal
  async create(goalData) {
    try {
      const goal = new Goal(goalData);
      return await goal.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all goals
  async findAll() {
    try {
      return await Goal.find();
    } catch (error) {
      throw error;
    }
  }

  // Get goals for a specific patient
  async findByPatientId(patientId) {
    try {
      return await Goal.find({ patientId });
    } catch (error) {
      throw error;
    }
  }

  // Find goal by ID
  async findById(id) {
    try {
      return await Goal.findById(id);
    } catch (error) {
      throw error;
    }
  }

  // Update goal by ID
  async updateById(id, updateData) {
    try {
      return await Goal.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  // Delete goal by ID
  async deleteById(id) {
    try {
      return await Goal.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new GoalsDAO();
