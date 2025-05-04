import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const categoryData = {
  panel: [
    {
      name: "Monocrystalline Solar Panels",
      image: "/images/Mono Crystalline Solar Panel.png",
    },
    {
      name: "Polycrystalline Solar Panels",
      image: "/images/Poly Crystalline Solar Panel.png",
    },
    {
      name: "Thin-Film Solar Panels",
      image: "/images/Thin-Film Solar Panel.png",
    },
  ],
  inverter: [
    { name: "String Inverters", image: "/images/String Inverter.png" },
    { name: "Micro Inverters", image: "/images/Micro Inverter.png" },
    { name: "Hybrid Inverters", image: "/images/Hybrid Inverter.png" },
  ],
  battery: [
    { name: "Lithium-Ion Batteries", image: "/images/Lithium-ion Battery.png" },
    { name: "Flow Batteries", image: "/images/Flow Battery.png" },
    {
      name: "Nickel-Cadmium Batteries",
      image: "/images/Nickel Cadmium Battery.png",
    },
  ],
};

const displayNames = {
  panel: "Solar Panels",
  inverter: "Inverters",
  battery: "Batteries",
};

const SolarSubCategory = () => {
  const { categoryId } = useParams();
  const products = categoryData[categoryId] || [];
  const displayName = displayNames[categoryId] || categoryId;

  return (
    <section className="pt-28 pb-20 px-6 md:px-16 bg-white min-h-screen">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center capitalize"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our {displayName}
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-[#fff9c4] rounded-3xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-lg font-medium text-center">{product.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolarSubCategory;
