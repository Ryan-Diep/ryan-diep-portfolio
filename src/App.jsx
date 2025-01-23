import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Code, 
  Award, 
  Rocket, 
  Server, 
  Download 
} from 'lucide-react';

// Color Theme: Deep Ocean Blue with Accent Teal
const COLORS = {
  primary: '#1A365D',    // Deep Navy Blue
  secondary: '#2C5282',  // Slightly Lighter Blue
  accent: '#319795',     // Teal
  background: '#EDF2F7', // Light Gray-Blue
  text: '#2D3748'        // Dark Gray
};

const NavigationBar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-primary"
        >
          Ryan Diep
        </motion.h1>
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-secondary hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <div 
      id="home"
      className="min-h-screen flex items-center justify-center bg-background text-text"
      style={{ 
        background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
        color: 'white'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Ryan Diep</h1>
        <p className="text-2xl mb-6">Software Engineer | Cybersecurity Enthusiast</p>
        <div className="flex justify-center space-x-6">
          {[
            { icon: Github, link: 'https://github.com/Ryan-Diep' },
            { icon: Linkedin, link: 'https://linkedin.com/in/ryan-diep' }
          ].map(({ icon: Icon, link }) => (
            <motion.a
              key={link}
              href={link}
              target="_blank"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-accent"
            >
              <Icon size={36} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ title, description, skills, icon: Icon }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 space-y-4"
    >
      <div className="flex items-center space-x-4 mb-4">
        <Icon className="text-accent" size={36} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span 
            key={skill} 
            className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Stock Return Forecasting',
      description: 'AI-driven portfolio optimization with LSTM model',
      skills: ['Python', 'TensorFlow', 'Machine Learning'],
      icon: Code
    },
    {
      title: 'AI Emergency Assistance',
      description: 'Real-time speech processing emergency app',
      skills: ['React Native', 'AWS', 'AI'],
      icon: Rocket
    },
    {
      title: 'Livestream Sentiment Analysis',
      description: 'Real-time chat sentiment tracking',
      skills: ['Node.js', 'Express', 'AI'],
      icon: Server
    }
  ];

  return (
    <section 
      id="projects" 
      className="container mx-auto px-4 py-16 bg-background"
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-primary"
      >
        Featured Projects
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Flask', 'Spring Boot', 'Node.js']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Azure', 'Terraform', 'Jenkins']
    }
  ];

  return (
    <section 
      id="skills" 
      className="w-full px-4 py-16"
      style={{ 
        backgroundColor: COLORS.background,
        color: COLORS.text  // Add text color to contrast with background
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-primary"
      >
        Technical Skills
      </motion.h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {skillCategories.map(({ title, skills }) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={title}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-accent">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span 
                  key={skill} 
                  className="bg-accent/10 text-accent px-2 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen w-full bg-background text-text">
      <NavigationBar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default App;