import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='text-white px-8 md:px-16 lg:px-24 border border-white rounded-lg mt-4'>
        <div className='container py-2 flex justify-between items-center'>
            <div className='space-x-6 hidden md:flex'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About Me</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='focus:outline-none border border-white p-1 rounded'>
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden'>
                <a href="#home" className='block py-2 hover:text-gray-400'>Home</a>
                <a href="#about" className='block py-2 hover:text-gray-400'>About Me</a>
                <a href="#service" className='block py-2 hover:text-gray-400'>Services</a>
                <a href="#project" className='block py-2 hover:text-gray-400'>Projects</a>
                <a href="#contact" className='block py-2 hover:text-gray-400'>Contact</a>
            </div>
        )}
    </nav>
  )
}

export default Navbar