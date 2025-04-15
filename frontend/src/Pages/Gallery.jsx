import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
// import { LOCAL } from "../../../conf";

const Gallery = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await axios.get(
        `https://stair-deploy-6.onrender.com/api/activities`
      );
      setActivities(res.data);
    };
    fetchActivities();
  }, []);

  return (
    <div className="p-4 mt-24">
      <h2 className="text-2xl font-bold mb-6">Company Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map((activity) => (
          <div key={activity._id} className="border p-4 rounded shadow">
            <CanvasImage imageData={activity.imageData} />
            <h3 className="font-bold mt-2">{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CanvasImage = ({ imageData }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !imageData?.length) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const height = imageData.length;
    const width = imageData[0].length;

    canvas.width = width;
    canvas.height = height;

    const imgData = ctx.createImageData(width, height);
    let index = 0;

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const rgba = imageData[y][x];
        const r = (rgba >> 24) & 0xff;
        const g = (rgba >> 16) & 0xff;
        const b = (rgba >> 8) & 0xff;
        const a = rgba & 0xff;
        imgData.data[index++] = r;
        imgData.data[index++] = g;
        imgData.data[index++] = b;
        imgData.data[index++] = a;
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, [imageData]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-48 object-cover rounded"
      style={{ width: "100%", height: "192px" }}
    />
  );
};

export default Gallery;
