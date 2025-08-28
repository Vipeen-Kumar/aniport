import React, { useState, useEffect } from "react";
import image from "../assets/eyeback.png";

// Main component for the rotating eyes animation
function App() {
  // State to store the rotation angle
  const [rotate, setRotate] = useState(0);
  // State to store the pupil's translation (for a slight movement effect)
  const [pupilTranslate, setPupilTranslate] = useState({ x: 0, y: 0 });

  // Effect hook to add and clean up the mouse move event listener
  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e) => {
      // Destructure mouse coordinates from the event
      const { clientX, clientY } = e;

      // Calculate the difference between the mouse position and the center of the screen
      const deltaX = clientX - window.innerWidth / 2;
      const deltaY = clientY - window.innerHeight / 2;

      // Calculate the angle in radians using Math.atan2
      // This gives the angle of the mouse pointer relative to the center of the screen
      const angle = Math.atan2(deltaY, deltaX);

      // Convert the angle from radians to degrees
      const degrees = (angle * 180) / Math.PI;

      // Update the rotation state. We add 180 to correct the initial orientation.
      setRotate(degrees - 180);

      // Calculate pupil translation for a slight "follow" effect
      // We'll use a small fraction of deltaX/Y to keep the movement subtle
      const pupilX = (deltaX / window.innerWidth) * 20; // Max 20px movement
      const pupilY = (deltaY / window.innerHeight) * 20; // Max 20px movement
      setPupilTranslate({ x: pupilX, y: pupilY });
    };

    // Add the event listener when the component mounts
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener when the component unmounts
    // This is important to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="eyes w-full h-screen overflow-hidden">
        {/* The background image container */}
        <div
          className="relative w-full h-full bg-cover bg-center"
          // Using a placeholder image as the local asset is not available
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          {/* Container for the two eyes, positioned in the center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10">
            {/* Left Eye */}
            <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
              {/* Pupil of the eye */}
              <div
                className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full"
                style={{
                  transform: `translate(${pupilTranslate.x}px, ${pupilTranslate.y}px)`, // Apply translation to the pupil
                }}
              >
                {/* The line inside the pupil that will rotate */}
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
                >
                  {/* The white dot (reflection) inside the pupil */}
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-zinc-100 rounded-full">
              {/* Pupil of the eye */}
              <div
                className="relative w-2/3 h-2/3 flex items-center justify-center bg-zinc-900 rounded-full"
                style={{
                  transform: `translate(${pupilTranslate.x}px, ${pupilTranslate.y}px)`, // Apply translation to the pupil
                }}
              >
                {/* The line inside the pupil that will rotate */}
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10"
                >
                  {/* The white dot (reflection) inside the pupil */}
                  <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;