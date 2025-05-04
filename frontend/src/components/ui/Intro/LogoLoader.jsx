import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const CinematicLogoLoader = ({ onComplete }) => {
  const [rotating, setRotating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotating(true);
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 4000);
      return () => clearTimeout(completeTimer);
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center overflow-hidden">
      <div className="perspective-3d w-72 h-72 flex items-center justify-center">
        <div className={`${rotating ? "animate-rotate3D" : ""} w-60 h-60`}>
          <img
            src={logo}
            alt="Company Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <style>{`
        .perspective-3d {
          perspective: 1000px;
        }

        @keyframes rotate3D {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }

        .animate-rotate3D {
          transform-style: preserve-3d;
          animation: rotate3D 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CinematicLogoLoader;
