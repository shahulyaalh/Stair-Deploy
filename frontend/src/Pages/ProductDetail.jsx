import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const productData = {
  1: {
    title: "Go Local",
    products: 7,
    img: "/images/local.png",
    bannerText: "Find Your Nearest Solar Vendor",
    fullDesc:
      "With our 'Go Local' initiative, you can connect with trusted solar vendors in your area. Compare offers, consult experts, and ensure fast installations right at your doorstep. Supporting local businesses also promotes community growth.",
  },
  2: {
    title: "Solar Panel",
    products: 11,
    img: "/images/panel.png",
    bannerText: "Trusted & Innovative Technology",
    fullDesc: `The solar panel is a collection of solar cells (or photovoltaic), which can be used to generate electricity with the effect of photovoltaic. These cells are arranged in a grid-like pattern on the surface of the solar panels.

Therefore, it can also be described as a set of photovoltaic modules, housed in a supporting structure. A photovoltaic (PV) module is an integrated and connected assembly of solar cells.

Solar panels wear very slowly. Annually, their performance decreases only by about 2 percent (sometimes, or less).

Most solar panels are made using crystal solar cells.`,
  },
  3: {
    title: "Lithium Battery",
    products: 6,
    img: "/images/battery.png",
    bannerText: "Next-Gen Energy Storage",
    fullDesc:
      "Our Lithium Batteries are built for long life, quick charge, and unmatched safety. Store your solar power and enjoy uninterrupted electricity, even during outages. Designed for modern homes and industries alike.",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id];
  const [expanded, setExpanded] = useState(false);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-gray-600">
        Product not found.
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen pt-24 px-4 bg-gradient-to-br from-white to-[#f1f5f9] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10"
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Image */}
        <motion.img
          src={product.img}
          alt={product.title}
          className="w-full lg:w-1/2 object-contain rounded-xl"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        />

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-green-700 font-bold text-2xl md:text-3xl mb-2">
            {product.bannerText}
          </h2>
          <p className="text-gray-600 text-lg mb-4">Solar PV Module</p>

          <h1 className="text-2xl font-semibold mb-1">{product.title}</h1>
          <p className="text-gray-500 mb-5">{product.products} products</p>

          <div className="text-gray-800 whitespace-pre-line leading-7">
            {expanded
              ? product.fullDesc
              : product.fullDesc.slice(0, 300) + "..."}
          </div>

          {!expanded && (
            <button
              onClick={() => setExpanded(true)}
              className="mt-4 text-blue-600 font-medium hover:underline transition"
            >
              Read more
            </button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetail;
