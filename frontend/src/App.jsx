import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { motion } from "framer-motion";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Loader from "./components/Loader/Loader";
import LogoLoader from "./components/ui/Intro/LogoLoader";
import ProductDetail from "./Pages/ProductDetail";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import CctvProductsPage from "./Pages/CctvProductsPage";
import SolarProductsPage from "./Pages/SolarProductsPage";

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
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/solar" element={<SolarProductsPage />} />
          <Route path="/product/cctv" element={<CctvProductsPage />} />
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
      </motion.div>
      <Footer />
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
