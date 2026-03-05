import dotenv from "dotenv";
dotenv.config();
const express = require('express');
const cors = require('cors');
const generateRoute = require('./routes/generate');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use(generateRoute);

// Basic health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'ClubOps AI Backend is running' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
