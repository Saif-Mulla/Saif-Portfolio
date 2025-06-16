import React from 'react';
import { FaJs, FaReact, FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase, FaGit, FaDocker, FaCloud, FaLayerGroup } from 'react-icons/fa';
import { SiSpringboot,SiApachekafka } from 'react-icons/si';
import { GiArtificialIntelligence } from "react-icons/gi";

const techItems = [
  {
    icon: <FaJava className="text-blue-600 text-4xl" />,
    title: 'Java',
    desc: 'Strong foundation in OOPs, multithreading, collections, and advanced concepts like JDBC, servlets, ORM, and backend API development.',
  },
  {
    icon: <div className="flex text-blue-800 text-4xl"><FaPython /></div>,
    title: 'Python',
    desc: 'Used for automation scripts, web scraping, and AI/ML tasks — including data preprocessing, model integration, and task orchestration.',
  },
  {
    icon: <FaDatabase className="text-green-700 text-4xl" />,
    title: 'Database',
    desc: 'Proficient in designing, querying, and optimizing relational databases like MySQL and PostgreSQL for high-performance data operations.',
  },
  {
    icon: <div className="flex text-blue-800 text-4xl"><FaReact /></div>,
    title: 'React Js',
    desc: 'Built responsive single-page applications using React Hooks, React and React DOM APIs, with efficient routing and state management.',
  },
  {
    icon:  <div className="flex gap-2 text-green-600 text-4xl"> <SiSpringboot/> <SiApachekafka/></div>,
    title: 'Spring & Kafka',
    desc: 'Developed scalable microservices using Spring Boot and integrated Kafka for reliable message-driven communication between services.',
  },
  {
    icon: <div className="flex gap-2 text-red-600 text-4xl"><FaGit /><FaDocker /><FaCloud /></div>,
    title: 'Git, Docker & Azure',
    desc: 'Used Git for version control, Docker for containerization, and deployed APIs and scripts on Azure with other cloud services integration.',
  },
{
    icon: <div className="flex gap-2 text-blue-800 text-4xl"><FaLayerGroup /><GiArtificialIntelligence /></div>,
    title: 'Microsoft Copilot tools & AI/ML',
    desc: 'Leveraged Copilot tools for productivity and integrated AI/ML models for intelligent automation and smart assistance.',
  },
  {
    icon: <div className="flex gap-2 text-orange-600 text-4xl"><FaHtml5 /><FaCss3Alt /><FaJs /></div>,
    title: 'HTML, CSS & Js',
    desc: 'Built clean and responsive user interfaces with semantic HTML, modern CSS, and interactive JavaScript logic.',
  }
];

const TechSect = () => {
    return (
        <section className="px-6 py-12 bg-white dark:bg-[#151e29]" id="tech">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 border-l-4 border-green-600 pl-4">Tech Stack</h2>
            <p className="text-gray-500 dark:text-gray-100 mb-10">
            I specialize in building full-stack applications, scalable APIs, and integrating modern tools and AI workflows.
            Want to find out more about my projects and tech stack, Please check below.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {techItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                {item.icon}
                <h3 className="font-bold text-lg text-gray-500 dark:text-gray-100">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}


export default TechSect;
