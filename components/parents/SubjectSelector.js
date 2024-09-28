"use client";

import { useState } from "react";
import Image from "next/image";
import MathComponent from "./MathComponent";
import ScienceComponent from "./ScienceComponent";
import EnglishComponent from "./EnglishComponent";
import ArtComponent from "./ArtComponent";
import AllSubjectsComponent from "./AllSubjectsComponent";

const subjects = [
  { name: "All", icon: "/parent/all.jpg" },
  { name: "Math", icon: "/parent/math.jpg" },
  { name: "Science", icon: "/parent/science.jpg" },
  { name: "English", icon: "/parent/english.jpg" },
  { name: "Art", icon: "/parent/art.jpg" },
];

const SubjectSelector = () => {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  const renderComponent = () => {
    switch (selectedSubject) {
      case "Math":
        return <MathComponent />;
      case "Science":
        return <ScienceComponent />;
      case "English":
        return <EnglishComponent />;
      case "Art & Creativity":
        return <ArtComponent />;
      default:
        return <AllSubjectsComponent />;
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center sm:justify-start space-x-4 p-4 mb-8">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            onClick={() => setSelectedSubject(subject.name)}
            className="cursor-pointer hover:text-[#e54e4e] text-xl"
          >
            <div
              className={`flex flex-col items-center ${
                selectedSubject === subject.name ? "text-[#e54e4e] text-xl" : ""
              }`}
            >
              <Image
                src={subject.icon}
                alt={subject.name}
                width={64}
                height={64}
                className="rounded-full border-2 p-2"
              />
              <p className="text-xl sm:text-md">{subject.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">{renderComponent()}</div>
    </div>
  );
};

export default SubjectSelector;
