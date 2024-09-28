import counting from "@/public/math/counting_card.jpg";
import addition from "@/public/math/add_card.jpg";
import subtraction from "@/public/math/sub_card.jpg";
import shapes from "@/public/math/shapes_card.jpg";
import clock from "@/public/math/clock_card.jpg";
import calendar from "@/public/math/calendar_card.jpg";
import Grid from "@/components/kids/Grid";

// Define metadata for the page
export const metadata = {
  title:
    "Math Activities for Kids | Learn Counting, Addition, Subtraction & More",
  description:
    "Fun and interactive math activities for kids! Explore counting, addition, subtraction, shapes, clock reading, and calendar learning.",
  keywords:
    "math for kids, counting, addition, subtraction, shapes, learning clock, calendar for kids, fun math activities",
  author: "Kids Learning",
  openGraph: {
    title: "Math Activities for Kids",
    description:
      "Fun and interactive math activities to help kids learn counting, addition, subtraction, shapes, and more!",
    url: "https://kids-learning-website.vercel.app/kids/math",
    image: "/public/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const items = [
  {
    id: 1,
    title: "Counting",
    image: counting,
    link: "/kids/math/counting",
    description: "Learn to count and recognize numbers in fun ways!",
    borderColor: "#FDBD41",
  },
  {
    id: 2,
    title: "Addition",
    image: addition,
    link: "/kids/math/addition",
    description: "Learn how to put numbers together and make them bigger!",
    borderColor: "#DE757A",
  },
  {
    id: 3,
    title: "Subtraction",
    image: subtraction,
    link: "/kids/math/subtraction",
    description: "Practise taking away numbers to see how much is left!",
    borderColor: "#5BA3D9",
  },
  {
    id: 4,
    title: "Shapes",
    image: shapes,
    link: "/kids/math/shapes",
    description: "Explore shapes like circles, squares, and triangles!",
    borderColor: "#5BA3D9",
  },
  {
    id: 5,
    title: "Clock",
    image: clock,
    link: "/kids/math/clock",
    description: "Learn to read the clock and know what time it is!",
    borderColor: "#A7C393",
  },
  {
    id: 6,
    title: "Calendar",
    image: calendar,
    link: "/kids/math/calendar",
    description: "Discover the days of the week, month, and special holidays!",
    borderColor: "#E98C4A",
  },
];

const Math = () => {
  return (
    <main>
      <h1 className="text-6xl ml-20 pl-6 my-8 font-bold">Math</h1>
      <div>
        <Grid items={items} className="mx-20" />
      </div>
    </main>
  );
};

export default Math;
