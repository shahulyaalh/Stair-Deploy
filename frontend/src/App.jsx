import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

import Loader from "./components/Loader/Loader"; // 🔁 Loader for each route change
import LogoLoader from "./components/ui/Intro/LogoLoader"; // 🚀 Initial loader

import "./index.css";
import "./App.css";
import ProductDetail from "./Pages/ProductDetail";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin-login" replace />;
};

const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <div className="pt-10">
      {loading && <Loader />}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

const App = () => {
  const [showLogoLoader, setShowLogoLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogoLoader(false);
    }, 2500); // Adjust logo animation duration

    return () => clearTimeout(timer);
  }, []);

  return <Router>{showLogoLoader ? <LogoLoader /> : <AppContent />}</Router>;
};

export default App;
