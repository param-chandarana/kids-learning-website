import Image from "next/image";
import math from "/public/math/add_card.jpg";
import science from "/public/science/plants.jpg";
import Link from "next/link";

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
    image: math,
    borderColor: "#DE757A",
  },
  {
    link: "/kids/art-creativity",
    title: "Art & Creativity",
    description: "Unleash your creativity with fun art projects.",
    image: math,
    borderColor: "#E98C4A",
  },
];

const CardGrid = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Subjects
        </h1>
        <p className="text-lg md:text-2xl text-gray-600">
          Learn and grow through engaging activities in different subjects.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {cards.map((card, index) => (
          <Link href={card.link} key={index}>
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group border cursor-pointer"
              style={{
                height: "300px",
                borderColor: `${card.borderColor}`,
                borderWidth: "6px",
                borderStyle: "solid",
              }}
            >
              <div className="relative w-full h-80 bg-white">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform group-hover:scale-105 opacity-40"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-start justify-center p-10 translate-y-14">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  {card.title}
                </h2>
                <p className="text-lg md:text-xl">{card.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
