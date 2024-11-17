import React, { useState, useEffect, useRef } from "react";
import { FaUser, FaEnvelope, FaRegComment, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Button = ({ children, ...props }) => (
  <button
    className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
    {...props}
  >
    <FaPaperPlane className="mr-2" />
    {children}
  </button>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  // Ref for the contact form
  const contactFormRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required.");
      return;
    }

    try {
      // Send form data using fetch API
      const response = await fetch("https://edu-school-delta.vercel.app/sendmessage", { // Adjust the API endpoint if necessary
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify(formData), // Convert the form data to JSON format
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormError(null);
      } else {
        setFormError(result.message || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      setFormError("Error submitting the form. Please try again.");
      console.error("Form submission error:", err);
    }
  };

  // Scroll to Contact Form
  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".hero-subtext",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-[200vh] bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white hero-heading">Get in Touch</h1>
          <p className="text-lg text-gray-300 mt-4 hero-subtext">We are here to help you. Let's start a conversation.</p>
        </div>
        <button
          onClick={scrollToContactForm}
          className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Contact Us
        </button>
      </section>

      {/* Contact Form Section */}
      <section className="py-16" ref={contactFormRef}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-300">Contact Us</h2>
            <p className="text-lg text-gray-400">Fill out the form below, and we’ll get back to you as soon as possible.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-black">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-700">Thank You!</h3>
                <p className="text-lg text-gray-600">Your message has been received. We'll get in touch with you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {formError && <div className="text-red-500 text-center mb-4">{formError}</div>}

                <div className="grid gap-6">
                  <div className="relative">
                    <FaUser className="absolute top-4 left-4 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FaRegComment className="absolute top-4 left-4 text-gray-400" />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-12 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows="6"
                      required
                    />
                  </div>

                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}
<Footer/>
    </div>
  );
};

export default Contact;
