import React from "react";
import image from "../assets/image2.png";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const LandingPage = () => {
  return (
    // Use min-h-screen to prevent content from being cut off on smaller viewports
    // Reduced padding on mobile (p-4) and increased on larger screens (md:p-8)
    <div data-scroll data-scroll-section data-scroll-speed="-.25" className="w-full min-h-screen bg-zinc-900 p-4 md:p-8 relative text-white">

      {/* Button position is adjusted for different screen sizes */}
      <button className="absolute right-4 top-4 md:right-20 md:top-52 bg-emerald-500 text-white text-lg py-2 px-6 rounded-lg font-bold transition-all duration-300 hover:bg-emerald-600 hover:scale-105 hover:shadow-lg">
        Hire Me
      </button>

      {/* Text container: Adjusted margins and padding for responsiveness */}
      <div className="max-w-screen-lg mx-auto mt-32 md:mt-44">
        {/* Main heading text uses responsive font sizes */}
        <h1 className="text-5xl md:text-6xl lg:text-[4.5vw] font-bold uppercase leading-tight tracking-tight font-mono">
          I am a <span className="text-emerald-400">learner</span> having a
          passionate <span className="text-amber-400">Mindset</span> for
        </h1>
        
        {/* Container for image and second part of the heading */}
        {/* It stacks vertically on mobile (flex-col) and goes horizontal on large screens (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row items-center mt-4 gap-4 md:gap-8">
          
          {/* --- ANIMATED IMAGE --- */}
          {/* We replace `img` with `motion.img` and add animation properties */}
          <motion.img
            src={image}
            alt="Vipeen Kumar profile"
            className="rounded-xl object-cover border-4 border-white w-48 md:w-64" // Responsive width
            initial={{ opacity: 0, y: 20, scale: 0.9 }} // Initial state (before animation)
            animate={{ opacity: 1, y: 0, scale: 1 }}     // Animate to this state
            transition={{ duration: 0.6, ease: "easeOut" }} // Animation duration and easing
            whileHover={{ scale: 1.05, rotate: -2, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)" }} // Animation on hover
          />

          {/* Second heading text with responsive font sizes */}
          <h1 className="text-5xl md:text-6xl lg:text-[4.5vw] font-bold uppercase leading-tight tracking-tight font-mono text-center lg:text-left">
            <span className="text-red-600">web development </span>
            and <span className="text-blue-500">design </span>
            and <span className="text-yellow-400">AI & ML</span>
          </h1>
        </div>

        {/* Footer section with responsive font sizes */}
        <div className="border-t-[1px] border-zinc-800 mt-16 pt-4 flex justify-between items-center">
          {["~Vipeen Kumar", "Ready to work"].map((item, index) => (
            <p key={index} className="text-md md:text-lg lg:text-[2vw] font-bold font-mono">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
