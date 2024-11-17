import React from "react";
import { FaTrophy, FaChalkboardTeacher, FaGraduationCap, FaUsers, FaMedal, FaAward, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const AboutPage = () => {
  // Data for Core Values
  const coreValues = [
    { icon: <FaTrophy className="text-yellow-400 text-4xl mb-4" />, title: "Integrity", description: "Upholding honesty and transparency in all our endeavors." },
    { icon: <FaChalkboardTeacher className="text-green-400 text-4xl mb-4" />, title: "Innovation", description: "Encouraging creative solutions and embracing new ideas." },
    { icon: <FaGraduationCap className="text-purple-400 text-4xl mb-4" />, title: "Excellence", description: "Striving for the best in academics and extracurriculars." },
  ];

  // Data for Achievements
  const achievements = [
    { icon: <FaUsers className="text-blue-400 text-6xl mb-4" />, value: "500+", label: "Students Enrolled" },
    { icon: <FaChalkboardTeacher className="text-green-400 text-6xl mb-4" />, value: "50+", label: "Qualified Teachers" },
    { icon: <FaMedal className="text-yellow-400 text-6xl mb-4" />, value: "20+", label: "Awards Won" },
    { icon: <FaClock className="text-purple-400 text-6xl mb-4" />, value: "10+", label: "Years of Excellence" },
  ];

  // Data for Testimonials
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "Edu School has provided me with the skills I need to succeed in the real world.",
      name: "John Doe",
    },
    {
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "The teachers are amazing, and the community is so supportive.",
      name: "Jane Smith",
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
      text: "The community at Edu School is so supportive and welcoming.",
      name: "Emma Stone",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <Navbar/>
      {/* Section 1: Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')" }}></div>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-bold z-10">
          Welcome to <span className="text-blue-500">Edu School</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-lg md:text-2xl text-gray-300 mt-4 z-10">
          Unlocking potential through knowledge and innovation.
        </motion.p>
        <motion.button
          onClick={() => document.getElementById("core-values").scrollIntoView({ behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          className="px-8 py-4 bg-blue-500 hover:bg-blue-700 rounded-md shadow-md text-lg font-bold mt-8 z-10"
        >
          Discover More
        </motion.button>
      </section>

      {/* Section 2: Core Values */}
      <section id="core-values" className="py-16 px-8 bg-gray-800">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-blue-500">Core Values</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center">
              {value.icon}
              <h3 className="text-xl font-bold text-blue-500 mb-4">{value.title}</h3>
              <p className="text-gray-400 text-center">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: Achievements */}
      <section className="py-16 px-8 bg-gray-700">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-blue-500">Achievements</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {achievements.map((achievement, index) => (
            <motion.div key={index} whileHover={{ scale: 1.1 }} className="p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col items-center">
              {achievement.icon}
              <h3 className="text-3xl font-bold text-blue-500 mt-4">{achievement.value}</h3>
              <p className="text-gray-400">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Testimonials */}
      <section className="py-16 px-8 bg-gray-800">
        <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-5xl font-bold text-center mb-12">
          What Our <span className="text-blue-500">Students Say</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img src={testimonial.image} alt={testimonial.name} className="mx-auto mb-4 rounded-full" />
              <p className="text-gray-400">{`"${testimonial.text}"`}</p>
              <h3 className="text-blue-500 font-bold mt-4">- {testimonial.name}</h3>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutPage;
