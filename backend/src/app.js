const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());  // To parse JSON data
app.use(morgan('dev'));   // For logging requests

// Routes
app.use('/api/auth', authRoutes);

module.exports = app;
