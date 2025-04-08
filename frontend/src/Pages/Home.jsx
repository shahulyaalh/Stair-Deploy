import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaSolarPanel, FaBolt, FaUsers } from "react-icons/fa";
import Magnet from "../components/Shared/MagnetButton";
import Lanyard from "../components/Shared/Lanyard";
import { LampDemo } from "../components/ui/lamp";
import Contact from "./Contact";
import { InfiniteMovingCardsDemo } from "../components/Shared/InfiniteMovingCardsDemo";
import Products from "./Products";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <LampDemo />
      {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering a Sustainable Future
          </motion.h1>
          <motion.p
            className="mt-4 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Stair Ecosystem provides high-quality solar energy solutions for
            homes and businesses.
          </motion.p>

          <div className="mt-8">
            <Magnet padding={80} disabled={false} magnetStrength={60}>
              <p className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-4 rounded-xl text-lg font-semibold shadow-lg">
                Explore Products
              </p>
            </Magnet>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-700">About Us</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          At Stair Ecosystem, we are committed to delivering renewable energy
          solutions that are efficient, sustainable, and affordable.
        </p>
      </section>

      {/* Product Showcase */}
      {/* <section id="products" className="py-16 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-blue-700">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
          {[
            { name: "Solar Panels", image: "/solar-panel.jpg" },
            { name: "Inverters", image: "/inverter.jpg" },
            { name: "Batteries", image: "/battery.jpg" },
          ].map((product, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section> */}
      <Products />

      {/* Why Choose Us */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-blue-700">Why Choose Us?</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8">
          {[
            {
              icon: <FaLeaf />,
              title: "Eco-Friendly",
              desc: "Sustainable and renewable energy solutions.",
            },
            {
              icon: <FaSolarPanel />,
              title: "High Efficiency",
              desc: "Maximizing solar power output.",
            },
            {
              icon: <FaBolt />,
              title: "Cost-Effective",
              desc: "Affordable solar solutions for everyone.",
            },
            {
              icon: <FaUsers />,
              title: "Customer Support",
              desc: "24/7 dedicated service.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <div className="text-blue-600 text-4xl">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto mt-8 space-y-6">
          {[
            {
              name: "John Doe",
              review:
                "Fantastic solar solutions! My electricity bills have dropped significantly.",
            },
            {
              name: "Jane Smith",
              review: "High-quality products and great customer support.",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <p className="text-gray-700">"{testimonial.review}"</p>
              <h4 className="text-lg font-semibold text-gray-800 mt-4">
                - {testimonial.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section> */}
      <InfiniteMovingCardsDemo />
      <Contact />

      {/* Contact Section */}

      {/* <section className="py-6 bg-gray-100 text-gray-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-purple-600 bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-purple-600 bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-purple-600 bg-gray-100"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-purple-600 text-gray-50 focus:ring-purple-600 hover:ring-purple-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
