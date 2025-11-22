const patientDAO = require('../dao/patientDAO');

class PatientService {
  // Create a new patient
  async createPatient(patientData) {
    try {
      // Set role to 'Patient' if not provided
      patientData.role = patientData.role || 'Patient';
      return await patientDAO.create(patientData);
    } catch (error) {
      throw error;
    }
  }

  // Get all patients
  async getAllPatients() {
    try {
      return await patientDAO.findAll();
    } catch (error) {
      throw error;
    }
  }

  // Get patient by ID
  async getPatientById(id) {
    try {
      const patient = await patientDAO.findById(id);
      if (!patient) {
        throw new Error('Patient not found');
      }
      return patient;
    } catch (error) {
      throw error;
    }
  }

  // Get patient by email
  async getPatientByEmail(email) {
    try {
      return await patientDAO.findByEmail(email);
    } catch (error) {
      throw error;
    }
  }

  // Update patient by ID
  async updatePatient(id, updateData) {
    try {
      return await patientDAO.updateById(id, updateData);
    } catch (error) {
      throw error;
    }
  }

  // Delete patient by ID
  async deletePatient(id) {
    try {
      return await patientDAO.deleteById(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PatientService();
