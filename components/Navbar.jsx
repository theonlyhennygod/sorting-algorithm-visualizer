"use client";

import Image from "next/image";
import Link from "next/link";
import { useDarkMode } from "../components/DarkModeContext";
import { useState } from "react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [key, setKey] = useState(0);

  const handleLogoClick = () => {
    setKey(prevKey => prevKey + 1);
  };

  return (
    <nav
      className={`flex justify-between items-center p-8 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      <Link href="/" onClick={handleLogoClick}>
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <button onClick={toggleDarkMode} className="text-3xl">
        {darkMode ? "🌞" : "🌙"}
      </button>
    </nav>
  );
};

export default Navbar;