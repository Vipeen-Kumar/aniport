import React, { useState, useEffect, useRef } from 'react';
import logo2 from '../assets/logo2.png';

const Navbar = () => {
  // State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to add and remove the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if user scrolls more than 10px, otherwise false
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["About me", "Projects", "Certificate", "Contact"];

  const handleScrollToSection = (sectionId) => {
    // Map "aboutme" to "about" to match the ID in About.jsx
    const targetId = sectionId === 'aboutme' ? 'about' : sectionId;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <>
      {/* Main Navbar Container */}
      <div
        className={`fixed z-[999] w-full px-4 sm:px-10 py-4 flex justify-between items-center transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-zinc-900/80 backdrop-blur-md shadow-lg'
            : 'bg-zinc-800'
        }`}
      >
        {/* Logo Container with transition */}
        <div
          className={`logo transition-all duration-300 ease-in-out ${
            isScrolled ? 'w-0 opacity-0' : 'w-20 md:w-24'
          }`}
        >
          {/* Conditionally render the logo to prevent layout shift */}
          {!isScrolled && (
             <img
                src={logo2}
                alt="logo"
                className="rounded-full object-cover border-2 border-white transition-transform duration-300 hover:scale-105"
                style={{ width: '90px', height: 'auto' }}
            />
          )}
        </div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-6'>
          {navLinks.map((item, index) => (
            <a
              key={index}
              onClick={() => handleScrollToSection(item.toLowerCase().replace(' ', ''))}
              className="text-lg font-semibold capitalize text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className='md:hidden'>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Change icon based on menu state */}
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`fixed z-[998] w-full md:hidden transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-zinc-900/95 backdrop-blur-md'
            : 'bg-zinc-800'
        }`}
        style={{ top: '80px' }} // Position below the navbar
      >
        <div className='flex flex-col items-center gap-6 py-8'>
          {navLinks.map((item, index) => (
            <a
              key={index}
              onClick={() => handleScrollToSection(item.toLowerCase().replace(' ', ''))}
              className="text-2xl font-semibold capitalize text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
