import React from 'react';
import { Button } from '@/components/ui/button';
import { FaChalkboardTeacher, FaBookReader, FaGraduationCap, FaSchool } from 'react-icons/fa';
import '../index.css'
import { Link, NavLink } from 'react-router-dom';
const DashSec1 = () => {
    return (
        <div className="relative w-full h-[100vh] bg-cover bg-center"
             style={{ backgroundImage: "url('https://ctworld.in/img/gallery/Graduation%20Ceremony/1.webp')" }}>
            {/* Black Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Centered Content */}
            <div className="relative flex flex-col justify-center items-center w-full h-full text-center px-4">
                {/* Main Text */}
                <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">
                    Welcome to [Edu School]
                </h1>
                <p className="text-white text-lg lg:text-2xl font-medium mb-6">
                    Unlocking Potential. Building Futures. Join us to shape tomorrow!
                </p>

                {/* Admission Button */}
                <Link  to='/admission'>
                <Button className="px-6 py-3 text-lg lg:text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-blue-500 transition-all shadow-lg">
                    Admission Now
                </Button>
                </Link>

                {/* Icons Section */}
                <div className="flex gap-6 mt-8">
                    {[
                        { icon: <FaSchool />, label: 'Campus' },
                        { icon: <FaChalkboardTeacher />, label: 'Teachers' },
                        { icon: <FaBookReader />, label: 'Library' },
                        { icon: <FaGraduationCap />, label: 'Graduation' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="text-white text-4xl lg:text-5xl p-4 rounded-full bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900 hover:from-white hover:to-gray-200 transition-all duration-300 shadow-md hover:shadow-lg"
                            title={item.label}
                        >
                            {item.icon}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DashSec1;
