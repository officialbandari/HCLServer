const providerService = require('../services/providerService');

class ProviderController {
  // Create a new provider
  async createProvider(req, res) {
    try {
      const providerData = req.body;
      const newProvider = await providerService.createProvider(providerData);
      res.status(201).json(newProvider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get all providers
  async getAllProviders(req, res) {
    try {
      const providers = await providerService.getAllProviders();
      res.status(200).json(providers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get provider by ID
  async getProviderById(req, res) {
    try {
      const { id } = req.params;
      const provider = await providerService.getProviderById(id);
      res.status(200).json(provider);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  // Update provider by ID
  async updateProvider(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      const updatedProvider = await providerService.updateProvider(id, updateData);
      res.status(200).json(updatedProvider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Delete provider by ID
  async deleteProvider(req, res) {
    try {
      const { id } = req.params;
      const deletedProvider = await providerService.deleteProvider(id);
      res.status(200).json(deletedProvider);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProviderController();
