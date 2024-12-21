"use client";

import Image from "next/image";
import { useDarkMode } from '../components/DarkModeContext';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100 dark:bg-gray-800">
      <Image src="/logo.png" alt="Logo" width={50} height={50} />
      <button onClick={toggleDarkMode} className="text-xl">
        {darkMode ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;