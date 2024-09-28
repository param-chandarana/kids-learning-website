import React from "react";
import CircularProgressComponent from "./ProgressComponent";
import StatsComponent from "./StatsComponent";
import RecentlyCompletedTable from "./RecentlyCompletedComponent";

const stats = [
  { icon: "/logo.png", label: "Topics Covered", value: 1 },
  { icon: "/logo.png", label: "Quizzes Attempted", value: 1 },
  { icon: "/logo.png", label: "Questions Correct", value: 6 },
];

const completedTopics = [
  { date: "2024-09-27", topic: "Math - Algebra" },
  { date: "2024-09-26", topic: "Science - Biology" },
  { date: "2024-09-25", topic: "English - Literature" },
  { date: "2024-09-24", topic: "Art - Painting" },
];

const ScienceComponent = () => {
  return (
    <>
      <div>
        <CircularProgressComponent value={38} />
      </div>
      <div>
        <RecentlyCompletedTable data={completedTopics} />
      </div>
      <StatsComponent stats={stats} />
    </>
  );
};

export default ScienceComponent;
