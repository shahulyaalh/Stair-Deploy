import { motion } from "framer-motion";
import {
  FaLeaf,
  FaSolarPanel,
  FaGem,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly",
    desc: "Sustainable and renewable energy solutions.",
    color: "text-green-500",
  },
  {
    icon: <FaSolarPanel />,
    title: "High Efficiency",
    desc: "Maximizing solar power output.",
    color: "text-yellow-500",
  },
  {
    icon: <FaGem />,
    title: "Premium Products",
    desc: "High-quality solar panels & security equipment.",
    color: "text-purple-500",
  },
  {
    icon: <FaHandshake />,
    title: "End-to-End Support",
    desc: "From consultation to post-installation care.",
    color: "text-blue-500",
  },
  {
    icon: <FaBalanceScale />,
    title: "Transparent Pricing",
    desc: "Transparent quotes with no hidden costs.",
    color: "text-rose-500",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-100 text-center">
      <h2 className="text-5xl font-extrabold text-blue-700 mb-12">
        Why Choose Us?
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div
              className={`text-5xl mb-4 ${item.color} animate-pulse drop-shadow-lg`}
            >
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
