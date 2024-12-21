import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useDarkMode } from '../components/DarkModeContext';

const Footer = () => {
    const { darkMode } = useDarkMode();

    return (
        <footer className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
            <div className="container mx-auto text-center">
                <h2 className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`}>Argenis De La Rosa</h2>
                <div className="flex justify-center mt-4 space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className={`text-2xl ${darkMode ? 'text-white' : 'text-black'}`} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;