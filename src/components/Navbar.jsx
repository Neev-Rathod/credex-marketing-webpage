import React, { useState, useEffect } from 'react';
import { FaMoon , FaSun  } from 'react-icons/fa';
import {  ImCross } from 'react-icons/im'
import {IoMenu } from 'react-icons/io5'
    
const Navbar = ({ darktheme, setDarktheme,openAiChat,setOpenAiChat }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleOpenChat = ()=>{
    setOpenAiChat(!openAiChat);
    if(isMenuOpen){

      setIsMenuOpen(!isMenuOpen);
    }
  }
  
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle theme toggle
  const handleThemeToggle = () => {
    if(darktheme === 'light'){

        setDarktheme('dark');
    }else{
        setDarktheme('light');
    }
  };

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`flex items-center justify-between shadow-lg h-16  w-full z-10 dark:bg-gray-900 dark:text-white bg-white text-gray-800 transition-colors duration-300`}>
      <div className="flex items-center px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight">
          <span className='dark:text-blue-400 text-blue-600'>Soft</span>
          <span>Shell</span>
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-1 lg:gap-2 font-medium px-4 md:px-6 lg:px-8 items-center">
        <a href="#home" className={`hover:dark:bg-gray-700 hover:bg-gray-100 p-2 px-3 rounded-md transition-colors`}>Home</a>
        <a href="#how-it-works" className={`hover:dark:bg-gray-700 hover:bg-gray-100 p-2 px-3 rounded-md transition-colors`}>How It works</a>
        <a href="#whyus" className={`hover:dark:bg-gray-700 hover:bg-gray-100 p-2 px-3 rounded-md transition-colors`}>Why Us</a>
        <a href="#testimonials" className={`hover:dark:bg-gray-700 hover:bg-gray-100 p-2 px-3 rounded-md transition-colors`}>Testimonials</a>
        <a href="#contact" className={`hover:dark:bg-gray-700 hover:bg-gray-100 p-2 px-3 rounded-md transition-colors`}>Contact</a>
        
        <button 
          onClick={handleThemeToggle}
          className={`ml-2 p-2 rounded-full dark:bg-gray-700 dark:text-yellow-300 bg-gray-100 text-gray-700 transition-colors cursor-pointer`}
          aria-label="Toggle dark mode"
        >
          {darktheme === 'light'? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
        <button 
          onClick={handleOpenChat}
          className={`ml-2 p-2 rounded dark:bg-gray-700 dark:text-white bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 transition-colors cursor-pointer`}
          aria-label="Toggle dark mode"
        >
          Chat With Ai
        </button>
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex items-center md:hidden px-4">
        <button 
          onClick={handleThemeToggle}
          className={`mr-2 p-2 rounded-full dark:bg-gray-700 dark:text-yellow-300 bg-gray-100 text-gray-700 transition-colors cursor-pointer`}
          aria-label="Toggle dark mode"
        >
          {darktheme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
        </button>
        
        <button 
          onClick={toggleMenu}
          className={`p-2 rounded-md dark:text-white dark:hover:bg-gray-700 text-gray-800 hover:bg-gray-100`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <ImCross  size={24} /> : <IoMenu  size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className={`absolute top-16 left-0 right-0  dark:bg-gray-800 dark:text-white bg-white text-gray-800 shadow-lg md:hidden py-2 z-20`}>
          <a href="#home" className={`block py-3 px-4  dark:hover:bg-gray-700 hover:bg-gray-100`} onClick={toggleMenu}>Home</a>
          <a href="#whyus" className={`block py-3 px-4  dark:hover:bg-gray-700 hover:bg-gray-100`} onClick={toggleMenu}>Why Us</a>
          <a href="#review" className={`block py-3 px-4  dark:hover:bg-gray-700 hover:bg-gray-100`} onClick={toggleMenu}>Reviews</a>
          <a href="#contact" className={`block py-3 px-4  dark:hover:bg-gray-700 hover:bg-gray-100`} onClick={toggleMenu}>Contact</a>
          <button className='block py-3 px-4 dark:hover:bg-gray-700 hover:bg-gray-100' onClick={handleOpenChat}>Chat With Ai</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;