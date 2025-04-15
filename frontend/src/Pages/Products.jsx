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
      id: "solar",
      title: "Solar Products",
      shortDesc: "Make your home solar powered",
      img: "/images/panel.png",
      bgColor: "bg-cyan-400 text-black",
    },
    {
      id: "cctv",
      title: "CCTV Camera Products",
      shortDesc: "Make your home secured",
      img: "/images/camera.png",
      bgColor: "bg-[#FDB813] text-black",
    },
  ];

  return (
    <section className="pt-28 px-6 md:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Our Product Categories
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {products.map((item) => (
          <div
            data-aos="fade-up"
            key={item.id}
            className={`relative rounded-3xl p-10 min-h-[350px] md:min-h-[400px] w-full flex flex-col md:flex-row justify-between items-start hover:shadow-2xl transition-all duration-300 ${item.bgColor}`}
          >
            {/* Text content */}
            <div className="max-w-md z-10">
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="mb-5 text-lg">{item.shortDesc}</p>
              <button
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
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
    </section>
  );
};

export default Products;
