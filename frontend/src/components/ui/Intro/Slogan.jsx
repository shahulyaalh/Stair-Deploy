import React from "react";
import GradientText from "./GradientText";

import RotatingText from "./RotatingText"; // Make sure this path is correct

const Slogan = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <GradientText
        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class"
      >
        CLear Vision With Clean Energy
      </GradientText>
    </div>
  );
};

export default Slogan;
