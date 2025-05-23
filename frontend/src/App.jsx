import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { registerSW } from "virtual:pwa-register";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Loader from "./components/Loader/Loader";
import LogoLoader from "./components/ui/Intro/LogoLoader";
import { SparklesPreview } from "./components/ui/SparklesPreview";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Gallery from "./Pages/Gallery";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import SolarCategories from "./Pages/SolarCategories";
import CctvCategories from "./Pages/CctvCategories";
import SolarSubCategory from "./Pages/SolarSubCategory";
import CctvSubCategory from "./Pages/CctvSubCategory";
import ServicePage from "./Pages/ServicePage";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin-login" replace />;
};

const AppContent = ({ deferredPrompt }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timeout);
  }, [location]);

  const hideFooterRoutes = ["/admin-login", "/admin-dashboard"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return loading ? (
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
  ) : (
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
            <Route path="/service" element={<ServicePage />} />
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

      {!shouldHideFooter && <Footer />}

      {/* PWA Install Button */}
      {/* {deferredPrompt && (
        <button
          onClick={() => deferredPrompt.prompt()}
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700 z-50"
        >
          Install App
        </button>
      )} */}
    </>
  );
};

const App = () => {
  const [showLogoLoader, setShowLogoLoader] = useState(true);
  const [showSlogan, setShowSlogan] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const unregisterSW = registerSW({
      onNeedRefresh() {
        if (confirm("New version available. Refresh now?")) {
          window.location.reload();
        }
      },
    });

    return () => {
      unregisterSW?.();
    };
  }, []);

  useEffect(() => {
    if (!showLogoLoader) {
      setShowSlogan(true);
      const timer = setTimeout(() => setShowSlogan(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showLogoLoader]);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  return (
    <Router basename="/">
      {showLogoLoader ? (
        <LogoLoader onComplete={() => setShowLogoLoader(false)} />
      ) : showSlogan ? (
        <SparklesPreview />
      ) : (
        <AppContent deferredPrompt={deferredPrompt} />
      )}
    </Router>
  );
};

export default App;
