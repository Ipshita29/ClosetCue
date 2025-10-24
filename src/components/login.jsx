import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] px-4">
      <div className="max-w-md w-full bg-[var(--color-bg-alt)] p-8 rounded-2xl shadow-lg border border-[var(--color-border)]">
        <h2 className="text-3xl font-bold text-[var(--color-title)] text-center mb-6">
          Welcome Back
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-light)] mb-1">
              Email / Username
            </label>
            <input
              type="text"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 border rounded-xl border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-light)] mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-xl border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--color-primary)] text-[var(--color-title)] py-2 rounded-xl font-semibold hover:bg-[var(--color-primary-dark)] transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-[var(--color-text-light)]">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[var(--color-primary)] hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
