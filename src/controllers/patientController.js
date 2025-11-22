const patientService = require('../services/patientService');
const goalsService = require('../services/goalsService');
const reminderService = require('../services/reminderService');
const { patientCreateSchema, patientUpdateSchema } = require('../validations/patientValidation');
const { goalCreateSchema } = require('../validations/goalsValidation');
const { reminderCreateSchema } = require('../validations/reminderValidation');

class PatientController {
  // Create a new patient
  async createPatient(req, res) {
    try {
      const patientData = patientCreateSchema.parse(req.body);
      const newPatient = await patientService.createPatient(patientData);
      res.status(201).json(newPatient);
    } catch (error) {
      const errorMessage = error.errors ? Object.values(error.errors).map(e => e.message).join(', ') : error.message;
      res.status(400).json({ error: errorMessage });
    }
  }

  // Get all patients
  async getAllPatients(req, res) {
    try {
      const patients = await patientService.getAllPatients();
      res.status(200).json(patients);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get patient by ID
  async getPatientById(req, res) {
    try {
      const { id } = req.params;
      const patient = await patientService.getPatientById(id);
      res.status(200).json(patient);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Update patient by ID
  async updatePatient(req, res) {
    try {
      const { id } = req.params;
      const updateData = patientUpdateSchema.parse(req.body);
      const updatedPatient = await patientService.updatePatient(id, updateData);
      res.status(200).json(updatedPatient);
    } catch (error) {
      const errorMessage = error.errors ? Object.values(error.errors).map(e => e.message).join(', ') : error.message;
      res.status(400).json({ error: errorMessage });
    }
  }

  // Delete patient by ID
  async deletePatient(req, res) {
    try {
      const { id } = req.params;
      const deletedPatient = await patientService.deletePatient(id);
      res.status(200).json(deletedPatient);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get goals for a patient
  async getPatientGoals(req, res) {
    try {
      const { id } = req.params;
      const goals = await goalsService.getGoalsByPatientId(id);
      res.status(200).json(goals);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a goal for a patient
  async createPatientGoal(req, res) {
    try {
      const { id } = req.params;
      const goalData = { ...req.body, patientId: id };
      const newGoal = await goalsService.createGoal(goalData);
      res.status(201).json(newGoal);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get reminders for a patient
  async getPatientReminders(req, res) {
    try {
      const { id } = req.params;
      const reminders = await reminderService.getRemindersByPatientId(id);
      res.status(200).json(reminders);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Create a reminder for a patient
  async createPatientReminder(req, res) {
    try {
      const { id } = req.params;
      const reminderData = { ...req.body, patientId: id };
      const newReminder = await reminderService.createReminder(reminderData);
      res.status(201).json(newReminder);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PatientController();
