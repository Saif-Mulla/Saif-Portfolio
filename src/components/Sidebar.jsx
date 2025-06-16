import React from "react";
import profileImg from '../assests/Saif-Profile.jpg';
import { FaLinkedin, FaGithub, FaTwitter, FaUser, FaLayerGroup, FaFile ,FaCode, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [dark, setDark] = useState(
        () => localStorage.getItem('theme') === 'dark'
    );

    useEffect(() => {
        const root = document.documentElement;
        if (dark) root.classList.add('dark');
        else root.classList.remove('dark');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    return(
        <div className="sidebar">
            <div className="mobileViewSidebar">
                <button aria-controls="logo-sidebar" type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
                </button>
            </div>

            <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen bg-[#54B689] dark:bg-[#102136]
              transform transition-transform duration-300
              ${isOpen ? 'translate-x-0' : '-translate-x-full'}
              sm:translate-x-0`} aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#54B689] dark:bg-[#102136]">
                <div className="flex items-center mb-5">
                    <span className="text-xl font-bold text-white">Saif Mulla</span>
                </div>
                <div className="justify-center mb-5 ">
                    <img src={profileImg} alt="" className="rounded-full w-1/2"/>
                </div>
                <ul className="space-y-2 font-medium">
                    <div className="smallIntro text-white mb-5">
                       <span>Hi, My Name is Saif Mulla and I'm a Senior Software Engineer. Welcome to my personal website!</span>
                    </div>
                    
                    <div className="flex items-center space-x-4 list-none">
                        <a href="https://www.linkedin.com/in/saif-mulla-85960917b/" target="_blank" rel="noopener noreferrer">
                            <div className="p-3 rounded-full text-white hover:bg-[#224937] dark:bg-[#102136] dark:hover:bg-[#54b689] transition-colors duration-300">
                            <FaLinkedin size={24} />
                            </div>
                        </a>
                        <a href="https://github.com/Saif-Mulla" target="_blank" rel="noopener noreferrer">
                            <div className="p-3 rounded-full text-white hover:bg-[#224937] dark:bg-[#102136] dark:hover:bg-[#54b689] transition-colors duration-300">
                            <FaGithub size={24} />
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <div className="p-3 rounded-full text-white hover:bg-[#224937] dark:bg-[#102136] dark:hover:bg-[#54b689] transition-colors duration-300">
                            <FaTwitter size={24} />
                            </div>
                        </a>
                    </div>
                    
                    <div className="pt-5">
                        <li>
                            <a href="#intro" onClick={() => setIsOpen(false)} className="flex items-center mb-2 p-2 text-white rounded-lg hover:text-[#224937] dark:hover:text-[#54b689]">
                            <div className="flex items-center space-x-2">
                                <FaUser size={16} />
                                <span className="text-md font-bold flex-1 ms-3 whitespace-nowrap">About Me</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#tech" onClick={() => setIsOpen(false)} className="flex items-center mb-2 p-2 text-white rounded-lg hover:text-[#224937] dark:hover:text-[#54b689]">
                            <div className="flex items-center space-x-2">
                                <FaCode size={16} />
                                <span className="text-md font-bold flex-1 ms-3 whitespace-nowrap">Tech Stack</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#project" onClick={() => setIsOpen(false)} className="flex items-center mb-2 p-2 text-white rounded-lg hover:text-[#224937] dark:hover:text-[#54b689]">
                            <div className="flex items-center space-x-2">
                                <FaLayerGroup size={16} />
                                <span className="text-md font-bold flex-1 ms-3 whitespace-nowrap">Projects</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="/Saif-Mulla-Resume.pdf" onClick={() => setIsOpen(false)} download="Saif-Mulla-Resume.pdf" className="flex items-center mb-2 p-2 text-white rounded-lg hover:text-[#224937] dark:hover:text-[#54b689]">
                            <div className="flex items-center space-x-2">
                                <FaFile size={16} />
                                <span className="text-md font-bold flex-1 ms-3 whitespace-nowrap">Resume</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="flex items-center p-3 mb-2 text-white rounded-lg hover:text-[#224937] dark:hover:text-[#54b689]">
                            <div className="flex items-center space-x-2">
                                <FaEnvelope size={16} />
                                <span className="text-md font-bold flex-1 ms-3 whitespace-nowrap">Contact</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <div className="flex items-center space-x-2">
                                <button
                                onClick={() => setDark(!dark)}
                                className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-700
                                            text-gray-800 dark:text-gray-200 px-3 py-1 rounded"
                                >
                                {dark ? '☀️' : '🌙'}
                                </button>
                            </div>
                            
                        </li>
                    </div>
                    
                </ul>
            </div>
            </aside>

        </div>
    )

}

export default Sidebar;

