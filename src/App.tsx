import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Router>
      <div
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundColor: "#cbcfd4" }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Products />
                <Features />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
