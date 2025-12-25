import React from 'react';

// The main App component that will be exported for preview.
export default function App() {
  return <Featured />;
}

// Data for the projects. In a real application, this might come from an API.
const projects = [
  {
    title: 'LOAN-ELIGIBILITY-PROJECT',
    imageUrl: 'https://private-user-images.githubusercontent.com/185608141/471216768-6f697222-81d3-4594-9913-90917188d297.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMTAxODYsIm5iZiI6MTc2NjEwOTg4NiwicGF0aCI6Ii8xODU2MDgxNDEvNDcxMjE2NzY4LTZmNjk3MjIyLTgxZDMtNDU5NC05OTEzLTkwOTE3MTg4ZDI5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwMjA0NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTRiYTBmNGI2ODlhODQzODIwYjVmZjkzNDM0MjdlMDk0ZDI3Mzk5MDczYTU2ZjJhZDc3NTNiMzY2NjU1OTI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BMITLPBcs8Pd2zVtx5AuaXCO-lmGClln-lVR63lBte8',
    altText: 'A laptop showing code on a desk',
    technologies: ['Jupyter Notebook', 'python'],
  },
  {
    title: 'code-review-AI',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Close-up of HTML code on a screen',
    technologies: ['JavaScript', 'CSS', 'HTML5', 'React', 'Node.js', 'Tailwind CSS'],
  },
  {
    title: 'Project Three',
    imageUrl: 'https://images.unsplash.com/photo-1559028006-44a3a2f20975?q=80&w=1974&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Mobile app UI/UX design on a computer screen',
    technologies: ['Figma', 'React Native', 'Firebase'],
  },
  {
    title: 'Project Four',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    altText: 'Data visualization dashboard with charts and graphs',
    technologies: ['D3.js', 'Python', 'SQL'],
  },
];

/**
 * A reusable component for displaying a single project card.
 * @param {{ title: string, imageUrl: string, altText: string, technologies: string[] }} props
 */
const ProjectCard = ({ title, imageUrl, altText, technologies }) => {
  return (
    <div className="cardcontainer w-full">
      {/* Image container with overflow hidden to contain the zoom effect */}
      <div className="group relative w-full h-[55vh] md:h-[60vh] rounded-2xl overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
          src={imageUrl}
          alt={altText}
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x600/18181b/a3e635?text=${title.replace(' ', '+')}`; }}
        />
        {/* Overlay with the project title that appears on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg tracking-wider">
            {title.toUpperCase()}
          </h1>
        </div>
      </div>
      {/* Content section below the image */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-zinc-800 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * A component to display featured projects with interactive hover effects.
 */
const Featured = () => {
  return (
    // Main container with a dark background and modern font.
    <div id='projects' className="w-full bg-zinc-900 text-white py-10 md:py-20 font-sans">
      <div className="w-full px-5 md:px-20">
        {/* Section Title */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Featured Projects</h1>
        <p className="text-lg md:text-xl mt-4 border-b-[1px] border-zinc-700 pb-6">
          Hover over the cards to see the project details.
        </p>
      </div>

      <div className="px-5 md:px-20">
        {/* Cards container: now using a responsive grid layout */}
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 mt-10">
          {/* Map over the projects data to render a card for each project */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              imageUrl={project.imageUrl}
              altText={project.altText}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
