import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ahsan from "../public/Ahsan.jpeg";
import centrality from "../public/centrality.png";
import texttospeech from "../public/texttospeech.png";
import WeatherApp from "../public/WeatherApp.png";
import Centrality from "../public/Centrality (9).png";
import Centrality8 from "../public/Centrality (8).png";
import Centrality7 from "../public/Centrality (7).png";
import Centrality6 from "../public/Centrality (6).png";
import Centrality5 from "../public/Centrality (5).png";
import Centrality4 from "../public/Centrality (4).png";
import Centrality3 from "../public/Centrality (3).png";
import About from "../public/About.jpg";
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  
  // Project data
  const projects = [
    {
      id: 1,
      title: 'Centrality',
      url: 'https://mycentrality.org/',
      image: centrality,
      category: 'fullstack',
      description: 'A comprehensive platform built with MERN stack'
    },
    {
      id: 3,
      title: 'Text-to-Speech App',
      url: 'https://teaxt-to-speech.netlify.app/',
      image: texttospeech,
      category: 'frontend',
      description: 'Application that converts text to speech using React'
    },
    {
      id: 4,
      title: 'Weather Application',
      url: 'https://weather-application0.netlify.app/',
      image: WeatherApp,
      category: 'frontend',
      description: 'Weather forecast app using external APIs'
    },
    {
      id: 5,
      title: 'Global Esquire Three',
      url: 'https://global-esquire-three.netlify.app/',
      image: Centrality3,
      category: 'fullstack',
      description: 'Legal services platform built with MERN stack'
    },
    {
      id: 6,
      title: 'Global Esquire Main',
      url: 'https://global-esquire-main.netlify.app/',
      image: Centrality4,
      category: 'fullstack',
      description: 'Main website for legal services platform'
    },
    {
      id: 7,
      title: 'Global Esquire',
      url: 'https://global-esquire.netlify.app/',
      image: Centrality5,
      category: 'fullstack',
      description: 'Legal consultancy website with user authentication'
    },
    {
      id: 8,
      title: 'Charlie the Steak',
      url: 'https://charlie-the-steak.netlify.app/',
      image: Centrality6,
      category: 'frontend',
      description: 'Restaurant website with online ordering system'
    },
    {
      id: 9,
      title: 'Miss IELTS',
      url: 'https://miss-ielts.netlify.app/',
      image: Centrality7,
      category: 'education',
      description: 'IELTS preparation platform with mock tests'
    },
    {
      id: 10,
      title: 'Crypta Count',
      url: 'https://crypta-count.netlify.app/',
      image: Centrality8,
      category: 'finance',
      description: 'Cryptocurrency tracker and portfolio manager'
    },
    {
      id: 11,
      title: 'Supper Octo',
      url: 'https://supper-octo.netlify.app/NewProject',
      image: Centrality,
      category: 'frontend',
      description: 'Interactive web application with modern UI/UX'
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Filter projects based on activeTab
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section - More sophisticated and minimal */}
      <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black z-0"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-5 z-0"></div>
        <div className="container mx-auto px-6 z-10 flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 flex flex-col items-start justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 text-white leading-tight">
              <span className="block">Ahsan Saeed</span>
              <span className="text-gray-400 font-light">MERN Stack Developer</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300 leading-relaxed max-w-xl">
              Crafting elegant web applications with modern technologies and a focus on performance, scalability, and user experience.
            </p>
            <div className="flex flex-wrap">
              <a 
                href="#projects" 
                className="bg-transparent border border-gray-600 text-gray-300 py-3 px-8 rounded-none font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 mb-4 transform hover:-translate-y-1"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 opacity-50 blur-lg"></div>
              <img 
                src={ahsan} 
                alt="Ahsan Saeed" 
                className="rounded-full w-64 h-64 relative z-10 border-2 border-gray-800 shadow-2xl object-cover" 
              />
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-gray-500 opacity-75 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* About Section - More professional and clean */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isVisible['about'] ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
            <div className="w-24 h-px bg-gray-400 mx-auto"></div>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial="hidden"
              animate={isVisible['about'] ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 opacity-50 blur-md"></div>
                <img 
                  src={About}
                  alt="About Ahsan Saeed" 
                  className="rounded-lg shadow-lg relative z-10" 
                />
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:pl-16"
              initial="hidden"
              animate={isVisible['about'] ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Full-Stack Developer</h3>
              <p className="mb-6 text-gray-600 leading-relaxed">
                I'm a professional full-stack developer with expertise in the MERN stack, delivering robust and scalable web applications for clients across various industries. My approach combines technical proficiency with meticulous attention to detail.
              </p>
              <p className="mb-8 text-gray-600 leading-relaxed">
                Specializing in creating responsive, user-centered applications with clean architecture and optimized performance. My commitment to code quality and continuous learning ensures that I remain at the forefront of modern web development practices.
              </p>
              <div className="flex flex-wrap">
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">MongoDB</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">Express.js</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">React.js</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">Node.js</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">Tailwind CSS</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">RESTful APIs</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">JavaScript</span>
                <span className="bg-gray-100 text-gray-800 px-4 py-2 rounded-none text-sm font-medium mr-3 mb-3 border border-gray-200">TypeScript</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - More elegant and refined */}
      <section id="projects" className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isVisible['projects'] ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Portfolio</h2>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Selected projects demonstrating expertise in architecture, responsive design, and modern web technologies.
            </p>
          </motion.div>
          
          {/* Project Filters - More minimalist */}
          <motion.div 
            className="flex flex-wrap justify-center mb-16"
            initial="hidden"
            animate={isVisible['projects'] ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-6 py-3 mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'all' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveTab('frontend')} 
              className={`px-6 py-3 mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'frontend' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Frontend
            </button>
            <button 
              onClick={() => setActiveTab('fullstack')} 
              className={`px-6 py-3 mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'fullstack' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Full Stack
            </button>
            <button 
              onClick={() => setActiveTab('education')} 
              className={`px-6 py-3 mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'education' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Education
            </button>
            <button 
              onClick={() => setActiveTab('finance')} 
              className={`px-6 py-3 mx-2 mb-4 font-medium transition-all duration-300 ${activeTab === 'finance' ? 'border-b-2 border-gray-900 text-gray-900' : 'text-gray-500 hover:text-gray-900'}`}
            >
              Finance
            </button>
          </motion.div>
          
          {/* Projects Grid - More sophisticated design */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={isVisible['projects'] ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id} 
                className="bg-white rounded-none overflow-hidden shadow-md group hover:shadow-xl transition-all duration-500"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 border border-gray-200">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors duration-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-16"
            initial="hidden"
            animate={isVisible['projects'] ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            <a 
              href="https://www.behance.net/ahsansaeed9060" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-gray-900 text-white py-3 px-8 rounded-none font-medium hover:bg-gray-800 transition-all duration-300 shadow-md"
            >
              <span>View Complete Portfolio</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - More refined */}
      <section id="skills" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={isVisible['skills'] ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Expertise</h2>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Core technologies and methodologies utilized in my professional development work.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            animate={isVisible['skills'] ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">MongoDB</h3>
              <p className="text-gray-600">NoSQL database architecture</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Express.js</h3>
              <p className="text-gray-600">Server-side framework</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">React.js</h3>
              <p className="text-gray-600">Frontend component library</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Node.js</h3>
              <p className="text-gray-600">JavaScript runtime</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Tailwind CSS</h3>
              <p className="text-gray-600">Utility-first framework</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">JavaScript</h3>
              <p className="text-gray-600">Programming languages</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">RESTful APIs</h3>
              <p className="text-gray-600">API architecture</p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-none p-8 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-t border-gray-200"
              variants={fadeInUp}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-800 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">Responsive Design</h3>
              <p className="text-gray-600">Device-agnostic interfaces</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Ahsan Saeed. All rights reserved.</p>
          <p className="text-gray-400">MERN Stack Developer | Based in New South Wales, Australia</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;