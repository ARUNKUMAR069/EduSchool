// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbURI = process.env.MONGO_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// ----------- Admission Form Schema and Routes -----------

// Define the Admission Schema
const admissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  grade: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  additionalInfo: { type: String },
  createdAt: { type: Date, default: Date.now }
});

const Admission = mongoose.model('Admission', admissionSchema);

// Route to handle admission form submissions (POST)
app.post('/admissions', async (req, res) => {
  const { name, dob, gender, grade, fatherName, motherName, contact, email, address, additionalInfo } = req.body;

  if (!name || !dob || !gender || !grade || !fatherName || !motherName || !contact || !email || !address) {
    return res.status(400).json({ success: false, message: 'All required fields must be filled.' });
  }

  try {
    const newAdmission = new Admission({
      name,
      dob,
      gender,
      grade,
      fatherName,
      motherName,
      contact,
      email,
      address,
      additionalInfo
    });

    await newAdmission.save();
    res.status(200).json({ success: true, message: 'Admission form submitted successfully!' });
  } catch (err) {
    console.error('Error saving admission form:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// Route to get all admissions (GET)
app.get('/admissions', async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, admissions });
  } catch (err) {
    console.error('Error fetching admissions:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// ----------- Contact Form Schema and Routes -----------

// Define the Message Schema for contact form submissions
const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = mongoose.model('Message', messageSchema);

// POST route for sending contact form submissions
app.post('/sendmessage', async (req, res) => {
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

// ----------- Razorpay Donation Routes -----------

// Razorpay setup (for donations, if applicable)


// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Edu School API!');
});

// Export the Express app for Vercel or other deployment platforms
module.exports = app;

// ----------- Server Setup -----------

// Set port from environment variables or default to 5000
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
