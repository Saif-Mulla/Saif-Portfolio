import React from "react";
import ecommerce from "../assests/ecommerce.jpg";
import commodities from "../assests/commodities.jpg";
import aiPowered from "../assests/AI.jpg";
import resumeScreener from "../assests/resume-screener.jpg";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    image: commodities,
    title: "Commodity Application",
    desc: "Contributed to a commodity trading platform managing the full trade lifecycle from deal booking to settlement. Developed a microservices-based architecture using Spring Boot and SOAP web services, while driving automation, migration, and ensuring end-to-end service delivery from development to production deployment at Zensar Technologies.",
    client: "Standard Bank South Africa",
    link: "https://github.com/Saif-Mulla?tab=repositories",
    showButton: true,
  },
  {
    image: ecommerce,
    title: "Ecommerce",
    desc: "Built a Spring Boot e-commerce backend with secure JWT-based authentication using Spring Security. Integrated MySQL via Spring Data JPA and enabled scalable service communication using Spring Eureka and Feign Client.",
    client: "Personal",
    link:"https://github.com/Saif-Mulla/Ecommerce",
    showButton: true,
  },
  {
    image: aiPowered,
    title: "AI-Powered Knowledge Retrieval System",
    desc: "Created an AI-driven Islamic knowledge system using LLMs. Extracted and structured Quran, Hadith, and Tafsir content, fine-tuned Qwen-3B with Mistral-style QA pairs, and integrated via a FastAPI backend for scalable AI-based retrieval.",
    client: "Personal",
    link:"https://github.com/Saif-Mulla/discoverislam",
    showButton: true,
  },
  {
    image: resumeScreener,
    title: "Resume Screener using OCR and NLP",
    desc: "Automated resume screening by extracting text using Tesseract OCR, cleaning it, and identifying key entities. Used TF-IDF and cosine similarity to match resumes with job descriptions and rank candidates effectively.",
    client: "Personal",
    link:"https://github.com/Saif-Mulla/Resume-Screener-using-OCR",
    showButton: true,
  },
];

const ProjectSect = () => {
    return(
    <section className="px-6 py-12 bg-white dark:bg-[#151e29]" id="projects">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-2 border-l-4 border-green-600 pl-4 text-gray-900 dark:text-white">Projects & Contribution</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {projects.map((proj, i) => (
                /* ─────────── Card ─────────── */
                <div
                key={i}
                className="relative group flex items-start gap-4 p-4 border rounded-md shadow-sm bg-[#fafafa] dark:bg-[#102136] 
                            text-gray-500 dark:text-gray-100 transition-all duration-300"
                >
                {/* ── image ── */}
                <div className="shrink-0">
                    <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-32 h-32 object-cover rounded-md"
                    />
                </div>

                {/* ── text ── */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1">{proj.title}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-2">{proj.desc}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                    Client: <span className="font-medium">{proj.client}</span>
                    </p>
                </div>

                {/* ── FULL-CARD overlay & button ── */}
                {proj.showButton && (
                    <div className="absolute inset-0 flex items-center justify-center
                                    bg-black/60 opacity-0 group-hover:opacity-90
                                    transition-opacity duration-300 rounded-md">
                    <a href={proj.link} target="_blank">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-md
                                            flex items-center gap-2 hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-800 ">
                            <FaAngleRight />
                            View Project
                        </button>
                    </a>
                    </div>
                )}
                </div>
            ))}
            </div>

            <div className="text-center mt-5">
            <a
                href="https://github.com/Saif-Mulla?tab=repositories"
                target="_blank"
                className="inline-flex items-center bg-[#54B689] text-white px-5 py-2 rounded-md hover:bg-[#224937] transition"
            >
                <FaArrowRight className="mr-2" />
                View More
            </a>
            </div>
        </div>
    </section>
    );
}

export default ProjectSect;
