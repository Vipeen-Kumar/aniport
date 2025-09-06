import React, { useState, useEffect, useRef, useCallback } from 'react';

// Optimized dot component with smooth CSS transitions
const Dot = React.memo(({ x, y, dotSize, isAnimating }) => {
  return (
    <div
      className="absolute rounded-full bg-cyan-400"
      style={{
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        transform: `translate3d(${x}px, ${y}px, 0)`,
        transition: isAnimating ? 'none' : 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        willChange: 'transform',
      }}
    />
  );
});

// Custom mouse cursor component
const MouseCursor = React.memo(({ x, y, visible }) => {
  if (!visible) return null;
  
  return (
    <div
      className="absolute rounded-full bg-red-500 pointer-events-none z-50"
      style={{
        width: '20px',
        height: '20px',
        transform: `translate3d(${x - 10}px, ${y - 10}px, 0)`,
        transition: 'none',
        willChange: 'transform',
        boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)',
      }}
    />
  );
});

const Play = () => {
  const [dots, setDots] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0, visible: false });
  const containerRef = useRef(null);
  const mousePositionRef = useRef({ x: null, y: null });
  const isMouseIdle = useRef(true);
  const idleTimeoutRef = useRef(null);
  const dotsDataRef = useRef([]);
  const [containerReady, setContainerReady] = useState(false);

  // Configuration
  const dotSize = 4;
  const gap = 30;
  const repulsionStrength = 120;
  const returnSpeed = 0.08;
  const friction = 0.88;

  // Wait for container to be ready
  useEffect(() => {
    const checkContainer = () => {
      if (containerRef.current) {
        setContainerReady(true);
      } else {
        // Keep checking until container is ready
        setTimeout(checkContainer, 10);
      }
    };
    
    checkContainer();
  }, []);

  // Initialize dots grid - now depends on containerReady
  useEffect(() => {
    if (!containerReady) return;

    const updateDots = () => {
      if (!containerRef.current) return;
      
      const { clientWidth: width, clientHeight: height } = containerRef.current;
      
      // Make sure we have valid dimensions
      if (width === 0 || height === 0) {
        setTimeout(updateDots, 100);
        return;
      }
      
      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);
      
      const offsetX = (width - cols * gap) / 2 + gap / 2;
      const offsetY = (height - rows * gap) / 2 + gap / 2;

      const newDots = [];
      const newDotsData = [];

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = i * gap + offsetX;
          const originY = j * gap + offsetY;
          
          newDots.push({
            id: `${i}-${j}`,
            x: originX,
            y: originY,
            isAnimating: false,
          });

          newDotsData.push({
            originX,
            originY,
            currentX: originX,
            currentY: originY,
            vx: 0,
            vy: 0,
          });
        }
      }
      
      console.log(`Generated ${newDots.length} dots`); // Debug log
      setDots(newDots);
      dotsDataRef.current = newDotsData;
    };
    
    // Initial generation with a small delay to ensure container is fully rendered
    setTimeout(updateDots, 50);
    
    // Add resize listener
    window.addEventListener('resize', updateDots);
    return () => window.removeEventListener('resize', updateDots);
  }, [containerReady, gap]);

  // Animation loop - only start when we have dots
  useEffect(() => {
    if (dots.length === 0) return;

    let animationId;
    
    const animate = () => {
      if (!isMouseIdle.current && mousePositionRef.current.x !== null) {
        const mouseX = mousePositionRef.current.x;
        const mouseY = mousePositionRef.current.y;
        let hasChanges = false;

        const updatedDots = dots.map((dot, i) => {
          const dotData = dotsDataRef.current[i];
          if (!dotData) return dot;

          let dx = 0;
          let dy = 0;

          const vecX = dotData.currentX - mouseX;
          const vecY = dotData.currentY - mouseY;
          const distance = Math.sqrt(vecX * vecX + vecY * vecY);

          if (distance < repulsionStrength && distance > 0) {
            const force = (repulsionStrength - distance) / repulsionStrength;
            const normalizedX = vecX / distance;
            const normalizedY = vecY / distance;
            dx = normalizedX * force * 12;
            dy = normalizedY * force * 12;
          }

          dotData.vx += dx;
          dotData.vy += dy;
          dotData.vx += (dotData.originX - dotData.currentX) * returnSpeed;
          dotData.vy += (dotData.originY - dotData.currentY) * returnSpeed;
          dotData.vx *= friction;
          dotData.vy *= friction;
          dotData.currentX += dotData.vx;
          dotData.currentY += dotData.vy;

          const moved = Math.abs(dotData.vx) > 0.01 || Math.abs(dotData.vy) > 0.01;
          if (moved) hasChanges = true;

          return {
            ...dot,
            x: dotData.currentX,
            y: dotData.currentY,
            isAnimating: true,
          };
        });

        if (hasChanges) {
          setDots(updatedDots);
        }
      } else {
        const updatedDots = dots.map((dot, i) => {
          const dotData = dotsDataRef.current[i];
          if (!dotData) return dot;

          const distanceToOrigin = Math.sqrt(
            Math.pow(dotData.currentX - dotData.originX, 2) + 
            Math.pow(dotData.currentY - dotData.originY, 2)
          );

          if (distanceToOrigin > 0.5) {
            dotData.vx += (dotData.originX - dotData.currentX) * returnSpeed;
            dotData.vy += (dotData.originY - dotData.currentY) * returnSpeed;
            dotData.vx *= 0.95;
            dotData.vy *= 0.95;
            dotData.currentX += dotData.vx;
            dotData.currentY += dotData.vy;

            return {
              ...dot,
              x: dotData.currentX,
              y: dotData.currentY,
              isAnimating: distanceToOrigin > 2,
            };
          }

          return {
            ...dot,
            x: dotData.originX,
            y: dotData.originY,
            isAnimating: false,
          };
        });

        setDots(updatedDots);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [dots.length > 0 ? dots : [], returnSpeed, friction, repulsionStrength]); // Better dependency

  const handleMouseMove = useCallback((e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mousePositionRef.current = { x, y };
    setCursorPosition({ x, y, visible: true });
    isMouseIdle.current = false;

    clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      isMouseIdle.current = true;
    }, 150);
  }, []);

  const handleMouseLeave = useCallback(() => {
    isMouseIdle.current = true;
    mousePositionRef.current = { x: null, y: null };
    setCursorPosition(prev => ({ ...prev, visible: false }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    setCursorPosition(prev => ({ ...prev, visible: true }));
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full bg-slate-900 overflow-hidden relative cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        willChange: 'contents',
      }}
    >
      {dots.map(dot => (
        <Dot 
          key={dot.id} 
          x={dot.x} 
          y={dot.y} 
          dotSize={dotSize}
          isAnimating={dot.isAnimating}
        />
      ))}
      <MouseCursor 
        x={cursorPosition.x} 
        y={cursorPosition.y} 
        visible={cursorPosition.visible}
      />
    </div>
  );
};

export default Play;
