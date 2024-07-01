"use client";

import Image from "next/image";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100 dark:bg-gray-800">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <div className="flex items-center">
        <button onClick={toggleDarkMode} className="text-xl mr-4">
          {darkMode ? "🌞" : "🌙"}
        </button>
        <a
          href="https://github.com/theonlyhennygod/sorting-algorithm-visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl ${darkMode ? "text-white" : "text-black"}`}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/argenisdelarosa"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-xl ${darkMode ? "text-white" : "text-blue-500"} ml-4`}
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
