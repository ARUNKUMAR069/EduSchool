import { UserButton, useAuth } from '@clerk/clerk-react';
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import gsap from 'gsap';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { isAuthenticated } = useAuth();  // Clerk's authentication hook
    const navigate = useNavigate();  // To programmatically navigate the user

    // GSAP Animation for Navbar
    useEffect(() => {
        gsap.fromTo(
            '.navbar',
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo(
            '.nav-item',
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
    }, []);

    // Toggle Menu Animation
    useEffect(() => {
        if (menuOpen) {
            gsap.to('.mobile-menu', {
                height: 'auto',
                duration: 0.5,
                ease: 'power3.out',
            });
        } else {
            gsap.to('.mobile-menu', {
                height: 0,
                duration: 0.5,
                ease: 'power3.in',
            });
        }
    }, [menuOpen]);

    // Handle navigation to Dashboard


    return (
        <nav className="navbar w-full h-16 px-4 bg-gray-900 text-white fixed top-0 z-50 shadow-md flex justify-between items-center">
            {/* Left: Logo */}
            <div className="navleft">
                <NavLink to="/" className="text-2xl font-bold hover:text-blue-400">
                    Edu School
                </NavLink>
            </div>

            {/* Right: Desktop Menu */}
            <div className="hidden lg:flex navright items-center space-x-8">
                <NavLink
                    to="/"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/dashboard"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"

                >
                    Dashboard
                </NavLink>
                <NavLink
                    to="/gallery"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"
                >
                    Gallery
                </NavLink>



                <NavLink
                    to="/contact"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/about"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"
                >
                    About
                </NavLink>

            </div>

            {/* Right: User Button */}
            <div className="hidden lg:block">
                <div className="max-w-[80px] max-h-[80px]">
                    <UserButton />
                </div>
            </div>

            {/* Hamburger Menu */}
            <div
                className="lg:hidden flex items-center cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? (
                    <FaTimes className="h-6 w-6 text-white" />
                ) : (
                    <FaBars className="h-6 w-6 text-white" />
                )}
            </div>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu lg:hidden bg-gray-800 overflow-hidden flex flex-col space-y-4 p-4 absolute top-16 w-full`}
            >
                <NavLink
                    to="/"
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/gallery"
                    className="nav-item hover:text-blue-400 cursor-pointer"
                    activeClassName="text-blue-400"
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="/contact"
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/login"
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/register"
                    className="hover:text-blue-400 cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                >
                    Register
                </NavLink>
                <div className="mt-4">
                    <div className="max-w-[60px] max-h-[60px] mx-auto">
                        <UserButton />
                    </div>
                </div>
            </div>

            {/* Custom Modal for Authentication */}

        </nav>
    );
};

export default Navbar;
