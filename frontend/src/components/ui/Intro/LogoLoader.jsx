import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const CinematicLogoLoader = ({ onComplete }) => {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMerged(true);
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 700); // Slight delay after merge
      return () => clearTimeout(completeTimer);
    }, 2000); // Total pre-merge time
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center overflow-hidden">
      {!merged && (
        <>
          <div className="absolute w-52 h-52 animate-cinematicZoomIn">
            <img
              src={logo}
              alt="Company Logo"
              className="absolute inset-0 m-auto w-28 h-28 z-10"
            />
          </div>
        </>
      )}

      {merged && (
        <div className="relative w-52 h-52 animate-cinematicGlowAndZoom">
          <img
            src={logo}
            alt="Company Logo"
            className="absolute inset-0 m-auto w-28 h-28 z-10"
          />
        </div>
      )}

      <style>{`
        @keyframes cinematicZoomIn {
          0% { transform: scale(0.3) rotateY(90deg); opacity: 0; }
          50% { transform: scale(1.1) rotateY(45deg); opacity: 0.7; }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }

        @keyframes cinematicGlowAndZoom {
          0% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.3); }
          100% { transform: scale(1); filter: brightness(1); }
        }

        .animate-cinematicZoomIn {
          animation: cinematicZoomIn 2s ease-out forwards;
        }

        .animate-cinematicGlowAndZoom {
          animation: cinematicGlowAndZoom 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CinematicLogoLoader;
