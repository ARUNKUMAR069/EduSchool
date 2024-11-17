// Importing necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Razorpay = require('razorpay');
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

// ----------- Razorpay Donation Routes -----------

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET
// });

// app.post('donation', async (req, res) => {
//   const { name, email, amount } = req.body;

//   if (!name || !email || !amount) {
//     return res.status(400).json({ success: false, message: 'All fields are required.' });
//   }

//   try {
//     const options = {
//       amount: amount * 100,
//       currency: 'INR',
//       receipt: `receipt_${Date.now()}`
//     };

//     const order = await razorpay.orders.create(options);
//     const upiPaymentLink = `upi://pay?pa=${process.env.UPI_ID}&pn=${name}&am=${amount}&cu=INR`;

//     res.status(200).json({
//       success: true,
//       message: 'UPI Payment initiated successfully!',
//       paymentLink: upiPaymentLink
//     });
//   } catch (error) {
//     console.error('Error creating payment order:', error);
//     res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
//   }
// });

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Edu School API!');
});

// Export the Express app for Vercel
module.exports = app;

// ----------- Server Setup -----------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
