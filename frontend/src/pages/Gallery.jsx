import React, { useState } from "react";
import { FaCamera, FaInfoCircle, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            src: "https://images.unsplash.com/photo-1596495577886-d920f682a50d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            title: "Annual Day Celebration",
            description: "An unforgettable celebration showcasing student talent and achievements.",
        },
        {
            src: "https://images.pexels.com/photos/256401/pexels-photo-256401.jpeg?cs=srgb&dl=pexels-pixabay-256401.jpg&fm=jpg",
            title: "School Library",
            description: "A quiet place with a vast collection of books for curious minds.",
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/01/06/19/15/soccer-1956948_1280.jpg",
            title: "Sports Day",
            description: "Energetic performances and teamwork on the field!",
        },
        {
            src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
            title: "Science Lab",
            description: "Innovative experiments and hands-on learning in the lab.",
        },
        {
            src: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?cs=srgb&dl=pexels-pixabay-207691.jpg&fm=jpg",
            title: "Cultural Festival",
            description: "A vibrant showcase of cultural diversity and unity.",
        },
        {
            src: "https://cdn.pixabay.com/photo/2017/08/06/06/46/audience-2592201_1280.jpg",
            title: "Classroom Activities",
            description: "Engaging lessons and collaborative learning.",
        },
    ];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-16">
            <Navbar  />




            <div className="container mx-auto px-6 mt-8">
                {/* Section Title */}
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-5xl font-bold text-gray-300"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <FaCamera className="inline-block mb-2 text-blue-400" /> Gallery
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Dive into the moments that make our school exceptional.
                    </motion.p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative rounded-lg shadow-lg bg-gray-800 group cursor-pointer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => openModal(image)}
                        >
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.title}
                                className="w-full h-64 object-cover transform transition-transform duration-300"
                            />
                            {/* Title */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                                    {image.title}
                                </h3>
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                <div className="text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">{image.title}</h3>
                                    <p className="text-gray-300">{image.description}</p>
                                    <FaInfoCircle className="text-3xl text-blue-400 mt-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <motion.div
                        className="relative bg-gray-900 rounded-lg overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <button
                            className="absolute top-4 right-4 text-gray-200 bg-gray-700 rounded-full p-2 focus:outline-none hover:bg-red-500"
                            onClick={closeModal}
                        >
                            <FaTimes />
                        </button>
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-full"
                        />
                        <div className="p-6">
                            <h3 className="text-3xl text-white font-bold mb-2">
                                {selectedImage.title}
                            </h3>
                            <p className="text-gray-400">{selectedImage.description}</p>
                        </div>
                    </motion.div>
                </div>
            )}
            <Footer/>
        </section>

    );
};

export default Gallery;
