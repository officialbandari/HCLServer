const providerDAO = require('../dao/providerDAO');

class ProviderService {
  // Create a new provider
  async createProvider(providerData) {
    try {
      return await providerDAO.create(providerData);
    } catch (error) {
      throw error;
    }
  }

  // Get all providers
  async getAllProviders() {
    try {
      return await providerDAO.findAll();
    } catch (error) {
      throw error;
    }
  }

  // Get provider by ID
  async getProviderById(id) {
    try {
      const provider = await providerDAO.findById(id);
      if (!provider) {
        throw new Error('Provider not found');
      }
      return provider;
    } catch (error) {
      throw error;
    }
  }

  // Get provider by email
  async getProviderByEmail(email) {
    try {
      return await providerDAO.findByEmail(email);
    } catch (error) {
      throw error;
    }
  }

  // Update provider by ID
  async updateProvider(id, updateData) {
    try {
      return await providerDAO.updateById(id, updateData);
    } catch (error) {
      throw error;
    }
  }

  // Delete provider by ID
  async deleteProvider(id) {
    try {
      return await providerDAO.deleteById(id);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ProviderService();
