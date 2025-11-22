require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

    console.log('MONGO_URL:', process.env.MONGO_URL);

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:admin123@cluster0.ni99lik.mongodb.net", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Routes
const authRoutes = require('./src/routes/authRoutes');
const patientRoutes = require('./src/routes/patientRoutes');
const providerRoutes = require('./src/routes/providerRoutes');
const goalsRoutes = require('./src/routes/goalsRoutes');
const reminderRoutes = require('./src/routes/reminderRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/patients', patientRoutes);
app.use('/api/providers', providerRoutes);
app.use('/api/goals', goalsRoutes);
app.use('/api/reminders', reminderRoutes);

app.get('/', (req, res) => {
  res.send('HCL Server is running');
});

// Connect to DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
