const User = require('../models/user');

class PatientDAO {
  // Create a new patient
  async create(patientData) {
    try {
      const patient = new User(patientData);
      return await patient.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all patients (role = 'Patient')
  async findAll() {
    try {
      return await User.find({ role: 'Patient' });
    } catch (error) {
      throw error;
    }
  }

  // Find patient by ID
  async findById(id) {
    try {
      return await User.findById(id);
    } catch (error) {
      throw error;
    }
  }

  // Find patient by email
  async findByEmail(email) {
    try {
      return await User.findOne({ email, role: 'Patient' });
    } catch (error) {
      throw error;
    }
  }

  // Update patient by ID
  async updateById(id, updateData) {
    try {
      return await User.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  // Delete patient by ID
  async deleteById(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PatientDAO();
