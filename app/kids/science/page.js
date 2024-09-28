import plants from "@/public/science/plants.jpg";
import animals from "@/public/science/animals.jpg";
import ourBody from "@/public/science/our_body.jpg";
import waterLand from "@/public/science/water_land.jpg";
import weather from "@/public/science/weather.jpg";
import solarSystem from "@/public/science/solar_system.jpg";
import Grid from "@/components/kids/Grid";

// Define metadata for the page
export const metadata = {
  title: "Explore Science - Fun Activities for Kids",
  description:
    "Discover exciting science topics for kids! Learn about plants, animals, weather, the solar system, and more through engaging activities.",
  keywords:
    "science for kids, plants, animals, our body, weather, solar system, fun science activities",
  author: "Kids Learning",
  openGraph: {
    title: "Fun Science Activities for Kids",
    description: "Explore the wonders of science with fun activities for kids!",
    url: "https://kids-learning-website.vercel.app/kids/science",
    image: "/public/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const items = [
  {
    id: 1,
    title: "Plants",
    image: plants,
    link: "#",
    description: "Discover Plants! Explore how they grow and bloom!",
    borderColor: "#A7C393",
  },
  {
    id: 2,
    title: "Animals",
    image: animals,
    link: "#",
    description: "Meet Animals! Learn how they grow and thrive!",
    borderColor: "#DE757A",
  },
  {
    id: 3,
    title: "Our Body",
    image: ourBody,
    link: "#",
    description: "Explore the amazing things your body can do every day!",
    borderColor: "#5BA3D9",
  },
  {
    id: 4,
    title: "Water & Land",
    image: waterLand,
    link: "#",
    description:
      "Discover the different places we live—land, water, and everything in between!",
    borderColor: "#5BA3D9",
  },
  {
    id: 5,
    title: "Weather",
    image: weather,
    link: "#",
    description:
      "Find out why it rains, when it snows, and how the sun shines!",
    borderColor: "#FDBD41",
  },
  {
    id: 6,
    title: "Solar System",
    image: solarSystem,
    link: "#",
    description: "Travel to the stars and planets in the sky!",
    borderColor: "#E98C4A",
  },
];

const Science = () => {
  return (
    <main>
      <h1 className="text-6xl ml-20 pl-6 my-8 font-bold">Science</h1>
      <div>
        <Grid items={items} className="mx-20" />
      </div>
    </main>
  );
};

export default Science;
