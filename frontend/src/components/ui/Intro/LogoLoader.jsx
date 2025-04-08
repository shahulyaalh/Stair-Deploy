import React from "react";
import logo from "../../../assets/logo.png"; // ✅ Adjust path if needed

const LogoLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex items-center justify-center">
      <div className="relative w-52 h-52 animate-bounce">
        {" "}
        {/* 👈 Bounce both inside */}
        {/* Center Logo */}
        <img
          src={logo}
          alt="Company Logo"
          className="absolute inset-0 m-auto w-28 h-28 z-10"
        />
        {/* Rotating Text Circle */}
        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="
                M 50, 50
                m -35, 0
                a 35,35 0 1,1 70,0
                a 35,35 0 1,1 -70,0"
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
    </div>
  );
};

export default LogoLoader;
