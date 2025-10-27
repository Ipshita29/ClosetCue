import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
