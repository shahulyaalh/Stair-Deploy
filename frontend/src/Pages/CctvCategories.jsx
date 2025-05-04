import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const cctvCategories = [
  { id: "dome", name: "Dome Cameras", image: "/images/Dome Camera.png" },
  { id: "bullet", name: "Bullet Cameras", image: "/images/Bullet Camera.png" },
  { id: "ip", name: "IP Cameras", image: "/images/IP Camera.png" },
  { id: "ptz", name: "PTZ Cameras", image: "/images/PTZ Camera.png" },
  {
    id: "wireless",
    name: "Wireless Cameras",
    image: "/images/Wireless Camera.png",
  },
  {
    id: "solar",
    name: "Solar Power Cameras",
    image: "/images/Solar Power Camera.webp",
  },
];

const CctvCategories = () => {
  const navigate = useNavigate(); // ✅ Hook for navigation

  return (
    <section className="pt-28 pb-20 px-6 md:px-16 bg-white min-h-screen">
      <motion.h2
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our CCTV Camera Products
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cctvCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            onClick={() => navigate(`/cctv/${cat.id}`)} // ✅ Navigate to subcategory
            className="cursor-pointer bg-[#eee7ff] rounded-3xl p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-52 h-52 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold">{cat.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CctvCategories;
