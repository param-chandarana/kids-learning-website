import React from "react";
import CircularProgressComponent from "./ProgressComponent";
import StatsComponent from "./StatsComponent";
import RecentlyCompletedTable from "./RecentlyCompletedComponent";

const stats = [
  { icon: "/parent/topics.png", label: "Topics Covered", value: 2 },
  { icon: "/parent/quizzes.png", label: "Quizzes Attempted", value: 2 },
  { icon: "/parent/questions.png", label: "Questions Correct", value: 10 },
];

const completedTopics = [
  { date: "2024-09-27", topic: "Math - Algebra" },
  { date: "2024-09-26", topic: "Science - Biology" },
  { date: "2024-09-25", topic: "English - Literature" },
  { date: "2024-09-24", topic: "Art - Painting" },
];

const ArtComponent = () => {
  return (
    <>
      <div>
        <CircularProgressComponent value={40} />
      </div>
      <div>
        <RecentlyCompletedTable data={completedTopics} />
      </div>
      <StatsComponent stats={stats} />
    </>
  );
};

export default ArtComponent;
