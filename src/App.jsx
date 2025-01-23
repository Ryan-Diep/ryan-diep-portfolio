import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Code, 
  Award, 
  Rocket, 
  Server, 
  RollerCoaster,
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
  const navItems = ['Home', 'Projects', 'Skills'];
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 shadow-sm"
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white"
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
              className="text-white hover:text-accent transition-colors"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ 
      x: e.clientX - window.innerWidth / 2, 
      y: e.clientY - window.innerHeight / 2 
    });
  };

  return (
    <motion.div 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-900 to-blue-900"
      >
      {/* Snowflakes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(750)].map((_, index) => (
          <div
            key={index}
            className="snowflake"
            style={{
              animationDuration: `${Math.random() * 30 + 20}s`, // Random duration
              animationDelay: `${Math.random() * 20}s`, // Random delay
              left: `${Math.random() * 100}vw`, // Random position
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.div
        className="relative z-10 text-center text-white"
        animate={{
          x: mousePosition.x / 50,
          y: mousePosition.y / 50
        }}
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-4 drop-shadow-lg"
        >
          Ryan Diep
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl mb-6 drop-shadow-md"
        >
          Software Engineer | Prev @ Ericsson | Prev @ Bank of Canada | Computer Science @ Carleton University
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex justify-center space-x-6"
        >
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
              className="text-white hover:text-accent drop-shadow-lg"
            >
              <Icon size={36} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, skills, icon: Icon, githubLink }) => {
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
      {githubLink && (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          View on GitHub
        </a>
      )}
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Stock Return Forecasting Model',
      description: 'AI-driven LSTM-based stock return forecasting model, achieving superior portfolio performance through feature selection, optimization, and strategic investment.',
      skills: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Keras', 'Scikit-learn'],
      icon: Code,
      githubLink: "https://github.com/Ronkiji/FIAM-hack"
    },
    {
      title: 'AI Emergency Assistance App',
      description: 'Scalable AI-powered emergency assistance app with real-time speech processing and robust cloud infrastructure',
      skills: ['React Native', 'Python', 'Flask', 'Groq AI', 'PyAudio', 'PyDub', 'ElevenLabs'],
      icon: Rocket,
      githubLink: "https://github.com/Ryan-Diep/SilentGuard"
    },
    {
      title: 'Livestream Sentiment Analysis App',
      description: 'Real-time sentiment analysis app for live chat messages, leveraging AI to provide viewer insights during YouTube livestreams',
      skills: ['HTML/CSS,', 'Node.js,', 'Express.js', 'Cohere AI'],
      icon: Server,
      githubLink: "https://github.com/Ryan-Diep/ChatRoller"
    },
    {
      title: 'Field Service App',
      description: 'Scalable AI-powered emergency assistance app with real-time speech processing and robust cloud infrastructure',
      skills: ['Java', 'JavaScript', 'Microsoft Azure', 'SQL', 'Spring Boot', 'Thymleaf'],
      icon: RollerCoaster,
      githubLink: "https://github.com/Ryan-Diep/stellarmax-prototype"
    },
    {
      title: 'Real-time Object and Target Detection Program',
      description: 'Real-time sentiment analysis app for live chat messages, leveraging AI to provide viewer insights during YouTube livestreams',
      skills: ['Python,', 'OpenCV'],
      icon: Award,
      githubLink: "https://github.com/FRC2706/Vision2020-Competition"
    },
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
      skills: ['Python', 'Java', 'C/C++', 'TML/CSS', 'JavaScript', 'SQL', 'Matlab', 'R', 'ShellScript']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'React Native', 'Flask', 'Node.js', 'Express.js', 'JUnit', 'Spring Boot', 'MongoDB', 'Agile']
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'Jenkins', 'VS Code', 'Eclipse', 'R-Studio', 'Maven', 'Yocto', 'Terraform', 'Jira', 'Confluence']
    },
    {
      title: 'Libraries',
      skills: ['OpenCV', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Keras', 'Selinum', 'Appium', 'Apache ECharts', 'Thymeleaf', 'PyAudio', 'PyDub', 'Solace', 'Groq Ai', 'ElevenLabs', 'Cohere AI']
    },
    {
      title: 'Cloud Services',
      skills: ['AWS', 'Microsoft Azure']
    }
  ];

  return (
    <section 
      id="skills" 
      className="container mx-auto px-4 py-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12 text-primary"
      >
        Technical Skills
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
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

const ContactSection = () => {
  return (
    <section 
      id="contact" 
      className="container mx-auto px-4 py-16 bg-primary text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <div className="space-y-4">
          <p>Email: ryandiep5@gmail.com</p>
          <p>Phone: (613) 808-1681</p>
          <div className="flex justify-center space-x-6 pt-6">
            {[
              { icon: Github, link: 'https://github.com/Ryan-Diep' },
              { icon: Linkedin, link: 'https://linkedin.com/in/ryan-diep' },
              { icon: Download, link: '/Ryan_Diep_Resume.pdf' }
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
        </div>
      </motion.div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-background text-text">
      <NavigationBar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default App;