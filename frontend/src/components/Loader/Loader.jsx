import React from "react";
import logo from "../../assets/logo.png"; // Make sure this path is correct

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50">
      <img
        src={logo}
        alt="Loading..."
        className="w-24 h-24 animate-bounce" // for bouncing
        // className="w-24 h-24 animate-spin" // use this for rotating
      />
    </div>
  );
};

export default Loader;
