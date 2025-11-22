const reminderService = require('../services/reminderService');

class ReminderController {
  // Create a new reminder
  async createReminder(req, res) {
    try {
      const reminderData = req.body;
      const newReminder = await reminderService.createReminder(reminderData);
      res.status(201).json(newReminder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all reminders
  async getAllReminders(req, res) {
    try {
      const reminders = await reminderService.getAllReminders();
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get reminder by ID
  async getReminderById(req, res) {
    try {
      const { id } = req.params;
      const reminder = await reminderService.getReminderById(id);
      res.status(200).json(reminder);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Update reminder by ID
  async updateReminder(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedReminder = await reminderService.updateReminder(id, updateData);
      res.status(200).json(updatedReminder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete reminder by ID
  async deleteReminder(req, res) {
    try {
      const { id } = req.params;
      const deletedReminder = await reminderService.deleteReminder(id);
      res.status(200).json(deletedReminder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ReminderController();
