const Reminder = require('../models/reminder');

class ReminderDAO {
  // Create a new reminder
  async create(reminderData) {
    try {
      const reminder = new Reminder(reminderData);
      return await reminder.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all reminders
  async findAll() {
    try {
      return await Reminder.find();
    } catch (error) {
      throw error;
    }
  }

  // Get reminders for a specific patient
  async findByPatientId(patientId) {
    try {
      return await Reminder.find({ patientId });
    } catch (error) {
      throw error;
    }
  }

  // Find reminder by ID
  async findById(id) {
    try {
      return await Reminder.findById(id);
    } catch (error) {
      throw error;
    }
  }

  // Update reminder by ID
  async updateById(id, updateData) {
    try {
      return await Reminder.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  // Delete reminder by ID
  async deleteById(id) {
    try {
      return await Reminder.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ReminderDAO();
