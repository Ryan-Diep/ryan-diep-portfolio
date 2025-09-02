import {
  motion
} from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconBriefcase,
  IconCode,
  IconUser,
  IconTools
} from "@tabler/icons-react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { FloatingDock } from "./components/ui/floating-dock";
import { TracingBeam } from "./components/ui/tracing-beam";
import { LinkPreview } from "./components/ui/link-preview";

// Main Portfolio Component
export default function Portfolio() {

  const dockItems = [
    { title: "Home", icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#home" },
    { title: "About", icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#about" },
    { title: "Experience", icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#experience" },
    { title: "Projects", icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#projects" },
    { title: "Skills", icon: <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#skills" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/Ryan-Diep" },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://linkedin.com/in/ryan-diep" },
  ];

  // --- UPDATED EXPERIENCES SECTION ---
  const experiences = [
    { 
      company: "HubSpot", 
      position: "Software Engineer", 
      period: "May 2025 - Present", 
      description: "Infrastructure team 🛠️",
      logoUrl: "https://play-lh.googleusercontent.com/4ciMOQ0XcqbChkij9FV1HPShKHfCJwm5Ph5fypIG6veCOyAvFUmk7PCZgso_ub8nLw=w240-h480-rw",
      websiteUrl: "https://www.hubspot.com/"
    },
    { 
      company: "Ericsson", 
      position: "Software Engineer", 
      period: "May 2024 - Dec 2024",
      description: "Control System team 📡",
      logoUrl: "https://static.dezeen.com/uploads/2018/02/ericsson-rebrand-stockholm-design-lab-design-graphics-visual-identity_dezeen_sq.jpg",
      websiteUrl: "https://www.ericsson.com/"
    },
    { 
      company: "Bank of Canada", 
      position: "Systems Developer", 
      period: "May 2023 - Sept 2023",
      description: "Financial Systems team 💰",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJX4KQmaRRiJsUMIx8Ly-oL7dgjhGI6JtLQ&s",
      websiteUrl: "https://www.bankofcanada.ca/"
    },
    { 
      company: "CU InSpace", 
      position: "Avionics Software Engineer", 
      period: "Sept 2022 - Sept 2023",
      description: "Ground Station team 🚀",
      logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQESotf2cX9dOg/company-logo_200_200/company-logo_200_200/0/1678995464825/cuinspace_logo?e=2147483647&v=beta&t=1gnOwot6JjFLDVKk4lPVusqQbcY32VfJsJFZu0D-1Yw",
      websiteUrl: "https://www.cuinspace.ca/"
    }
  ];

  const projects = [
    { title: "Stock Return Forecasting Model", tech: "Python, Tensorflow, Pandas, NumPy, Keras, Scikit-learn", description: ["LSTM model that makes trading decisions"], github: "https://github.com/Ryan-Diep/stock-return-forecasting" },
    { title: "AI Emergency Assistance App", tech: "React Native, Python, Flask, Groq AI, ElevenLabs, Solace, AWS, Terraform", description: ["Mobile app that allows users make phone calls and discretely contact authorities"], github: "https://github.com/Ryan-Diep/ai-emergency-app" },
    { title: "Real-time Object and Target Detection Program", tech: "Python, OpenCV", description: ["Vision program that detects and calculates distance of objects in real-time"], github: "https://github.com/Ryan-Diep/object-detection" }
  ];
  
  // --- UPDATED SKILLS SECTION ---
  const skills = {
    languages: [
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "Java", slug: "openjdk", color: "d92b34" },
      { name: "C", slug: "c", color: "00599C" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "csharp", slug: "csharp", color: "7f3281" },
      { name: "SQL", slug: "postgresql", color: "4169E1" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
      { name: "HTML5", slug: "html5", color: "E34F26" },
      { name: "CSS3", slug: "css3", color: "1572B6" },
    ],
    frameworks: [
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "React Native", slug: "react", color: "61DAFB" },
      { name: "Flask", slug: "flask", color: "000000" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Spring", slug: "spring", color: "6DB33F" },
      { name: "JUnit", slug: "junit5", color: "25A162" },
      { name: "MongoDB", slug: "mongodb", color: "47A248" },
    ],
    devTools: [
      { name: "Git", slug: "git", color: "F05032" },
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
      { name: "Jenkins", slug: "jenkins", color: "D24939" },
      { name: "Postman", slug: "postman", color: "FF6C37" },
      { name: "Elasticsearch", slug: "elasticsearch", color: "005571" },
    ],
    cloud: [
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Azure", slug: "microsoftazure", color: "0078D4" },
    ]
  };

  return (
    <div className={`relative min-h-screen bg-white dark:bg-zinc-900`}>
      {/* Hero Section */}
      <section id="home">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Ryan Diep</div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">Software Engineer & Computer Science Student</div>
            <div className="flex gap-4">
              <a href="#experience" className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-2 hover:scale-105 transition-transform">View Experience</a>
              <a href="https://ryandiep.tech" target="_blank" rel="noopener noreferrer" className="border border-black dark:border-white rounded-full w-fit text-black dark:text-white px-6 py-2 hover:scale-105 transition-transform">Portfolio Site</a>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      {/* Content Sections */}
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-20 relative pb-32">

          <section id="about" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">About Me</h2>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm Ryan Diep, a software engineer at the University of Carleton
              </div>
            </motion.div>
          </section>
          
          {/* --- UPDATED EXPERIENCE SECTION JSX --- */}
          <section id="experience" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-8">Work Experience</h2>
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col md:flex-row items-center gap-8"
                  >
                    <div className="w-32 h-32 flex-shrink-0">
                      <LinkPreview url={exp.websiteUrl} className="w-full h-full bg-gray-50 dark:bg-zinc-800 rounded-lg flex items-center justify-center p-4 hover:shadow-lg transition-shadow">
                        <img src={exp.logoUrl} alt={`${exp.company} Logo`} className="max-w-full max-h-full object-contain" />
                      </LinkPreview>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.position}</h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-zinc-900 px-3 py-1 rounded-full whitespace-nowrap hidden sm:block">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="projects" className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-8">
                Projects
              </h2>
              <div className="space-y-12">
                {projects.map((proj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 border dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {proj.tech}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                          {proj.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:scale-105 transition-transform"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* --- UPDATED SKILLS SECTION JSX --- */}
          <section id="skills" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-8">Technical Skills</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <img key={skill.name} src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.slug}&logoColor=white`} alt={`${skill.name} badge`} className="hover:scale-110 transition-transform"/>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frameworks.map((skill) => (
                      <img key={skill.name} src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.slug}&logoColor=white`} alt={`${skill.name} badge`} className="hover:scale-110 transition-transform"/>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Developer Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.devTools.map((skill) => (
                      <img key={skill.name} src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.slug}&logoColor=white`} alt={`${skill.name} badge`} className="hover:scale-110 transition-transform"/>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Cloud Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.cloud.map((skill) => (
                      <img key={skill.name} src={`https://img.shields.io/badge/${skill.name}-${skill.color}?style=for-the-badge&logo=${skill.slug}&logoColor=white`} alt={`${skill.name} badge`} className="hover:scale-110 transition-transform"/>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

        </div>
      </TracingBeam>

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}