const Provider = require('../models/provider');

class ProviderDAO {
  // Create a new provider
  async create(providerData) {
    try {
      const provider = new Provider(providerData);
      return await provider.save();
    } catch (error) {
      throw error;
    }
  }

  // Get all providers
  async findAll() {
    try {
      return await Provider.find();
    } catch (error) {
      throw error;
    }
  }

  // Find provider by ID
  async findById(id) {
    try {
      return await Provider.findById(id);
    } catch (error) {
      throw error;
    }
  }

  // Find provider by email
  async findByEmail(email) {
    try {
      return await Provider.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  // Update provider by ID
  async updateById(id, updateData) {
    try {
      return await Provider.findByIdAndUpdate(id, updateData, { new: true });
    } catch (error) {
      throw error;
    }
  }

  // Delete provider by ID
  async deleteById(id) {
    try {
      return await Provider.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProviderDAO();
