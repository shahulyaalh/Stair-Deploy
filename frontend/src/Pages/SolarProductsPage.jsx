import React, { useState, useEffect } from "react";
import solarProducts from "../data/solarProducts";
import AOS from "aos";
import "aos/dist/aos.css";

const SolarProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const uniqueValues = (key) => [
    ...new Set(solarProducts.map((product) => product[key])),
  ];

  const filteredProducts = solarProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType ? product.type === selectedType : true) &&
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedCompany ? product.company === selectedCompany : true)
    );
  });

  return (
    <div className="p-6 pt-28 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-down">
        Solar Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Types</option>
          {uniqueValues("type").map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {uniqueValues("category").map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Companies</option>
          {uniqueValues("company").map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={() => {
          setSearchTerm("");
          setSelectedType("");
          setSelectedCategory("");
          setSelectedCompany("");
        }}
        className="mb-8 p-2 border rounded bg-red-500 text-white hover:bg-red-600"
      >
        Clear Filters
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              data-aos="fade-up"
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Type:</strong> {product.type}
              </p>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Company:</strong> {product.company}
              </p>
              <p className="text-lg font-bold">₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SolarProductsPage;
