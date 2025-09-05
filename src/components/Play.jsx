import React, { useState, useEffect, useRef } from 'react';

// A single dot component. It's memoized so it only re-renders when its props change.
const Dot = React.memo(({ originX, originY, dotSize }) => {
  // This component represents a single dot in the grid.
  return (
    <div
      className="absolute rounded-full bg-cyan-400"
      style={{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        left: 0, // Position is handled by transform for performance
        top: 0,
        // We use transform to position the dot. This is more performant than changing top/left.
        transform: `translate(${originX}px, ${originY}px)`,
      }}
    />
  );
});

// The main component that orchestrates the grid and animations.
const Play = () => {
  const [dots, setDots] = useState([]);
  const containerRef = useRef(null);
  const animationFrameRef = useRef();
  const mousePositionRef = useRef({ x: null, y: null });
  const isMouseIdle = useRef(true);
  const idleTimeoutRef = useRef(null);

  // --- CONFIGURATION ---
  const dotSize = 4; // Size of each dot in pixels
  const gap = 30; // Gap between dots in pixels
  const repulsionStrength = 100; // How strongly dots are pushed away
  const returnSpeed = 0.07; // How quickly dots return to origin (lower is slower)

  // Effect to generate the grid of dots based on window size
  useEffect(() => {
    const updateDots = () => {
      if (!containerRef.current) return;
      
      const { clientWidth: width, clientHeight: height } = containerRef.current;
      const newDots = [];
      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);
      
      // Calculate offsets to center the grid
      const offsetX = (width - cols * gap) / 2 + gap / 2;
      const offsetY = (height - rows * gap) / 2 + gap / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * gap + offsetX;
          const originY = j * gap + offsetY;
          newDots.push({
            id: `${i}-${j}`,
            originX: originX,
            originY: originY,
            // These will store the current animation values
            currentX: originX,
            currentY: originY,
            vx: 0, // velocity x
            vy: 0, // velocity y
          });
        }
      }
      setDots(newDots);
    };
    
    updateDots(); // Initial generation
    
    // Add resize listener to regenerate grid on window size change
    window.addEventListener('resize', updateDots);
    return () => window.removeEventListener('resize', updateDots);
  }, [gap]); // Rerun only when gap changes
  
  // Main animation loop
  useEffect(() => {
    const animate = () => {
      if (!containerRef.current) return;
      const dotElements = containerRef.current.children;
      
      dots.forEach((dot, i) => {
        let dx = 0;
        let dy = 0;

        if (!isMouseIdle.current && mousePositionRef.current.x !== null) {
          const mouseX = mousePositionRef.current.x;
          const mouseY = mousePositionRef.current.y;
          
          const vecX = dot.currentX - mouseX;
          const vecY = dot.currentY - mouseY;
          const distance = Math.sqrt(vecX * vecX + vecY * vecY);

          // If the mouse is close enough, apply repulsion force
          if (distance < repulsionStrength) {
            const force = (repulsionStrength - distance) / repulsionStrength;
            const angle = Math.atan2(vecY, vecX);
            dx = Math.cos(angle) * force * 10;
            dy = Math.sin(angle) * force * 10;
          }
        }
        
        // Apply velocity to move towards the calculated position
        dot.vx += dx;
        dot.vy += dy;

        // Apply spring-like force to return to origin
        dot.vx += (dot.originX - dot.currentX) * returnSpeed;
        dot.vy += (dot.originY - dot.currentY) * returnSpeed;

        // Apply friction/damping to slow down the movement
        dot.vx *= 0.92;
        dot.vy *= 0.92;

        // Update the dot's current position
        dot.currentX += dot.vx;
        dot.currentY += dot.vy;

        // Apply the transform to the actual DOM element
        if (dotElements[i]) {
          dotElements[i].style.transform = `translate(${dot.currentX}px, ${dot.currentY}px)`;
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [dots, repulsionStrength, returnSpeed]);

  // Event handler for mouse movement
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mousePositionRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    isMouseIdle.current = false;

    clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      isMouseIdle.current = true;
    }, 100);
  };

  // Event handler for when the mouse leaves the container
  const handleMouseLeave = () => {
    isMouseIdle.current = true;
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-slate-900 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {dots.map(dot => (
        <Dot key={dot.id} originX={dot.originX} originY={dot.originY} dotSize={dotSize} />
      ))}
    </div>
  );
};

export default Play;
