import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/login";
import Contact from "./components/Contacts/contacts";
import AboutUs from "./pages/AboutUs/AboutUs";
import Signup from "./components/Signup";
import Wardrobe from "./pages/WardRobe/WardRobe";
import ProductPage from "./pages/WardRobe/ProductPage";

function App() {
  return (
    <Router>
      {/* NAVBAR HATA DIYA - Kyunki aapke existing Navbar component mein already navbar hai */}
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wardrobe" element={<Wardrobe />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/suggestions" element={<div className="container mx-auto py-8 px-4">Suggestions Page - Add component later</div>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* 404 Page */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
                <a 
                  href="/" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Go Back Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </Router>
  );
}

export default App;