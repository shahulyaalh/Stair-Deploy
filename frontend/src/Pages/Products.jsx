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
      shortDesc: "Light up your home and business with solar energy",
      images: [
        "/images/panel.png",
        "/images/inverter.png",
        "/images/battery.png",
      ],
      bgColor: "bg-cyan-400 text-black",
      navigateTo: "/solar-brands",
    },
    {
      id: "cctv",
      title: "CCTV Camera Products",
      shortDesc: "Elite protection for home and businesss",
      images: [
        "/images/camera.png",
        "/images/camera1.png",
        "/images/camera2.png",
      ],
      bgColor: "bg-[#FDB813] text-black",
      navigateTo: "/cctv-brands",
    },
  ];

  const cctvBrands = [
    { name: "Hikvision", logo: "/images/brands/Hikvision.png" },
    { name: "CP Plus", logo: "/images/brands/Cp plus.png" },
    { name: "ZICOM", logo: "/images/brands/zicom.png" },
    { name: "Godrej", logo: "/images/brands/Godrej.png" },
  ];

  const solarBrands = [
    { name: "TATA Power", logo: "/images/brands/Tata Power.png" },
    { name: "Waaree", logo: "/images/brands/Waaree.png" },
    { name: "Loom Solar", logo: "/images/brands/Loom Solar.png" },
    { name: "Luminous", logo: "/images/brands/Luminous.png" },
    { name: "UTL", logo: "/images/brands/UTL.png" },
  ];

  return (
    <section className="pt-28 px-6 md:px-16 bg-gray-50 min-h-screen pb-20">
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
                onClick={() => navigate(item.navigateTo)}
                className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
              >
                Explore Products
              </button>
            </div>

            {/* Product images */}
            <div className="mt-6 md:mt-0 md:absolute md:bottom-6 md:right-6 flex gap-4">
              {item.images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`${item.title} ${index + 1}`}
                  className="w-24 sm:w-28 md:w-40 h-auto object-contain transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Partners Section */}
      <div className="mt-24 space-y-12">
        {/* CCTV Brands */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our leading brands for CCTV Cameras
          </h3>
          <div className="flex overflow-x-auto gap-12 justify-center items-end px-4 md:px-0">
            {cctvBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center min-w-[100px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-24 h-24 object-contain mb-2"
                />
                <p className="text-center font-medium">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solar Brands */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            Our leading brands for Solar Systems
          </h3>
          <div className="flex overflow-x-auto gap-12 justify-center items-end px-4 md:px-0">
            {solarBrands.map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center min-w-[100px]"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-24 h-24 object-contain mb-2"
                />
                <p className="text-center font-medium">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
