import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/ui/Navbar';
import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import Footer from '@/components/ui/Footer';

export const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // GSAP animation for stars
        gsap.to('.star', {
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            stagger: {
                each: 0.2,
                repeat: -1,
                yoyo: true,
            },
        });

        // GSAP animation for CTA
        gsap.fromTo(
            '.cta',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
        );
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(50)].map((_, index) => (
                    <div
                        key={index}
                        className="star bg-white rounded-full opacity-0 absolute"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `twinkle ${Math.random() * 2 + 2}s infinite ease-in-out`,
                        }}
                    />
                ))}
            </div>

            {/* Landing Content */}
            <div className="relative flex flex-col items-center justify-center min-h-screen z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 cta">
                    Welcome to <span className="text-blue-500">Edu School</span>
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-8 cta">
                    Discover a world of learning and innovation. Join us today and unlock your potential.
                </p>

                {/* Button based on authentication */}
                <SignedOut>
                    <Button className="px-8 py-4 text-lg font-bold bg-blue-500 hover:bg-blue-700 rounded-md shadow-md cta">
                        <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                            <span className="text-white">Get Started</span>
                        </SignInButton>
                    </Button>
                </SignedOut>

                <SignedIn>
                    <Button
                        onClick={() => navigate('/dashboard')}
                        className="px-8 py-4 text-lg font-bold bg-green-500 hover:bg-green-700 rounded-md shadow-md cta"
                    >
                        Explore Now
                    </Button>
                </SignedIn>
            </div>

            {/* Footer */}
            <Footer />

            {/* Animations */}
            <style jsx>{`
                .star {
                    position: absolute;
                    opacity: 0;
                    animation: twinkle 2s ease-in-out infinite;
                }

                @keyframes twinkle {
                    0%,
                    100% {
                        opacity: 0.3;
                    }
                    50% {
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
};
