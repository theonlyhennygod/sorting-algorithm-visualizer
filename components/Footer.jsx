import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "../components/DarkModeContext";

const Footer = () => {
  const { darkMode } = useDarkMode();

  return (
    <footer className="py-8 pb-16 bg-white dark:bg-black">
      <div className="container mx-auto text-center">
        <h2 className={`text-4xl ${darkMode ? "text-white" : "text-black"}`}>
          Argenis De La Rosa
        </h2>
        <div className="flex justify-center mt-4 space-x-4">
          <a
            href="mailto:hi@argenisdelarosa.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="text-2xl" style={{ color: darkMode ? "rgb(0, 255, 0)" : "red" }} />
          </a>
          <a
            href="https://github.com/theonlyhennygod"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-2xl"
              style={{ color: darkMode ? "rgb(0, 255, 0)" : "black" }}
            />
          </a>
          <a
            href="https://linkedin.com/in/argenisdelarosa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" style={{ color: darkMode ? "rgb(0, 255, 0)" : "#0077b5" }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;