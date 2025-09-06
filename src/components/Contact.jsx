import React, { useState } from 'react';

// You might need to install lucide-react if you don't have it
// npm install lucide-react
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API
    console.log('Form submitted:', formData);
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000); // Clear status after 3 seconds
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      label: 'Email',
      value: 'vipeenk023@gmail.com',
      href: 'mailto:vipeenk023@gmail.com',
    },
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      label: 'Phone',
      value: '+91 9492215095',
      href: 'tel:9492215095',
    },
    {
      icon: <MapPin className="w-8 h-8 text-cyan-400" />,
      label: 'Address',
      value: 'Mumbai, Maharashtra, India',
      href: '#',
    },
  ];
  
  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/Vipeen-Kumar', label: 'GitHub' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter className="w-6 h-6" />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <div id='contact' className="antialiased bg-gray-900 font-sans text-gray-200 min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 bg-gray-800 rounded-3xl shadow-2xl shadow-cyan-500/10 overflow-hidden">
        
        {/* Contact Info Section */}
        <div className="p-8 md:p-12 bg-gray-800/50 relative overflow-hidden">
           {/* Animated background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-2xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-12 max-w-md">
              Have a project in mind or just want to say hello? Fill out the form or use the contact details below.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-5 group animate-fade-in" style={{ animationDelay: `${index * 150}ms`}}>
                  <div className="flex-shrink-0 bg-gray-700 p-4 rounded-full group-hover:bg-cyan-500 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                    <a href={item.href} className="text-gray-400 hover:text-cyan-300 transition-colors duration-300">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                        <a 
                          key={index} 
                          href={social.href} 
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-gray-700 rounded-full text-gray-400 hover:bg-cyan-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-12 bg-gray-900">
          <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Fields */}
            <div className="relative animate-fade-in" style={{ animationDelay: '100ms' }}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 pt-3 pb-2"
                placeholder="Your Name"
                required
              />
              <label htmlFor="name" className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-cyan-400 peer-focus:text-sm">
                Your Name
              </label>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '250ms' }}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 pt-3 pb-2"
                placeholder="Your Email"
                required
              />
              <label htmlFor="email" className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-cyan-400 peer-focus:text-sm">
                Your Email
              </label>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '400ms' }}>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-cyan-400 transition-colors duration-300 pt-3 pb-2"
                placeholder="Your Message"
                required
              ></textarea>
              <label htmlFor="message" className="absolute left-0 -top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-cyan-400 peer-focus:text-sm">
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <div className="animate-fade-in" style={{ animationDelay: '550ms' }}>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-cyan-600 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <Send className="w-6 h-6 mr-3" />
                Send Message
              </button>
            </div>
          </form>
          {status && (
            <p className="mt-4 text-center text-green-400 transition-opacity duration-300">
              {status}
            </p>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Contact;
