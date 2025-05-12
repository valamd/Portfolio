import { useState, useEffect } from 'react';
import { ArrowRight, Download, CheckCircle, ChevronRight, Briefcase, MessageCircle } from 'lucide-react';
import PortfolioImage from '../photo/Portfolio.jpg';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const textOptions = [
    "Full-Stack Developer",
    "Creative Thinker"
  ];

  useEffect(() => {
    setIsVisible(true);

    // Typing animation
    const textToType = textOptions[currentTextIndex];
    let charIndex = 0;
    let typingInterval;
    let pauseTimeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (charIndex <= textToType.length) {
          setTypedText(textToType.substring(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          pauseTimeout = setTimeout(() => {
            setIsTyping(false);
          }, 1500);
        }
      }, 100);
    } else {
      typingInterval = setInterval(() => {
        if (charIndex >= 0) {
          setTypedText(textToType.substring(0, charIndex));
          charIndex--;
        } else {
          clearInterval(typingInterval);
          const nextIndex = (currentTextIndex + 1) % textOptions.length;
          setCurrentTextIndex(nextIndex);
          setIsTyping(true);
        }
      }, 50);
    }

    return () => {
      clearInterval(typingInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [currentTextIndex, isTyping]);

  const services = [
    "Responsive Web Design",
    "UI/UX Development",
    "Brand Identity Design",
    "Frontend Development"
  ];

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center">
          {/* Left Side Content */}
          <div className={`w-full md:w-3/5 mt-8 md:mt-0 md:pr-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            {/* Greeting */}
            <div className="mb-4">
              <div className="inline-block px-4 py-1 bg-purple-50 rounded-full text-purple-600 font-medium text-sm mb-4">
                Welcome to my portfolio
              </div>
            </div>

            {/* Hero Text */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Manish Vala</span>
            </h1>

            {/* Animated Text */}
            <div className="h-8 sm:h-10 mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-600 flex items-center">
                <span className="mr-2">A</span>
                <span className="relative">
                  <span className="text-purple-600">{typedText}</span>
                  <span className="absolute top-0 right-0 -mr-2 h-full w-1 bg-purple-600 animate-blink"></span>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              I'm a Computer Engineer with a passion for technology and problem solving.
              I enjoy building web and mobile applications while continuously learning and improving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/projects"
                className="inline-flex items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center bg-white border-2 border-purple-500 text-purple-600 font-medium py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 hover:bg-purple-50 hover:shadow-md"
              >
                Contact Me
                <MessageCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className={`w-full md:w-2/5 flex justify-center mb-8 md:mb-0 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow"></div>

              {/* Profile Photo Container */}
              <div className="relative h-72 w-72 md:h-96 md:w-96 rounded-full border-8 border-white shadow-xl overflow-hidden">
                <img
                  src={PortfolioImage}
                  alt="Profile"
                  className="h-500px] w-[500px] object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className={`flex justify-center mt-8 sm:mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-purple-200 shadow-lg rounded-full flex items-center justify-center">
            <ChevronRight className="h-6 w-6 text-purple-500 transform rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
}