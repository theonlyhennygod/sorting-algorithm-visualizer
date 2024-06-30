"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        <Link href="https://github.com/your-repo" passHref>
          <a className="text-black dark:text-white">GitHub</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
