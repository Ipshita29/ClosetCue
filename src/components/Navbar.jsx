import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="navbar-brand">
                ClosetCue
              </Link>
            </div>
            {/* Nav Links */}
          
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className={`navbar-link ${isActive("/") ? "navbar-link-active" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/wardrobe"
                  className={`navbar-link ${isActive("/wardrobe") ? "navbar-link-active" : ""}`}
                >
                  Wardrobe
                </Link>
                
                <Link
                  to="/about"
                  className={`navbar-link ${isActive("/about") ? "navbar-link-active" : ""}`}
                >
                  About
                </Link>
              </div>
   
          </div>
          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className={`navbar-login-btn ${isActive("/login") ? "navbar-login-btn-active" : ""}`}
            >
              Login
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-900 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
