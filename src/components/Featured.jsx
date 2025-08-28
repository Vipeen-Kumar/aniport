import React from 'react';

// The main App component that will be exported for preview.
// In your project, you would just use the Featured component.
export default function App() {
  return <Featured />;
}

/**
 * A component to display featured projects with interactive hover effects.
 */
const Featured = () => {
  return (
    // Main container with a dark background and modern font.
    <div className="w-full bg-zinc-900 text-white py-10 font-sans">
      <div className="w-full px-5 md:px-20">
        {/* Section Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Featured Projects</h1>
        <p className="text-lg md:text-xl mt-4 border-b-[1px] border-zinc-700 pb-6">
          Hover over the cards to reveal the project titles.
        </p>
      </div>

      <div className="px-5 md:px-20">
        {/* Cards container: now using a responsive grid layout */}
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          
          {/* Card 1 */}
          {/* The entire card container now scales on hover */}
          <div className="cardcontainer group relative w-full h-[65vh] transition-transform duration-500 ease-in-out hover:scale-105">
            {/* Project Title: Initially hidden (opacity-0), appears on group-hover */}
            <h1 className="absolute text-5xl md:text-7xl font-extrabold text-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out drop-shadow-lg">
              PROJECT ONE
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              {/* Project Image: No longer has scaling classes */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="A laptop showing code on a desk"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/18181b/a3e635?text=Project+1'; }}
              />
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="cardcontainer group relative w-full h-[65vh] transition-transform duration-500 ease-in-out hover:scale-105">
            {/* Project Title */}
            <h1 className="absolute text-5xl md:text-7xl font-extrabold text-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out drop-shadow-lg">
              PROJECT TWO
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              {/* Project Image */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Close-up of HTML code on a screen"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/18181b/a3e635?text=Project+2'; }}
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className="cardcontainer group relative w-full h-[65vh] transition-transform duration-500 ease-in-out hover:scale-105">
            {/* Project Title */}
            <h1 className="absolute text-5xl md:text-7xl font-extrabold text-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out drop-shadow-lg">
              PROJECT THREE
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              {/* Project Image */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1559028006-44a3a2f20975?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mobile app UI/UX design on a computer screen"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/18181b/a3e635?text=Project+3'; }}
              />
            </div>
          </div>

          {/* Card 4 */}
          <div className="cardcontainer group relative w-full h-[65vh] transition-transform duration-500 ease-in-out hover:scale-105">
            {/* Project Title */}
            <h1 className="absolute text-5xl md:text-7xl font-extrabold text-green-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out drop-shadow-lg">
              PROJECT FOUR
            </h1>
            <div className="card w-full h-full rounded-2xl overflow-hidden">
              {/* Project Image */}
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Data visualization dashboard with charts and graphs"
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/800x600/18181b/a3e635?text=Project+4'; }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
