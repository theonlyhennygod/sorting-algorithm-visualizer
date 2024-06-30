// components/Footer.js
const Footer = () => (
  <footer className="bg-gray-800 p-4 mt-auto">
    <div className="container mx-auto text-center text-white">
      &copy; {new Date().getFullYear()} Sorting Visualizer
    </div>
  </footer>
);

export default Footer;
