// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Import dotenv to load environment variables from .env

// Initialize Express app
const app = express();

// Middleware setup
app.use(cors()); // Enable cross-origin requests
app.use(bodyParser.json()); // Parse incoming request bodies as JSON

// MongoDB connection string (use the environment variable)
const dbURI = process.env.MONGO_URI;  // Using the MONGO_URI from environment variables

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define the Message schema and model
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// POST route for sending contact form submissions
app.post('/send-message', async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required.' });
  }

  try {
    // Create a new message document and save it to the database
    const newMessage = new Message({
      name,
      email,
      message,
    });
    await newMessage.save();

    // Respond with success
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Contact Form API!');
});

// Set the port to listen on
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
