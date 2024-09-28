import React from "react";
import ProgressComponent from "./ProgressComponent";
import StatsComponent from "./StatsComponent";

const stats = [
  { icon: "logo.png", label: "Topics Covered", value: 2 },
  { icon: "/logo.png", label: "Quizzes Attempted", value: 2 },
  { icon: "/logo.png", label: "Questions Correct", value: 9 },
];

const MathComponent = () => {
  return (
    <>
      <ProgressComponent value={50} />
      <StatsComponent stats={stats} />
    </>
  );
};

export default MathComponent;
