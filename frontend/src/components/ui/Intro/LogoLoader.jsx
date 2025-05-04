import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const CinematicLogoLoader = ({ onComplete }) => {
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotating(true);
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 3000); // Delay before ending the loader
      return () => clearTimeout(completeTimer);
    }, 1000); // Delay before starting rotation
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center overflow-hidden">
      <div
        className={`relative ${
          rotating ? "animate-slowClockwiseSpin" : ""
        } w-72 h-72`}
      >
        <img
          src={logo}
          alt="Company Logo"
          className="absolute inset-0 m-auto w-60 h-60 z-10"
        />
      </div>

      <style>{`
        @keyframes slowClockwiseSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-slowClockwiseSpin {
          animation: slowClockwiseSpin 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CinematicLogoLoader;
