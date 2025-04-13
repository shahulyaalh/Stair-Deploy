import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Solar Products",
      shortDesc: "Reach out to Solar Dealer Near Your Home",
      fullDesc:
        "Connect with certified solar vendors in your locality, compare quotes, and schedule installations effortlessly with our Go Local initiative.",
      img: "/images/panel.png",
      bgColor: "bg-cyan-400",
    },
    {
      id: 2,
      title: "CCTV Camera Products",
      shortDesc: "Make your home solar powered",
      fullDesc:
        "Explore high-efficiency solar panels tailored to your home needs, backed by warranty and government subsidies to lower your energy bills.",
      img: "/images/camera.png",
      bgColor: "bg-gray-800 text-white",
    },
    // {
    //   id: 3,
    //   title: "Lithium Battery",
    //   shortDesc: "The future generation battery for New India",
    //   fullDesc:
    //     "Store solar energy for night usage or power outages with our advanced Lithium batteries designed for longer life, better safety, and rapid charging.",
    //   img: "/images/battery.png",
    //   bgColor: "bg-yellow-700 text-white",
    // },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 p-10 lg:p-16">
      {products.map((item) => (
        <div
          key={item.id}
          className={`relative rounded-3xl p-10 min-h-[350px] md:min-h-[400px] w-full md:max-w-2xl flex flex-col md:flex-row justify-between items-start hover:shadow-2xl transition-all duration-300 ${item.bgColor}`}
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
