import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";

const LogoLoader = () => {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMerged(true);
    }, 2000); // Delay sync with animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center overflow-hidden">
      {!merged && (
        <>
          <div className="absolute w-52 h-52 animate-logo-move-rotate">
            <img
              src={logo}
              alt="Company Logo"
              className="absolute inset-0 m-auto w-28 h-28 z-10"
            />
          </div>

          <div className="absolute w-52 h-52 animate-text-move-rotate">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text
                fontSize="5"
                fill="#1f2937"
                fontWeight="bold"
                letterSpacing="2"
                className="uppercase"
              >
                <textPath xlinkHref="#circlePath" startOffset="0%">
                  Stair Ecosystem Pvt. Ltd • Stair Ecosystem Pvt. Ltd •
                </textPath>
              </text>
            </svg>
          </div>
        </>
      )}

      {merged && (
        <div className="relative w-52 h-52 animate-bounce-once">
          <img
            src={logo}
            alt="Company Logo"
            className="absolute inset-0 m-auto w-28 h-28 z-10"
          />
          <svg
            className="w-full h-full absolute inset-0 m-auto"
            viewBox="0 0 100 100"
          >
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text
              fontSize="5"
              fill="#1f2937"
              fontWeight="bold"
              letterSpacing="2"
              className="uppercase"
            >
              <textPath xlinkHref="#circlePath" startOffset="0%">
                Stair Ecosystem Pvt. Ltd • Stair Ecosystem Pvt. Ltd •
              </textPath>
            </text>
          </svg>
        </div>
      )}

      <style>{`
        @keyframes logo-move-rotate {
          0% { transform: translateX(-300%) rotate(0deg); }
          60% { transform: translateX(0) rotate(540deg); }
          100% { transform: translateX(0); }
        }

        @keyframes text-move-rotate {
          0% { transform: translateX(300%) rotate(0deg); }
          60% { transform: translateX(0) rotate(-540deg); }
          100% { transform: translateX(0); }
        }

        @keyframes bounceOnce {
          0% { transform: scale(1); }
          30% { transform: scale(1.1); }
          60% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }

        .animate-logo-move-rotate {
          animation: logo-move-rotate 2s ease-in-out forwards;
        }

        .animate-text-move-rotate {
          animation: text-move-rotate 2s ease-in-out forwards;
        }

        .animate-bounce-once {
          animation: bounceOnce 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LogoLoader;
