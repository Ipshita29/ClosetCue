import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-2xl font-bold footer-text-accent">ClosetCue</h1>
            <p className="text-sm footer-text-accent" style={{ opacity: 0.8 }}>Your AI outfit assistant © 2025</p>
          </div>
          <div className="flex flex-wrap justify-center space-x-6">
            <a href="/privacy" className="footer-link">Privacy</a>
            <a href="/terms" className="footer-link">Terms</a>
            <a href="/contact" className="footer-link">Contact</a>
          </div>
          <div className="mt-4 md:mt-0">
            <a href="https://github.com/Ipshita29/ClosetCue" className="footer-link">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;