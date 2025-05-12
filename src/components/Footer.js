import { useState } from 'react';
import { Mail, ArrowRight, ExternalLink, Heart } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        // In a real app, you would make an API call here
        console.log('Subscribed with email:', email);
        setSubscribed(true);
        setTimeout(() => setSubscribed(false), 3000);
        setEmail('');
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white">
            {/* Top section with subscription */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-8">
                    {/* Left side - brand & subscription */}
                    <div>
                        <a href="/" className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 inline-block mb-4">
                            PORTFOLIO
                        </a>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Delivering stunning designs and memorable experiences that help businesses grow and thrive in the digital space.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3">Subscribe to my newsletter</h3>
                            <div className="flex">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="flex-grow px-4 py-3 bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                                />
                                <button
                                    onClick={handleSubscribe}
                                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-r-lg px-4 flex items-center justify-center hover:opacity-90 transition-opacity duration-300"
                                >
                                    {subscribed ? 'Subscribed!' : <ArrowRight className="h-5 w-5" />}
                                </button>
                            </div>
                            {subscribed && (
                                <p className="text-green-400 text-sm mt-2">
                                    Thank you for subscribing! Check your inbox for updates.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right side - Sitemap */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="/home" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="relative">
                                            Home
                                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="relative">
                                            About
                                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="relative">
                                            Projects
                                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                                        <span className="relative">
                                            Contact
                                            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>


                        {/* Social Icons */}
                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900 mb-4">Connect with me</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.linkedin.com/in/manish-vala-a20844269/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-cyan-400 transition-all duration-300"
                                >
                                    <FaLinkedinIn className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://github.com/valamd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-black transition-all duration-300"
                                >
                                    <FaGithub className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.threads.com/@manish_vala_21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 rounded-full px-2 py-1 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-black hover:to-gray-800 transition-all duration-300 text-sm font-bold"
                                >
                                    @
                                </a>
                                <a
                                    href="https://x.com/VALAMD21"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-400 transition-all duration-300"
                                >
                                    <FaTwitter className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.instagram.com/manish_vala_21/?next=%2F&hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-100 rounded-full p-2 text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 transition-all duration-300"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-800"></div>
            </div>

            {/* Bottom section with copyright */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Manish Vala. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center">
                        <p className="text-gray-400 text-sm flex items-center">
                            Made with <Heart className="h-4 w-4 mx-1 text-pink-500" /> in Creative City
                        </p>
                        <span className="mx-3 text-gray-600">|</span>
                        <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm flex items-center">
                            <Mail className="h-4 w-4 mr-1" /> mdvala2107@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}