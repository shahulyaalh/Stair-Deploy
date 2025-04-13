import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://stair-deploy-6.onrender.com/api/send-email",
        formData
      );
      if (res.data.success) {
        alert("Message Sent ✅\nWe'll get back to you shortly!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message ❌");
      }
    } catch (err) {
      console.error("Email Error:", err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0f172a] flex items-center justify-center py-10 px-4">
      <div className="max-w-5xl w-full bg-[#1e293b] text-white shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Info */}
        <div className="bg-[#0f172a] text-white p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-sm mb-8 text-gray-300">
              We'd love to hear from you. Fill out the form and our team will
              get back to you as soon as possible.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                📍 1st Floor, Sundaram Complex, 1st Street, Postal Colony,
                N.K.Road, Thanjavur-6
              </li>
              <li className="flex items-center gap-2">📞 73057 81227</li>
              <li className="flex items-center gap-2">
                📧 stairecosystem@gmail.com
              </li>
            </ul>
          </div>
          <p className="text-xs mt-10 text-gray-400">
            &copy; 2025 Stair Ecosystem Pvt. Ltd
          </p>
        </div>

        {/* Right Section - Form */}
        <form onSubmit={handleSubmit} className="p-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-600 bg-[#0f172a] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-lg font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 transition duration-200"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
