import React, { useState, useRef } from 'react';
import myphoto from '../assets/myphoto.png';

const About = () => {
  // State to hold the rotation values for the 3D effect
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  // Ref to get a direct reference to the image container DOM element
  const containerRef = useRef(null);

  // This function handles the mouse movement over the container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    // Get the position and dimensions of the container element
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate the mouse position relative to the container's center
    const mouseX = e.clientX - left - width / 2;
    const mouseY = e.clientY - top - height / 2;

    // Define the maximum rotation angle (in degrees)
    const maxRotate = 15;

    // Calculate the rotation on the X and Y axes based on mouse position
    // The further the mouse is from the center, the more it rotates.
    const rotateX = (mouseY / (height / 2)) * -maxRotate;
    const rotateY = (mouseX / (width / 2)) * maxRotate;

    // Update the state with the new rotation values
    setRotate({ x: rotateX, y: rotateY });
  };

  // This function resets the rotation when the mouse leaves the container
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className='w-full py-20 bg-[#c2d756] text-black rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-[3vw] font-inter font-semibold ml-[1vw] mr-[1vw]'>I have a strong interest in software engineering, I am eager to apply my technical skills and problem-solving abilities to innovative projects.</h1>
      <div className='w-full border-t-[2px] border-[#adbd5c] mt-[4vw] flex flex-col md:flex-row gap-5'>
        <div className='w-full md:w-1/2 mt-[2vw] ml-[3vw]'>
          <h1 className='text-[3vw] font-inter font-semibold'>My Skills :</h1>
          <button className='bg-[#015551] text-white text-[1.25vw] flex gap-5 items-center font-mono py-2 px-6 rounded-full mt-[1vw] uppercase tracking-tighter'>
            View My Skills
            <div className='w-2 h-2 bg-white rounded-full'></div>
          </button>
        </div>
        
        {/* The container for the 3D image.
          - We attach the ref and mouse event handlers here.
          - `perspective` is added to create the 3D space.
        */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='w-full md:w-1/2 mt-[2vw] rounded-3xl h-[70vh] mr-[3vw] [perspective:1000px]'
        >
          {/* The image itself.
            - The `transform` style is now dynamically controlled by the `rotate` state.
            - `rotateX` and `rotateY` tilt the image.
            - `scale3d` is used for a smooth scaling effect within the 3D space.
            - `transition` ensures the transformations are animated smoothly.
          */}
          <img 
            src={myphoto} 
            alt="My Photo" 
            className="w-full h-full object-cover rounded-3xl transition-transform duration-300 ease-out"
            style={{
              transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1.05, 1.05, 1.05)`,
              transformStyle: 'preserve-3d'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
