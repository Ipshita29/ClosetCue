import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // Use a state variable or conditional logic to apply error classes dynamically
  const isEmailError = false; 

  return (
    <div className="signup-page min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 px-4">
      
      {/* 1. **FIXED WIDTH & PADDING:** Increased max-w-lg and p-12 */}
      <div 
        className="signup-container w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-orange-300
                   transition-all duration-500 hover:shadow-orange-300/40 hover:-translate-y-1"
      >
        <h2 className="text-4xl font-extrabold font-serif text-amber-800 text-center mb-8 tracking-tight">
          Create an Account
        </h2>

        {/* 2. **FIXED VERTICAL SPACING:** Changed space-y-6 to space-y-8 */}
        <form className="space-y-8"> 
          {/* Full Name */}
          <div className="form-field">
            <label className="block text-md font-semibold text-amber-900 mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Johnathan Maple"
              className="w-full p-3.5 text-lg rounded-xl border-2 border-amber-300 bg-amber-50/70 
                         focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 focus:outline-none placeholder-amber-500/70 
                         transition duration-200"
            />
          </div>

          {/* Email (Example with Conditional Error Classes) */}
          <div className={`form-field ${isEmailError ? 'has-error' : ''}`}>
            <label className="block text-md font-semibold text-amber-900 mb-1.5">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full p-3.5 text-lg rounded-xl border-2 bg-amber-50/70 
                          focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 focus:outline-none placeholder-amber-500/70 
                          transition duration-200
                          ${isEmailError 
                            ? 'border-red-600 ring-red-300 bg-red-50/50' 
                            : 'border-amber-300' 
                          }`
                        }
            />
            {isEmailError && (
              <span className="text-sm font-medium text-red-600 mt-1">
                This email is already taken. Try logging in!
              </span>
            )}
          </div>

          {/* Password */}
          <div className="form-field">
            <label className="block text-md font-semibold text-amber-900 mb-1.5">
              Password
            </label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="w-full p-3.5 text-lg rounded-xl border-2 border-amber-300 bg-amber-50/70 
                         focus:ring-4 focus:ring-orange-500/50 focus:border-orange-600 focus:outline-none placeholder-amber-500/70 
                         transition duration-200"
            />
          </div>

          {/* Sign Up Button - Adjusted top margin to look better with new spacing */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-xl py-4 rounded-xl 
                       shadow-xl shadow-orange-500/40 mt-10 
                       hover:from-orange-700 hover:to-amber-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-600/60 
                       transition-all duration-300 relative overflow-hidden"
          >
            Sign Up Now
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-70">🍁</span>
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-amber-800 mt-8 text-base">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-orange-600 border-b-2 border-orange-600/50 hover:border-orange-700 hover:text-orange-700 
                       transition-all duration-300 ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
