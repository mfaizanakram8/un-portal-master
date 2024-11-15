require('dotenv').config();  // .env file ko load karne ke liye
const mongoose = require('mongoose');

// .env se database connection string ko load karein
const DB = process.env.DATABASE;

// MongoDB connection establish karein
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.log("MongoDB connection error:", err));
