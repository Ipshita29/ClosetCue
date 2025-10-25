import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login";
import Contact from "./components/Contacts/contacts";
import AboutUs from "./pages/AboutUs/AboutUs"; // Adjust path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wardrobe" element={<div>Wardrobe Page - Add component later</div>} />
        <Route path="/suggestions" element={<div>Suggestions Page - Add component later</div>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
