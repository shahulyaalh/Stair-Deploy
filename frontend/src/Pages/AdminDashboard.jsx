import React, { useState } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleClear = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      setMessage({ type: "error", text: "Please select an image." });
      return;
    }

    setLoading(true);
    setMessage(null);

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];

      try {
        await axios.post(
          `https://stair-deploy-6.onrender.com/api/activities/upload`,
          {
            title,
            description,
            image: base64Image,
          }
        );

        setMessage({
          type: "success",
          text: "Activity uploaded successfully!",
        });
        setTitle("");
        setDescription("");
        handleClear();
      } catch (err) {
        console.error(err);
        setMessage({
          type: "error",
          text: "Failed to upload activity. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    };

    if (image) {
      reader.readAsDataURL(image);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center z-10 pt-[100px] pb-[30px]">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 z-20">
        <header className="border-b pb-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem("adminToken");
                window.location.href = "/admin-login";
              }}
              className="text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </header>

        <main>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Upload Recent Activity
              </h2>
              <p className="text-sm text-gray-500">
                Add a new activity to showcase on the website
              </p>
            </div>
            <div className="px-6 py-4">
              {message && (
                <div
                  className={`${
                    message.type === "error"
                      ? "bg-red-100 border border-red-400 text-red-700"
                      : "bg-green-100 border border-green-400 text-green-700"
                  } px-4 py-3 rounded relative mb-4`}
                >
                  <strong className="font-bold">
                    {message.type === "error" ? "Error: " : "Success: "}
                  </strong>
                  <span className="block sm:inline">{message.text}</span>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1"
                  />
                  {preview && (
                    <div className="mt-2">
                      <img
                        src={preview}
                        alt="Preview"
                        className="h-40 object-cover rounded-md border"
                      />
                      <button
                        type="button"
                        onClick={handleClear}
                        className="cursor-pointer mt-2 text-sm text-red-500 hover:underline"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className={`cursor-pointer w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? "Uploading..." : "Upload Activity"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
