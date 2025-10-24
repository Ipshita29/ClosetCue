import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="navbar-brand">ClosetCue</h1>
            </div>
            {/* Nav Links */}
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/wardrobe" className="navbar-link">Wardrobe</Link>
                <Link to="/suggestions" className="navbar-link">Suggestions</Link>
                <Link to="/about" className="navbar-link">About</Link>
              </div>
            </div>
          </div>
          {/* Login Button */}
          <div className="hidden md:block">
            <Link to="/login" className="navbar-login-btn">Login</Link>
          </div>
          {/* Mobile Button */}
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-900 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
