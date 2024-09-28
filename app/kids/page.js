import Image from "next/image";
import math from "/public/math/counting_card.jpg";
import science from "/public/science/plants.jpg";
import english from "/public/english/english.jpg";
import art from "/public/art/art.jpg";
import Link from "next/link";

// Define metadata for the page
export const metadata = {
  title: "Explore Subjects - Fun Learning Activities for Kids",
  description:
    "Discover a variety of subjects for kids! Engage with fun activities in Math, Science, English, and Art.",
  keywords:
    "subjects for kids, math activities, science experiments, english lessons, art projects, fun learning",
  author: "Kids Learning",
  openGraph: {
    title: "Explore Learning Subjects for Kids",
    description:
      "Engaging activities across various subjects to help kids learn and grow!",
    url: "https://kids-learning-website.vercel.app/kids/subjects",
    image: "/public/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const cards = [
  {
    link: "/kids/math",
    title: "Math",
    description: "Sharpen your math skills with fun exercises.",
    image: math,
    borderColor: "#FDBD41",
  },
  {
    link: "/kids/science",
    title: "Science",
    description:
      "Explore the world of science with experiments and activities.",
    image: science,
    borderColor: "#A7C393",
  },
  {
    link: "/kids/english",
    title: "English",
    description: "Improve your language skills through interactive lessons.",
    image: english,
    borderColor: "#DE757A",
  },
  {
    link: "/kids/art-creativity",
    title: "Art & Creativity",
    description: "Unleash your creativity with fun art projects.",
    image: art,
    borderColor: "#E98C4A",
  },
];

const CardGrid = () => {
  return (
    <div className="container mx-auto py-12 px-4 min-h-[80vh]">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Explore Subjects
        </h1>
        <p className="text-base md:text-xl text-gray-600">
          Learn and grow through engaging activities in different subjects.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 gap-x-6 py-4">
        {cards.map((card, index) => (
          <Link href={card.link} key={index}>
            <div
              className="relative rounded-xl overflow-hidden group border cursor-pointer mx-auto"
              style={{
                height: "300px",
                width: "100%",
                maxWidth: "400px",
                borderColor: `${card.borderColor}`,
                borderWidth: "6px",
                borderStyle: "solid",
              }}
            >
              <div className="relative w-full h-full bg-white">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform group-hover:scale-105 opacity-40"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-8 translate-y-10 sm:translate-y-12 md:translate-y-14">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-sm md:text-base">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
