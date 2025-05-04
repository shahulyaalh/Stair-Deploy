import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const solarCategories = [
  { id: "panel", name: "Solar Panel", image: "/images/panel.png" },
  { id: "inverter", name: "Inverter", image: "/images/inverter.png" },
  { id: "battery", name: "Batteries", image: "/images/battery.png" },
];

const SolarCategories = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/solar-categories/${id}`);
  };

  return (
    <section className="pt-28 px-6 md:px-16 bg-white min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Solar Products
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {solarCategories.map((cat, index) => (
          <motion.div
  key={cat.id}
  className="bg-[#fff9c4] rounded-3xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.2, duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
  onClick={() => handleClick(cat.id)}
>

            <img
              src={cat.image}
              alt={cat.name}
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolarCategories;
