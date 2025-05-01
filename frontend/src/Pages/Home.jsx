import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Magnet from "../components/Shared/MagnetButton";
import { LampDemo } from "../components/ui/lamp";
import Contact from "./Contact";
import { InfiniteMovingCardsDemo } from "../components/Shared/InfiniteMovingCardsDemo";
import Products from "./Products";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import AboutSection from "../components/Home/AboutSection";
import Slogan from "../components/ui/Intro/Slogan";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <LampDemo />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero-bg.jpeg" // ✅ Place image in public folder
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Harness the Sun. Secure your World.
          </motion.h1>

          <motion.p
            className="mt-4 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            With Stair Ecosystem, power your space and protect it – all under
            one roof.
          </motion.p>

          <div className="mt-8">
            <Magnet padding={80} disabled={false} magnetStrength={60}>
              <button
                onClick={() => navigate("/products")}
                className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg"
              >
                Explore Products
              </button>
            </Magnet>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div data-aos="fade-up">
        <AboutSection />
      </div>

      {/* Product Showcase */}
      <div data-aos="zoom-in">
        <Products />
      </div>

      {/* Why Choose Us */}
      <div data-aos="fade-up-right">
        <WhyChooseUs />
      </div>

      {/* Testimonials Section */}
      <div data-aos="fade-up" data-aos-offset="100" data-aos-duration="1200">
        <InfiniteMovingCardsDemo />
      </div>

      {/* Contact Section */}
      <div data-aos="fade-up">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
