import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const res = await axios.get(
        "https://stair-deploy-6.onrender.com/api/activities"
      );
      setActivities(res.data);
    };
    fetchActivities();
  }, []);

  return (
    <div className="p-4 mt-24">
      {" "}
      {/* 👈 Added top margin */}
      <h2 className="text-2xl font-bold mb-6">Company Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map((activity) => (
          <div key={activity._id} className="border p-4 rounded shadow">
            <img
              src={`hhttps://stair-deploy-6.onrender.com${activity.imageUrl}`}
              alt={activity.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h3 className="font-bold">{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
