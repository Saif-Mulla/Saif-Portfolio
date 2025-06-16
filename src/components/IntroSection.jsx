import React from "react";
import introPhoto from '../assests/Saif-photo.jpg';
import { FaFolderOpen, FaFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Intro = () => {
  return(
 <section className="w-full bg-[#fafafa] dark:bg-[#151e29] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2 w-full space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Saif Mulla</h1>
          <h2 className="text-xl text-gray-500 dark:text-gray-100">Software engineer, Tech Enthusiast, Life Long Learner.</h2>
          <p className="text-gray-700 dark:text-gray-400">
            I'm a software engineer and AI enthusiast with a passion for building both frontend and backend solutions, from complex scalable web apps to AI-powered smart systems. I thrive on learning, solving real-world problems, and growing as a developer.
            Want to know more about me? Please checkout my <Link to="/" className="text-green-600 hover:underline">portfolio</Link> and 
            <a href="/Saif-Mulla-Resume.pdf" download="Saif-Mulla-Resume.pdf" className="text-green-600 hover:underline"> resume</a>.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <Link to="#intro" className="flex items-center bg-[#54B689] text-white px-5 py-2 rounded-md hover:bg-[#224937] transition">
              <FaFolderOpen className="mr-2" />
              View Portfolio
            </Link>
            <a href="/Saif-Mulla-Resume.pdf" download="Saif-Mulla-Resume.pdf" className="flex items-center bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-800 transition">
              <FaFileAlt className="mr-2" />
              View Resume
            </a>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
          <img src={introPhoto} alt="Profile" className="w-80 h-auto rounded-md shadow-md" />
        </div>

      </div>
    </section>

  )
}

export default Intro;

