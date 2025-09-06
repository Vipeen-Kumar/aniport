import React from 'react';

import MetaLogo from '../assets/Meta-Logo-PNG.png';
import IBMLogo from '../assets/ibm-logo.png';
import DeepLearningLogo from '../assets/images.png';
import MicrosoftLogo from '../assets/micro.png';
import GoogleLogo from '../assets/google.jpg';

// You can replace this with your actual certificate data
const certificateData = [
  {
    id: 1,
    title: 'React Basic',
    issuer: 'Meta',
    date: 'Issued January 13, 2025',
    link: 'https://coursera.org/share/85e0db3d5e872fe6e5c0f3eeec38e4f3',
    logo: MetaLogo,
  },
  {
    id: 2,
    title: 'Programming with JavaScript',
    issuer: 'Meta',
    date: 'Issued November 8, 2024',
    link: 'https://coursera.org/share/10c036baec5595e9b18d2076b2469b48',
    logo: MetaLogo,
  },
  {
    id: 3,
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    date: 'Issued October 16, 2024',
    link: 'https://coursera.org/share/c68fc8ac4446bbddaf79e7a4366985f4',
    logo: IBMLogo,
  },
  {
    id: 4,
    title: 'Natural Language Processing with Classification and Vector Spaces',
    issuer: 'DeepLearning.AI',
    date: 'Issued April 19, 2025',
    link: 'https://coursera.org/share/f272aa0c02de7907632f7a19ef5c3c7e',
    logo: DeepLearningLogo,
  },
  {
    id: 5,
    title: 'Data Analysis and Visualization with Power BI',
    issuer: 'Microsoft',
    date: 'Issued January 30, 2025',
    link: 'https://coursera.org/share/48462ac25abe62120eaff42a442c654b',
    logo: MicrosoftLogo,
  },
    {
    id: 6,
    title: 'Crash Course on Python',
    issuer: 'Google',
    date: 'Issued October 8, 2024',
    link: 'https://coursera.org/share/ce37cedbcc6257c7020990d0f2512907',
    logo: GoogleLogo,
  },
  {
    id: 7,
    title: 'Python Project for Data Science',
    issuer: 'IBM',
    date: 'Issued October 19, 2024',
    link: 'https://coursera.org/share/935bddc9e51177d64751b6ebef34c986',
    logo: IBMLogo,
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
    <div id='certificate' className="bg-slate-900 font-sans p-4 md:p-8">
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
