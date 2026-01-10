import React from 'react';
import codeai5 from '../assets/codeai5.png';
import ima1 from '../assets/ima1.png';
import codebox from '../assets/Codebox.png';

// Data for the projects. In a real application, this might come from an API.
const projects = [
  {
    title: 'LOAN ELIGIBILITY PROJECT',
    imageUrl: 'https://private-user-images.githubusercontent.com/185608141/471216768-6f697222-81d3-4594-9913-90917188d297.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxMTAxODYsIm5iZiI6MTc2NjEwOTg4NiwicGF0aCI6Ii8xODU2MDgxNDEvNDcxMjE2NzY4LTZmNjk3MjIyLTgxZDMtNDU5NC05OTEzLTkwOTE3MTg4ZDI5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQwMjA0NDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zYTRiYTBmNGI2ODlhODQzODIwYjVmZjkzNDM0MjdlMDk0ZDI3Mzk5MDczYTU2ZjJhZDc3NTNiMzY2NjU1OTI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.BMITLPBcs8Pd2zVtx5AuaXCO-lmGClln-lVR63lBte8',
    altText: 'A laptop showing code on a desk',
    technologies: ['Jupyter Notebook', 'Python', 'Streamlit', 'Machine Learning', 'Data Science'],
    link: 'https://loan-eligibility-predictor-ml.streamlit.app/',
  },
  {
    title: 'Code Review AI',
    imageUrl: codeai5,
    altText: 'Close-up of HTML code on a screen',
    technologies: ['JavaScript', 'CSS', 'HTML5', 'React', 'Node.js', 'Tailwind CSS', 'Express.js', 'REST Architecture', 'Google Generative AI SDK'],
    link: 'https://github.com/Vipeen-Kumar/Code-AI',
  },
  {
    title: 'AI Image Enhancer',
    imageUrl: ima1,
    altText: 'Mobile app UI/UX design on a computer screen',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Lucide React', 'Node.js', 'Express.js', 'PicWish AI API'],
    link: 'https://github.com/Vipeen-Kumar/Image-Enhancer',
  },
  {
    title: 'codebox.tech An Online IDE',
    imageUrl: codebox,
    altText: 'Data visualization dashboard with charts and graphs',
    technologies: ['React JS', 'Judge0 CE API', 'Rapid API', 'CodeMirror', 'Tailwind CSS', 'Axios', 'React Router'],
    link: 'https://github.com/Vipeen-Kumar/codebox',
  },
];

/**
 * A reusable component for displaying a single project card.
 * @param {{ title: string, imageUrl: string, altText: string, technologies: string[], link: string }} props
 */
const ProjectCard = ({ title, imageUrl, altText, technologies, link }) => {
  return (
    <div className="cardcontainer w-full">
      {/* Link wrapper for the image container */}
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={`View details for ${title}`}
        className="block group relative w-full h-[55vh] md:h-[60vh] rounded-2xl overflow-hidden shadow-xl hover:shadow-green-400/20 transition-shadow duration-500"
      >
        <img
          className="w-full h-full object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
          src={imageUrl}
          alt={altText}
          onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/800x600/18181b/a3e635?text=${title.replace(' ', '+')}`; }}
        />
        {/* Overlay with the project title and "View Project" prompt */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out backdrop-blur-[2px]">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-2xl tracking-wider text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {title.toUpperCase()}
          </h1>
          <div className="mt-6 px-6 py-2 border-2 border-green-400 text-green-400 rounded-full font-bold uppercase tracking-widest transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:bg-green-400 hover:text-black">
            View Project
          </div>
        </div>
      </a>

      {/* Content section below the image */}
      <div className="mt-6">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold hover:text-green-400 transition-colors duration-300 cursor-default">
            {title}
          </h2>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300 transition-colors duration-300"
            title="Open in new window"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-zinc-800 text-zinc-400 border border-zinc-700 px-3 py-1 rounded-full text-xs font-medium hover:border-green-400/50 hover:text-green-400 transition-all duration-300">
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
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
