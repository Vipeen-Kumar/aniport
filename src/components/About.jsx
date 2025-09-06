import React, { useState, useRef } from 'react';
import myphoto from '../assets/myphoto.png';

const About = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;

    const maxRotate = 25;
    const rotateX = (mouseY / (height / 2)) * -maxRotate;
    const rotateY = (mouseX / (width / 2)) * maxRotate;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div id='about' className='w-full py-20 bg-[#c2d756] text-black rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-[3vw] font-inter font-semibold ml-[1vw] mr-[1vw]'>I have a strong interest in software engineering, I am eager to apply my technical skills and problem-solving abilities to innovative projects.</h1>
      <div className='w-full border-t-[2px] border-[#adbd5c] mt-[4vw] flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-1/2 mt-[2vw] ml-[3vw]'>
          <h1 className='text-[3vw] font-inter font-semibold'>My Skills :</h1>
          <button className='bg-[#015551] text-white text-[1.25vw] flex gap-5 items-center font-mono py-2 px-6 rounded-full mt-[1vw] uppercase tracking-tighter'>
            View My Skills
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
        </div>
        
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='w-full md:w-1/2 mt-[2vw] rounded-3xl h-[70vh] mr-[3vw] [perspective:1200px] relative'
        >
          {/* Background shadow layer */}
          <div 
            className="absolute inset-0 bg-black/20 rounded-3xl transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotate.x * 0.5}deg) rotateY(${rotate.y * 0.5}deg) translateZ(-50px) scale(0.95)`,
              transformStyle: 'preserve-3d'
            }}
          />
          
          {/* Main image */}
          <img 
            src={myphoto} 
            alt="My Photo" 
            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 ease-out relative z-10"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(50px) scale3d(1.05, 1.05, 1.05)`,
              transformStyle: 'preserve-3d',
              boxShadow: `${rotate.y * 0.5}px ${rotate.x * 0.5}px 40px rgba(0, 0, 0, 0.3)`
            }}
          />
          
          {/* Highlight overlay */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl transition-transform duration-300 ease-out pointer-events-none"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(60px)`,
              transformStyle: 'preserve-3d',
              opacity: Math.abs(rotate.x) + Math.abs(rotate.y) > 0 ? 0.6 : 0
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
