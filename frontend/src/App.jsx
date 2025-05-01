import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { registerSW } from "virtual:pwa-register"; // PWA update handler

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Loader from "./components/Loader/Loader";
import LogoLoader from "./components/ui/Intro/LogoLoader";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import SolarCategories from "./Pages/SolarCategories";
import CctvCategories from "./Pages/CctvCategories";
import SolarSubCategory from "./Pages/SolarSubCategory";
import CctvSubCategory from "./Pages/CctvSubCategory";

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Loader />
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="pt-10"
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solar-brands" element={<SolarCategories />} />
            <Route
              path="/solar-categories/:categoryId"
              element={<SolarSubCategory />}
            />
            <Route path="/cctv-brands" element={<CctvCategories />} />
            <Route path="/cctv/:cctvCategoryId" element={<CctvSubCategory />} />
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
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

const App = () => {
  const [showLogoLoader, setShowLogoLoader] = useState(true);

  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm("New version available. Refresh now?")) {
          updateSW(true);
        }
      },
    });
  }, []);

  return (
    <Router basename="/">
      {showLogoLoader ? (
        <LogoLoader onComplete={() => setShowLogoLoader(false)} />
      ) : (
        <AppContent />
      )}
    </Router>
  );
};

export default App;
