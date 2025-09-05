import React from 'react';

// You can replace this with your actual certificate data
const certificateData = [
  {
    id: 1,
    title: 'Advanced React Concepts',
    issuer: 'React University',
    date: 'Issued May 2024',
    link: '#',
    logo: 'https://placehold.co/100x100/1e293b/ffffff?text=RU',
  },
  {
    id: 2,
    title: 'Tailwind CSS Mastery',
    issuer: 'CSS Gurus',
    date: 'Issued Feb 2024',
    link: '#',
    logo: 'https://placehold.co/100x100/0f172a/ffffff?text=CG',
  },
  {
    id: 3,
    title: 'Full-Stack Web Development',
    issuer: 'Code Academy',
    date: 'Issued Dec 2023',
    link: '#',
    logo: 'https://placehold.co/100x100/1e293b/ffffff?text=CA',
  },
  {
    id: 4,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    date: 'Issued Sep 2023',
    link: '#',
    logo: 'https://placehold.co/100x100/0f172a/ffffff?text=FCC',
  },
  {
    id: 5,
    title: 'Responsive Web Design',
    issuer: 'W3Schools',
    date: 'Issued Jun 2023',
    link: '#',
    logo: 'https://placehold.co/100x100/1e293b/ffffff?text=W3S',
  },
    {
    id: 6,
    title: 'Node.js and Express',
    issuer: 'The Odin Project',
    date: 'Issued Mar 2023',
    link: '#',
    logo: 'https://placehold.co/100x100/0f172a/ffffff?text=TOP',
  },
];

const CertificateCard = ({ title, issuer, date, link, logo }) => (
  // Changed hover animation from translate-y to scale
  <div className="flex-shrink-0 w-80 md:w-96 bg-slate-800 border border-slate-700 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
    <div className="p-6 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <img 
          src={logo} 
          alt={`${issuer} logo`} 
          className="w-16 h-16 rounded-full mr-4 border-2 border-slate-600 object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/100x100/1e293b/ffffff?text=Error'; }}
        />
        <div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-slate-400 text-sm">{issuer}</p>
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-slate-300 mt-2">{date}</p>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        // Changed button hover color
        className="mt-6 block w-full text-center bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-indigo-600"
      >
        View Certificate
      </a>
    </div>
  </div>
);

const Certificate = () => {
  return (
    <div className="bg-slate-900 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">My Certifications</h2>
        <div className="relative">
          {/* Scrollable container */}
          {/* UPDATED: Changed pb-8 to p-8 to add vertical padding, preventing clipping on scale */}
          <div className="flex space-x-6 overflow-x-auto p-8 scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-slate-700">
            {certificateData.map((cert) => (
              <CertificateCard key={cert.id} {...cert} />
            ))}
          </div>
          {/* Fading gradients for a polished look */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
