import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Projects', link: '/projects' },
    { label: 'Contact', link: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg bg-white' : 'py-4 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-bold tracking-tighter bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105">
              Manish Vala
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="group text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium rounded-md flex items-center transition-all duration-300 hover:scale-105"
                    >
                      <span>{item.label}</span>
                      {activeDropdown === index ?
                        <ChevronUp className="ml-1 h-4 w-4 transition-all duration-300" /> :
                        <ChevronDown className="ml-1 h-4 w-4 transition-all duration-300" />
                      }
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <Link
                      to={item.link}
                      className="group text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium rounded-md flex items-center transition-all duration-300 hover:scale-105"
                    >
                      <span>{item.label}</span>
                      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 animate-fadeIn">
                      <div className="py-1">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="MyResume.pdf" download>
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                Hire Me
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Fixed to use display block/hidden instead of max-height */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg rounded-b-lg`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <span>{item.label}</span>
                    {activeDropdown === index ?
                      <ChevronUp className="h-4 w-4 transition-all duration-300" /> :
                      <ChevronDown className="h-4 w-4 transition-all duration-300" />
                    }
                  </div>
                </button>
              ) : (
                <Link
                  to={item.link}
                  className="w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.label}</span>
                  </div>
                </Link>
              )}

              {/* Mobile dropdown menu */}
              {item.dropdown && activeDropdown === index && (
                <div className="pl-4 space-y-1 animate-fadeIn">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link}
                      className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile CTA Button */}
          <div className="pt-2">
            <a href="MyResume.pdf" download>
              <button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium py-2 px-4 rounded-full transition-all duration-300 hover:shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}