import React from "react";

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
                <a href="/" className="navbar-link">Home</a>
                <a href="/wardrobe" className="navbar-link">Wardrobe</a>
                <a href="/suggestions" className="navbar-link">Suggestions</a>
                <a href="/about" className="navbar-link">About</a>
              </div>
            </div>
          </div>
          {/* Login Button */}
          <div className="hidden md:block">
            <a href="/login" className="navbar-login-btn">Login</a>
          </div>
          {/* Mobile Button - Requires utility classes for responsiveness, 
             but we'll keep the structure semantic where possible */}
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