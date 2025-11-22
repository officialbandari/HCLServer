const jwt = require('jsonwebtoken');
const patientService = require('../services/patientService');
const providerService = require('../services/providerService');
const patientDAO = require('../dao/patientDAO');
const providerDAO = require('../dao/providerDAO');
const { patientLoginSchema } = require('../validations/patientValidation');
const { providerLoginSchema, providerCreateSchema: providerVal } = require('../validations/providerValidation');

class AuthController {
  // Patient Login
  async patientLogin(req, res) {
    try {
      // Validate input
      const { email, password } = patientLoginSchema.parse(req.body);

      // Find patient
      const patient = await patientDAO.findByEmail(email);
      if (!patient) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Check password
      const isPasswordValid = await patient.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: patient._id, email: patient.email, role: 'Patient' },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Remove password from response
      const patientResponse = { ...patient.toObject() };
      delete patientResponse.password;

      res.status(200).json({
        token,
        user: patientResponse
      });
    } catch (error) {
      const errorMessage = error.errors ? Object.values(error.errors).map(e => e.message).join(', ') : error.message;
      res.status(400).json({ error: errorMessage });
    }
  }

  // Provider Login
  async providerLogin(req, res) {
    try {
      // Validate input
      const { email, password } = providerLoginSchema.parse(req.body);

      // Find provider
      const provider = await providerDAO.findByEmail(email);
      if (!provider) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Check password
      const isPasswordValid = await provider.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: provider._id, email: provider.email, role: 'Provider' },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Remove password from response
      const providerResponse = { ...provider.toObject() };
      delete providerResponse.password;

      res.status(200).json({
        token,
        user: providerResponse
      });
    } catch (error) {
      const errorMessage = error.errors ? Object.values(error.errors).map(e => e.message).join(', ') : error.message;
      res.status(400).json({ error: errorMessage });
    }
  }
}

module.exports = new AuthController();
