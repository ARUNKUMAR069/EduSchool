import Navbar from "@/components/ui/Navbar";
import React, { useState } from "react";

const DonationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false); // State to track if donation link failed

  const handleDonate = async (e) => {
    e.preventDefault();
    setError(false); // Reset error state before attempting payment
    try {
      const response = await fetch("https://edu-school-delta.vercel.app//donation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });
      const data = await response.json();

      if (data.success) {
        window.location.href = data.paymentLink; // Redirect to UPI payment link
      } else {
        setError(true); // Show fallback link option if payment initiation fails
      }
    } catch (err) {
      console.error("Error initiating donation:", err);
      setError(true); // Show fallback link option if error occurs
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <form
        className="bg-gray-800 p-8 rounded-lg shadow-md w-96 mt-8"
        onSubmit={handleDonate}
      >
        <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Amount (₹)</label>
          <input
            type="number"
            className="w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md"
        >
          Donate Now
        </button>
      </form>

      {/* Fallback Option if Payment Link Fails */}
      {error && (
        <div className="mt-6 bg-red-700 p-4 rounded-lg shadow-md text-center">
          <p className="text-white text-sm">
            Unable to process payment. Please try with the following link:
          </p>
          <a
            href="https://rzp.io/rzp/OCAYTCI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline mt-2 block"
          >
            Donate via Alternate Link
          </a>
        </div>
      )}
    </div>
  );
};

export default DonationForm;
