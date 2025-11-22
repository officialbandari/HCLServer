const jwt = require('jsonwebtoken');

// JWT Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user; // Contains userId, email, role
    next();
  });
};

// Middleware to check if user is patient
const requirePatient = (req, res, next) => {
  if (req.user.role !== 'Patient') {
    return res.status(403).json({ error: 'Access denied. Patient role required.' });
  }
  next();
};

// Middleware to check if user is provider
const requireProvider = (req, res, next) => {
  if (req.user.role !== 'Provider') {
    return res.status(403).json({ error: 'Access denied. Provider role required.' });
  }
  next();
};

module.exports = {
  authenticateToken,
  requirePatient,
  requireProvider,
};
