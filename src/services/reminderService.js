const reminderDAO = require('../dao/reminderDAO');

class ReminderService {
  // Create a new reminder
  async createReminder(reminderData) {
    try {
      return await reminderDAO.create(reminderData);
    } catch (error) {
      throw error;
    }
  }

  // Get all reminders
  async getAllReminders() {
    try {
      return await reminderDAO.findAll();
    } catch (error) {
      throw error;
    }
  }

  // Get reminders for a specific patient
  async getRemindersByPatientId(patientId) {
    try {
      return await reminderDAO.findByPatientId(patientId);
    } catch (error) {
      throw error;
    }
  }

  // Get reminder by ID
  async getReminderById(id) {
    try {
      const reminder = await reminderDAO.findById(id);
      if (!reminder) {
        throw new Error('Reminder not found');
      }
      return reminder;
    } catch (error) {
      throw error;
    }
  }

  // Update reminder by ID
  async updateReminder(id, updateData) {
    try {
      return await reminderDAO.updateById(id, updateData);
    } catch (error) {
      throw error;
    }
  }

  // Delete reminder by ID
  async deleteReminder(id) {
    try {
      return await reminderDAO.deleteById(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ReminderService();
