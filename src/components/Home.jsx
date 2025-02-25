import React from 'react';
import HomeImage from '../assets/patrickCartoon.mp4';
import { FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen text-white text-center py-16'>
        <div className='flex flex-col items-center'>
            <video 
              src={HomeImage} 
              autoPlay 
              loop 
              muted 
              className='mx-auto mb-20 w-68 h-64 rounded-full object-cover transform 
              transition-transform duration-300 hover:scale-105'
            />
            <h1 className='text-4xl font-bold'>
                I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-50 to-blue-400'>Patrick Bastos</span>
                , Back-End Developer
            </h1>
            <p className='mt-4 text-lg text-gray-300'>
                  Software Engineer focused on continuous learning, building efficient, scalable, and well-structured systems.
            </p>
            <div className='mt-8 space-x-4'>
                <a href="https://wa.me/qr/FIQXYDMTVPGJN1" target="_blank" rel="noopener noreferrer">
                    <button
                    className='bg-gradient-to-r from-green-50 to-blue-500 text-white
                    transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full flex items-center space-x-2'
                    style={{ textShadow: '1px 1px 2px gray' }}>
                        <FaWhatsapp className='w-5 h-5' />
                        <span>Contact With Me</span>
                    </button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Home;