import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 relative inline-block after:content-[''] after:block after:h-[3px] after:w-16 after:bg-blue-500 after:mx-auto after:mt-2">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed bg-gray-50 p-6 md:p-10 rounded-xl shadow-sm border border-gray-200">
          <span className="font-semibold text-blue-700">Stair Ecosystem</span>{" "}
          delivers smart solar energy and CCTV security solutions for homes and
          businesses. We're a new-age company with a clear mission - to power
          your space sustainably and protect what matters most, all with expert
          care and quality you can trust.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
