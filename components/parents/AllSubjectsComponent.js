"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import StatsComponent from "./StatsComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

const AllSubjectsComponent = () => {
  const data = {
    labels: ["Math", "Science", "English", "Art & Creativity"],
    datasets: [
      {
        label: "Time Spent (%)",
        data: [36, 27, 18, 18],
        backgroundColor: [
          "rgba(54, 162, 235, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "left", // Adjust for bigger screens
      },
    },
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20, // Add space between chart and legend
      },
    },
  };

  const stats = [
    { icon: "logo.png", label: "Topics Covered", value: 12 },
    { icon: "/logo.png", label: "Quizzes Attempted", value: 12 },
    { icon: "/logo.png", label: "Questions Correct", value: 24 },
  ];

  return (
    <>
      <div className="bg-white inner-shadow border-2 border-black bg-opacity-60 rounded-lg p-6 mt-8 max-w-4xl mx-auto">
        <h2 className="md:text-3xl sm:text-2xl font-bold mb-6">
          Overall Time Spent
        </h2>
        <div className="relative h-48 sm:h-64 mb-8">
          <Doughnut data={data} options={options} />
        </div>
      </div>
      <StatsComponent stats={stats} />
    </>
  );
};

export default AllSubjectsComponent;
