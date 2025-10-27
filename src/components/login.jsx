import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-page min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 px-4">
      
      {/* Enhanced Card Styling */}
      <div 
        className="login-container max-w-md w-full bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-orange-300 
                   transition-all duration-500 hover:shadow-orange-300/40 hover:-translate-y-1"
      >
        <h2 className="text-4xl font-extrabold font-serif text-amber-800 text-center mb-8 tracking-tight">
          Welcome Back🍂
        </h2>

        <form className="space-y-6">
          {/* Email / Username */}
          <div className="form-field">
            <label className="block text-md font-semibold text-amber-900 mb-1.5">
              Email / Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              // Increased padding and text size for better UX
              className="w-full p-3.5 text-lg rounded-xl border-2 border-amber-300 bg-amber-50/70 
                         focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 focus:outline-none placeholder-amber-500/70 
                         transition duration-200"
            />
          </div>

          {/* Password */}
          <div className="form-field">
            <label className="block text-md font-semibold text-amber-900 mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your secret path"
              // Increased padding and text size for better UX
              className="w-full p-3.5 text-lg rounded-xl border-2 border-amber-300 bg-amber-50/70 
                         focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 focus:outline-none placeholder-amber-500/70 
                         transition duration-200"
            />
          </div>

          {/* Login Button - Stronger gradient and interactive shadow */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xl py-4 rounded-xl 
                       shadow-xl shadow-orange-500/40 
                       hover:from-orange-700 hover:to-amber-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-600/60 
                       transition-all duration-300 relative overflow-hidden"
          >
            Login to the Shop
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70">🍂</span>
          </button>
        </form>

        {/* Signup Link - Bolder Text and Hover Effect */}
        <p className="mt-8 text-center text-amber-800 text-base">
          New to ClosetCue?{" "}
          <Link
            to="/signup"
            className="font-bold text-orange-600 border-b-2 border-orange-600/50 hover:border-orange-700 hover:text-orange-700 
                       transition-all duration-300 ml-1"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;