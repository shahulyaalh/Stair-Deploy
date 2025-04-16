import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cctvProducts from "../data/cctvProductsData";

const CctvProductsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const types = [...new Set(cctvProducts.map((p) => p.type))];
  const categories = [...new Set(cctvProducts.map((p) => p.category))];
  const companies = [...new Set(cctvProducts.map((p) => p.company))];

  const handleClearFilters = () => {
    setSearch("");
    setSelectedType("");
    setSelectedCategory("");
    setSelectedCompany("");
  };

  const filteredProducts = cctvProducts.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (selectedType === "" || product.type === selectedType) &&
      (selectedCategory === "" || product.category === selectedCategory) &&
      (selectedCompany === "" || product.company === selectedCompany)
    );
  });

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center">
        CCTV Camera Products
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 border rounded-xl w-full"
        />
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="p-3 border rounded-xl w-full"
        >
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border rounded-xl w-full"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="p-3 border rounded-xl w-full"
        >
          <option value="">All Companies</option>
          {companies.map((comp) => (
            <option key={comp} value={comp}>
              {comp}
            </option>
          ))}
        </select>
      </div>

      {/* Clear Filters Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={handleClearFilters}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
        >
          Clear Filters
        </button>
      </div>

      {/* Product Cards or No Results Message */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="border rounded-2xl p-5 shadow hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-1">
                <strong>Type:</strong> {product.type}
              </p>
              <p className="text-gray-600 mb-1">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-600 mb-2">
                <strong>Company:</strong> {product.company}
              </p>
              <p className="font-bold text-lg">₹{product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg mt-12">
          No products available with the current filters.
        </div>
      )}
    </div>
  );
};

export default CctvProductsPage;
