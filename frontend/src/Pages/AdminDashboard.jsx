import React, { useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  const handleImageChange = (e) => {
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

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post(
        "https://stair-deploy-6.onrender.com/api/activities/upload",
        formData
      );
      setMessage("Activity uploaded successfully!");
      setTitle("");
      setDescription("");
      handleClear();
    } catch (err) {
      setMessage("Failed to upload activity.");
    }
  };

  return (
    <div className="pt-24 px-4">
      <h2 className="text-2xl font-semibold mb-4">Upload Recent Activity</h2>
      {message && <p className="text-green-600 font-medium mb-2">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <input
          type="text"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
        />

        <textarea
          placeholder="Description"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded"
          rows={4}
        />

        {/* Custom File Upload UI */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <div className="group">
            {preview ? (
              <div className="size-20">
                <img
                  src={preview}
                  alt="preview"
                  className="w-full object-contain rounded-full"
                />
              </div>
            ) : (
              <label className="flex shrink-0 justify-center items-center size-20 border-2 border-dotted border-gray-300 text-gray-400 cursor-pointer rounded-full hover:bg-gray-50">
                <svg
                  className="shrink-0 size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                </svg>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          <div className="grow">
            <div className="flex items-center gap-x-2">
              <label className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {image && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-semibold rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default AdminDashboard;
