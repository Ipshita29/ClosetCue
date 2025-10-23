import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">ClosetCue</h1>
            <p className="text-sm">Your AI outfit assistant © 2025</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="hover:text-gray-300 transition duration-300"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-gray-300 transition duration-300"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="https://github.com/Amanc77/ClosetCue"
              className="hover:text-gray-300 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
