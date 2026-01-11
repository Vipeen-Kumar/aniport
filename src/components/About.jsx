import React from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import myphoto from '../assets/myphoto.png';

const About = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax layers (scales down movement for smaller screens)
  const backX = useTransform(smoothX, [-300, 300], [10, -10]);
  const backY = useTransform(smoothY, [-300, 300], [10, -10]);

  const imgX = useTransform(smoothX, [-300, 300], [-15, 15]);
  const imgY = useTransform(smoothY, [-300, 300], [-15, 15]);

  const topX = useTransform(smoothX, [-300, 300], [-25, 25]);
  const topY = useTransform(smoothY, [-300, 300], [-25, 25]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div id='about' className='w-full py-12 md:py-20 bg-[#00746e] text-white rounded-tl-3xl rounded-tr-3xl overflow-hidden'>
      {/* Responsive Heading */}
      <h1 style={{ lineHeight: '1' }} className='text-2xl sm:text-3xl md:text-[3vw] font-sans font-semibold px-6 md:px-[3vw]'>
        I have a strong interest in software engineering, I am eager to apply my technical skills and problem-solving abilities to innovative projects.
      </h1>

      <div className='w-full border-t-[2px] border-[#015551] mt-8 md:mt-[4vw] flex flex-col md:flex-row items-center md:items-start px-6 md:px-[3vw] gap-10 md:gap-0'>
        
        {/* Left Content - Skills */}
        <div className='w-full md:w-1/2 mt-6 md:mt-[2vw] text-center md:text-left flex flex-col'>
          <h1 className='text-4xl sm:text-5xl md:text-[4vw] font-inter font-semibold'>My Skills :</h1>
          
          <div className='mt-8 md:mt-[2vw] flex flex-col gap-4 px-2 md:px-0'>
            {[
              "Data Science",
              "Full Stack Web Developer",
              "DSA (Data Structures and Algorithms)",
              "Core Concepts of Computer Science"
            ].map((skill, index) => (
              <div key={index} className='flex items-center gap-4 group justify-center md:justify-start'>
                <div className='w-2 h-2 bg-[#015551] rounded-full group-hover:scale-150 transition-transform duration-300'></div>
                <p className='text-lg sm:text-xl md:text-[1.5vw] font-mono tracking-tight text-white/80 hover:text-white transition-colors'>
                  {skill}
                </p>
              </div>
            ))}
          </div>

          <a 
            href="https://drive.google.com/file/d/11v7JvcogOxCzfr3HeFGZyuyVKIq-_l73/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer"
            className='group mx-auto md:mx-0 bg-[#015551] text-white text-sm sm:text-base md:text-[1.1vw] flex w-fit gap-5 items-center font-mono py-3 px-8 rounded-full mt-10 md:mt-[3vw] uppercase tracking-tighter border border-white hover:scale-105 transition-all duration-300'
          >
            View My Skills
            <div className='w-2 h-2 bg-white rounded-full group-hover:w-10 group-hover:h-10 flex items-center justify-center transition-all duration-300 ease-in-out'>
              <ArrowUpRight className='text-[#015551] opacity-0 group-hover:opacity-100 w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-300' />
            </div>
          </a>
        </div>

        {/* Right Content - Responsive Image Stack */}
        <div className='w-full md:w-1/2 flex justify-center items-center min-h-[50vh] md:h-[70vh]'>
          <motion.div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-[70vw] h-[90vw] sm:w-[50vw] sm:h-[65vw] md:w-[22vw] md:h-[30vw] lg:w-[20vw] lg:h-[28vw]"
          >
            {/* Layer 1: Back Shadow Card */}
            <motion.div 
              style={{ x: backX, y: backY }}
              className="absolute inset-0 bg-black/15 rounded-2xl border-2 border-black/5"
            />

            {/* Layer 2: Main Photo */}
            <motion.div 
              style={{ x: imgX, y: imgY }}
              className="absolute inset-0 z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src={myphoto} 
                alt="Vipeen Kumar" 
                className="w-full h-full object-cover scale-110" 
              />
            </motion.div>

            {/* Layer 3: Floating Name Tag */}
            <motion.div 
              style={{ x: topX, y: topY }}
              className="absolute inset-0 z-20 pointer-events-none flex items-end p-4 sm:p-6 md:p-8"
            >
              <span className="text-white font-mono text-xs sm:text-sm md:text-base lg:text-lg bg-black/40 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-lg border border-white/20 whitespace-nowrap">
                ~ Vipeen Kumar
              </span>
            </motion.div>

            {/* Decorative Magnetic "HI!" Badge (Hidden on very small screens to avoid clutter) */}
            <motion.div
              style={{ x: topX, y: topY }}
              className="hidden sm:flex absolute -top-4 -right-4 z-30 bg-[#015551] text-white text-[10px] md:text-[0.8vw] w-12 h-12 md:w-16 md:h-16 rounded-full items-center justify-center font-bold rotate-12 shadow-lg"
            >
              HI!
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;