import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const products = [
    {
      id: 1,
      title: "Solar Products",
      shortDesc: "Make your home solar powered",
      fullDesc:
        "Connect with certified solar vendors in your locality, compare quotes, and schedule installations effortlessly with our Go Local initiative.",
      img: "/images/panel.png",
      bgColor: "bg-cyan-400",
    },
    {
      id: 2,
      title: "CCTV Camera Products",
      shortDesc: "Make your Home Secured",
      fullDesc:
        "Explore high-efficiency solar panels tailored to your home needs, backed by warranty and government subsidies to lower your energy bills.",
      img: "/images/camera.png",
      bgColor: "", // We'll apply inline style for #FDB813
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 p-10 lg:p-16">
      {products.map((item, index) => (
        <div
          data-aos="fade-up"
          key={item.id}
          className={`relative rounded-3xl p-10 min-h-[350px] md:min-h-[400px] w-full md:max-w-2xl flex flex-col md:flex-row justify-between items-start hover:shadow-2xl transition-all duration-300 ${item.bgColor}`}
          style={
            index === 1 ? { backgroundColor: "#FDB813", color: "black" } : {}
          }
        >
          {/* Text content */}
          <div className="max-w-md">
            <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
            <p className="mb-5 text-lg">{item.shortDesc}</p>
            <button
              onClick={() => navigate(`/product/${item.id}`)}
              className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100"
            >
              Explore Products
            </button>
          </div>

          {/* Product image */}
          <div className="mt-6 md:mt-0 md:absolute md:bottom-6 md:right-6">
            <img
              src={item.img}
              alt={item.title}
              className="w-52 h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
