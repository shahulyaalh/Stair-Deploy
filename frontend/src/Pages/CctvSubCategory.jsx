import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const cctvSubCategoryData = {
  dome: [
    { name: "Dome Camera ", image: "/images/Dome Camera1.png" },
    { name: "IP Dome Camera", image: "/images/IP Dome Camera.png" },
  ],
  bullet: [
    { name: "Bullet Camera", image: "/images/Bullet Camera1.png" },
    { name: "IP Bullet Camera ", image: "/images/IP Bullet Camera.png" },
  ],
  ip: [
    { name: "IP Dome Camera ", image: "/images/IP Dome Camera1.png" },
    { name: "IP Bullet Camera ", image: "/images/IP Bullet Camera1.png" },
  ],
  ptz: [
    { name: "PTZ Camera ", image: "/images/PTZ Camera1.png" },
    { name: "PTZ Camera ", image: "/images/PTZ Camera2.png" },
  ],
  wireless: [
    { name: "Wireless PT Camera ", image: "/images/Wireless PT Camera.png" },
    {
      name: "Wireless Bullet Camera ",
      image: "/images/Wireless Bullet Camera.png",
    },
  ],
  solar: [
    {
      name: "Solar Powered PT Camera ",
      image: "/images/Solar Powered PT Camera.png",
    },
    {
      name: "Solar Power Camera ",
      image: "/images/Solar Power Camera.png",
    },
  ],
};

const cctvDisplayNames = {
  dome: "Dome Cameras",
  bullet: "Bullet Cameras",
  ip: "IP Cameras",
  ptz: "PTZ Cameras",
  wireless: "Wireless Cameras",
  solar: "Solar Power Cameras",
};

const CctvSubCategory = () => {
  const { cctvCategoryId } = useParams();
  const subProducts = cctvSubCategoryData[cctvCategoryId] || [];
  const cctvDisplayName = cctvDisplayNames[cctvCategoryId];
  const isTwoItems = subProducts.length === 2;

  return (
    <section className="pt-28 pb-20 px-6 md:px-16 bg-white min-h-screen">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center capitalize"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our {cctvDisplayName}
      </motion.h2>

      <div
        className={`grid gap-10 justify-center ${
          isTwoItems ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {subProducts.map((product, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-3xl p-8 flex flex-col items-center shadow-md hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-60 h-60 object-contain mb-6"
            />
            <h3 className="text-xl font-semibold text-center">
              {product.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CctvSubCategory;
