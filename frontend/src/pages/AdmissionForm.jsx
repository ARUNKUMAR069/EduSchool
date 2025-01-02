"use client";
import '../index.css'
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FaUser, FaCalendarAlt, FaPhone, FaEnvelope, FaHome, FaInfoCircle, FaMale, FaFemale } from "react-icons/fa";
import Navbar from "@/components/ui/Navbar"; // Adjust as needed
import Footer from '@/components/ui/Footer';


const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    grade: "",
    fatherName: "",
    motherName: "",
    contact: "",
    email: "",
    address: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://edu-school-delta.vercel.app/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Admission form submitted successfully!");
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  useEffect(() => {
    // GSAP Animation
    gsap.fromTo(
      ".form-container",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 30, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".form-field",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3, stagger: 0.2 }
    );
  }, []);

  return (
    

      
    <div className="relative h-[140vh] bg-gradient-to-r from-blue-900 via-purple-900 to-black text-white flex flex-col items-center justify-center p-5 ">
    
      <div className="absolute w-full h-full overflow-hidden z-0 bt-10 p-5">
        <div className="stars"></div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="form-container bg-gray-900 p-10 rounded-lg shadow-2xl w-full max-w-4xl z-10"
        >
        <h2 className="text-4xl font-bold text-center mb-6">Admission Form</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              <FaUser className="mr-2" /> Student's Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              <FaCalendarAlt className="mr-2" /> Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              Grade Applying For
            </label>
            <select
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              >
              <option value="" disabled>
                Select grade
              </option>

              <option value="pre-nursery"> Pre Nursery</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>

              {Array.from({ length: 10 }, (_, i) => (
                <option key={i + 1} value={i + 1}>
                  Class {i + 1}
                </option>
              ))}
              <option value="11-medical">+1 Medical</option>
              <option value="11-nonmedical">+1 Non-Medical</option>
              <option value="11-arts">+1 Arts</option>
              <option value="12-medical">+2 Medical</option>
              <option value="12-nonmedical">+2 Non-Medical</option>
              <option value="12-arts">+2 Arts</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              Father's Name
            </label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter father's name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              Mother's Name
            </label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              placeholder="Enter mother's name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              <FaPhone className="mr-2" /> Contact Number
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>

          <div className="form-field">
            <label className="flex items-center font-medium mb-2">
              <FaEnvelope className="mr-2" /> Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
              required
              />
          </div>
        </div>

        <div className="form-field mt-6">
          <label className="flex items-center font-medium mb-2">
            <FaHome className="mr-2" /> Residential Address
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter residential address"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            required
            ></textarea>
        </div>

        <div className="form-field mt-4">
          <label className="flex items-center font-medium mb-2">
            <FaInfoCircle className="mr-2" /> Additional Information
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Any additional information"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
            ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md mt-6"
          >
          Submit Application
        </button>
      </form>
     
    </div>
          
  );
};

export default AdmissionForm;
