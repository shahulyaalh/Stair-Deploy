import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CheckCircle } from "lucide-react";

const ServicePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const solarServices = [
    "Solar Products Sales.",
    "System Installation & Regular Maintenance.",
    "Repair Service & Accessories Sales.",
    "Consultations.",
  ];

  const cctvServices = [
    "CCTV Camera Products Sales.",
    "System Installation & Regular Maintenance.",
    "Repair Service & Accessories Sales.",
    "Consultations.",
  ];

  const ListItem = ({ text }) => (
    <li className="flex items-start space-x-2" data-aos="fade-up">
      <CheckCircle className="w-5 h-5 mt-1 text-green-700" />
      <span className="text-base font-medium text-gray-900">{text}</span>
    </li>
  );

  return (
    <div className="w-full px-6 py-16 bg-white text-gray-800 pt-30">
      {/* Page Heading */}
      <h2 className="text-4xl font-bold text-center mb-6" data-aos="fade-down">
        Our Services
      </h2>

      {/* Subheading */}
      <p
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed"
        data-aos="fade-up"
      >
        <span className="font-bold text-blue-700">Stair Ecosystem</span>{" "}
        specializes in Solar System and CCTV Camera Sales and Services for
        Residential and Commercial clients.
      </p>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Solar System Services */}
        <div
          className="bg-cyan-400 p-8 rounded-3xl shadow-lg text-black"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">
            Solar System Services
          </h3>
          {/* Solar Image */}
          <img
            src="/images/solar-service.png" // Replace with your actual image path
            alt="Solar System"
            className="mt-10 z-15 w-full h-48 object-cover rounded-xl mb-5"
            data-aos="zoom-in"
          />

          <p
            className="z-5 mt-10 text-lg  leading-relaxed mb-6"
            data-aos="fade-up"
          >
            Switching to solar energy reduces your electricity bills and
            protects against rising costs. It’s a low-maintenance, long-term
            investment that cuts carbon emissions and supports a greener future.
            Save money while making a positive environmental impact.
          </p>

          {/* NEW PHRASE now comes here */}
          <p className="text-md  mb-4 leading-relaxed" data-aos="fade-up">
            <span className="font-bold text-blue-700">Stair Ecosystem</span>{" "}
            offers solar panel sales, installation, and maintenance for homes
            and businesses.
          </p>

          <h4 className="text-xl font-bold mb-3" data-aos="fade-up">
            Services
          </h4>
          <ul className="space-y-3">
            {solarServices.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </ul>
        </div>

        {/* CCTV Camera Services */}
        <div
          className="bg-[#FDB813] p-8 rounded-3xl shadow-lg text-black"
          data-aos="fade-left"
        >
          <h3 className="text-2xl font-bold mb-4" data-aos="fade-up">
            CCTV Camera Services
          </h3>
          {/* CCTV Image */}
          <img
            src="/images/cctv-service.png" // Replace with your actual image path
            alt="CCTV Camera"
            className="z-2 mt-10 w-full h-48 object-cover rounded-xl mb-5"
            data-aos="zoom-in"
          />

          <p
            className="z-1 mt--25 text-lg leading-relaxed mb-6"
            data-aos="fade-up"
          >
            Installing a CCTV camera system enhances security and peace of mind
            for your home or business. It helps deter crime, monitor activity,
            and provides valuable evidence when needed. A smart, cost-effective
            way to protect what matters most.
          </p>

          {/* NEW PHRASE now comes here */}
          <p className="text-md  mb-4 leading-relaxed" data-aos="fade-up">
            <span className="font-bold text-blue-700">Stair Ecosystem</span>{" "}
            provides CCTV camera sales, setup, and support for residential and
            commercial security.
          </p>

          <h4 className="text-xl font-bold mb-3" data-aos="fade-up">
            Services
          </h4>
          <ul className="space-y-3">
            {cctvServices.map((item, idx) => (
              <ListItem key={idx} text={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
