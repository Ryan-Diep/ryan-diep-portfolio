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
  IconTools,
  IconBrandOpenSource,
  IconMail,
  IconPhone
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
    { title: "Open Source", icon: <IconBrandOpenSource className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#opensource" },
    { title: "Projects", icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#projects" },
    { title: "Skills", icon: <IconTools className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "#skills" },
    { title: "GitHub", icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://github.com/Ryan-Diep" },
    { title: "LinkedIn", icon: <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />, href: "https://linkedin.com/in/ryan-diep" },
  ];

  const experiences = [
    { 
      company: "Shopify", 
      position: "Software Engineer Intern", 
      period: "Jan 2026", 
      description: "Catalogue Team (ML Infra) 🛍️",
      logoUrl: "https://www.citypng.com/public/uploads/preview/shopify-bag-icon-symbol-logo-701751695132537nenecmhs0u.png",
      websiteUrl: "https://www.shopify.com/"
    },
    { 
      company: "Crypto4A", 
      position: "Software Engineer Intern", 
      period: "Sept 2025 - Present", 
      description: "Platform Team (Backend) 🔐",
      logoUrl: "https://media.glassdoor.com/sqll/1818903/crypto4a-squarelogo-1631612292419.png",
      websiteUrl: "https://www.crypto4a.com/"
    },
    { 
      company: "HubSpot", 
      position: "Software Engineer Intern", 
      period: "May 2025 - Aug 2025", 
      description: "Service Maturity Team (Backend Infra) 🧡",
      logoUrl: "https://images.seeklogo.com/logo-png/27/1/hubspot-logo-png_seeklogo-273533.png",
      websiteUrl: "https://www.hubspot.com/"
    },
    { 
      company: "Ericsson", 
      position: "Software Engineer Intern", 
      period: "May 2024 - Dec 2024",
      description: "Auxiliary Control Systems (Embedded) 📡",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBqQp5JIH1vN4G_h0lBrf0m3aStHHodKRiw&s",
      websiteUrl: "https://www.ericsson.com/"
    },
    { 
      company: "Bank of Canada", 
      position: "Software Developer Intern", 
      period: "May 2023 - Sept 2023",
      description: "Findur (QA) 💰",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtJX4KQmaRRiJsUMIx8Ly-oL7dgjhGI6JtLQ&s",
      websiteUrl: "https://www.bankofcanada.ca/"
    }
  ];

  const openSourceWork = [
    { 
      title: "The Go Programming Language", 
      repo: "golang/go",
      tech: "Golang", 
      description: [
        "Contributed to the official Go language repository (golang/go).",
        "Fixed Profile-Guided Optimization (PGO) parsing errors for 0-sample profiles."
      ], 
      github: "https://go-review.googlesource.com/q/owner:ryandiep5@gmail.com" 
    }
  ];

  const projects = [
    { 
      title: "Crypto Arbitrage Bot", 
      tech: "Go, Java, Apache Kafka, WebSockets", 
      description: [
        "Real-time arbitrage system connecting to Coinbase, Binance, ByBit, and OKX via WebSockets.",
        "Streams market data to Kafka topics to identify price discrepancies."
      ], 
      github: "https://github.com/Ryan-Diep/crypto-arbitrage" 
    },
    { 
      title: "IoT Light Switch", 
      tech: "Go, GPIO, I2C", 
      description: [
        "Physical servo-controlled light switch activated by voice and light sensors.",
        "Implemented low-level hardware control using Go."
      ], 
      github: "https://github.com/Ryan-Diep/light-switch" 
    },
    { 
      title: "Quantum Image Classification", 
      tech: "Python, Qiskit, PyTorch, Quantum Computing", 
      description: [
        "Hybrid quantum-classical neural network for image classification tasks.",
        "Explored quantum states to optimize feature extraction vs classical CNNs."
      ], 
      github: "https://github.com/Ryan-Diep/Quantum-Image-Classification" 
    },
    { 
      title: "AI Emergency Assistance App", 
      tech: "Go, React Native, Python, AWS, Solace", 
      description: [
        "Distributed system using Solace PubSub+ for event streaming.",
        "Sub-4s generative AI response using Groq AI and ElevenLabs."
      ], 
      github: "https://github.com/Ryan-Diep/ai-emergency-app" 
    },
        { 
      title: "Stock Return Forecasting Model", 
      tech: "Python, Tensorflow, Keras, Pandas", 
      description: [
        "Trained an LSTM RNN to forecast stock returns over a 23-year dataset.",
        "Beat the S&P 500 by 13% using RF and XGBoost feature selection."
      ], 
      github: "https://github.com/Ryan-Diep/stock-return-forecasting" 
    }
  ];
  
  const skills = {
    languages: [
      { name: "Go", slug: "go", color: "00ADD8" },
      { name: "Java", slug: "openjdk", color: "d92b34" },
      { name: "Python", slug: "python", color: "3776AB" },
      { name: "C++", slug: "cplusplus", color: "00599C" },
      { name: "C", slug: "c", color: "00599C" },
      { name: "SQL", slug: "postgresql", color: "4169E1" },
      { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
    ],
    frameworks: [
      { name: "Spring Boot", slug: "spring", color: "6DB33F" },
      { name: "React", slug: "react", color: "61DAFB" },
      { name: "TensorFlow", slug: "tensorflow", color: "FF6F00" },
      { name: "Flask", slug: "flask", color: "000000" },
      { name: "Node.js", slug: "nodedotjs", color: "339933" },
      { name: "Kafka", slug: "apachekafka", color: "231F20" },
    ],
    devTools: [
      { name: "Docker", slug: "docker", color: "2496ED" },
      { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
      { name: "Terraform", slug: "terraform", color: "7B42BC" },
      { name: "Git", slug: "git", color: "F05032" },
      { name: "Jenkins", slug: "jenkins", color: "D24939" },
      { name: "Elasticsearch", slug: "elasticsearch", color: "005571" },
    ],
    cloud: [
      { name: "AWS", slug: "amazonaws", color: "232F3E" },
      { name: "Azure", slug: "microsoftazure", color: "0078D4" },
    ]
  };

  return (
    <div className={`relative min-h-screen bg-white dark:bg-zinc-900`}>
      <section id="home">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">Ryan Diep</div>
            <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
              Building Scalable Distributed Systems & ML Infra
            </div>
            <div className="flex gap-4">
              <a href="#experience" className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-6 py-2 hover:scale-105 transition-transform">View Experience</a>
            </div>
          </motion.div>
        </AuroraBackground>
      </section>

      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-20 relative pb-32">

          <section id="about" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">About Me</h2>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm Ryan Diep, a Computer Science student at Carleton University specializing in 
                <span className="font-bold"> Distributed Systems</span> and <span className="font-bold">Machine Learning Infrastructure</span>. 
                Currently diving deep into <span className="font-bold text-blue-500">Golang</span> and cloud-native technologies.
              </div>
            </motion.div>
          </section>
          
          <section id="experience" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Work Experience</h2>
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

          <section id="opensource" className="mb-20">
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8 flex items-center gap-2">
                Open Source Contributions
              </h2>
              <div className="space-y-8">
                {openSourceWork.map((item, index) => (
                   <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-6 bg-neutral-50 dark:bg-zinc-800/50 border border-neutral-200 dark:border-zinc-700 rounded-2xl shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          {item.title} <span className="text-sm font-normal text-gray-500 bg-gray-200 dark:bg-zinc-700 px-2 py-0.5 rounded-md">{item.repo}</span>
                        </h3>
                        <p className="text-sm text-blue-500 font-mono mb-3 mt-1">
                          {item.tech}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                          {item.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-full hover:scale-105 transition-transform"
                        >
                          <IconBrandGithub size={18} /> View Commits
                        </a>
                      </div>
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
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
                Projects
              </h2>
              <div className="space-y-8">
                {projects.map((proj, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 border dark:border-zinc-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow bg-white dark:bg-zinc-900"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-blue-500 font-mono mb-2">
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
                          className="bg-neutral-100 dark:bg-zinc-800 text-black dark:text-white border border-neutral-200 dark:border-zinc-700 px-4 py-2 rounded-full hover:bg-neutral-200 dark:hover:bg-zinc-700 transition-colors text-sm"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="skills" className="mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Technical Skills</h2>
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

          <section id="contact" className="mb-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8">Get In Touch</h2>
              <div className="p-8 bg-neutral-50 dark:bg-zinc-800/50 border border-neutral-200 dark:border-zinc-700 rounded-3xl">
                 <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                   [cite_start]I am currently seeking <b>New Grad (2026)</b> and <b>Fall 2025</b> opportunities[cite: 9, 10].
                   <br/>Feel free to reach out via any of the platforms below!
                 </p>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {/* Email Card */}
                    <a href="mailto:ryandiep5@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400">
                        <IconMail size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                        <div className="font-semibold text-gray-900 dark:text-white">ryandiep5@gmail.com</div>
                      </div>
                    </a>

                    {/* Phone Card */}
                    <a href="tel:+16138081681" className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow">
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full text-green-600 dark:text-green-400">
                        <IconPhone size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                        <div className="font-semibold text-gray-900 dark:text-white">(613) 808-1681</div>
                      </div>
                    </a>

                    {/* LinkedIn Card */}
                    <a href="https://linkedin.com/in/ryan-diep" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-700 dark:text-blue-400">
                        <IconBrandLinkedin size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                        <div className="font-semibold text-gray-900 dark:text-white">/in/ryan-diep</div>
                      </div>
                    </a>

                    {/* GitHub Card */}
                    <a href="https://github.com/Ryan-Diep" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border dark:border-zinc-700 rounded-xl hover:shadow-md transition-shadow">
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                        <IconBrandGithub size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                        <div className="font-semibold text-gray-900 dark:text-white">/Ryan-Diep</div>
                      </div>
                    </a>
                 </div>
              </div>
            </motion.div>
          </section>

        </div>
      </TracingBeam>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={dockItems} />
      </div>
    </div>
  );
}