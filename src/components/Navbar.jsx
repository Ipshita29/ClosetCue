import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold">ClosetCue</h1>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Home
                </a>
                <a
                  href="/wardrobe"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Wardrobe
                </a>
                <a
                  href="/suggestions"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  Suggestions
                </a>
                <a
                  href="/about"
                  className="hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <a
              href="/login"
              className="bg-white text-indigo-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition duration-300"
            >
              Login
            </a>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
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
