import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./components/Contacts/contacts"; // Correct path to contacts.jsx
import ThemeSlider from "./components/ThemeSlider/ThemeSlider";

function App() {
  return (
    <Router>
      <ThemeSlider />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;