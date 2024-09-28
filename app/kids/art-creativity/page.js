import colouring from "@/public/art/colouring.jpg";
import crafting from "@/public/art/crafting.jpg";
import painting from "@/public/art/painting.jpg";
import music from "@/public/art/music.jpg";
import storytelling from "@/public/art/storytelling.jpg";
import clayModelling from "@/public/art/clayModelling.jpg";
import Grid from "@/components/kids/Grid";

const items = [
  {
    id: 1,
    title: "Colouring",
    image: colouring,
    link: "/kids/art-creativity/colouring",
    description: "Use bright colours to fill in fun pictures!",
    borderColor: "#A7C393",
  },
  {
    id: 2,
    title: "Crafting",
    image: crafting,
    link: "#",
    description: "Make cool things with paper, glue, and other fun stuff!",
    borderColor: "#DE757A",
  },
  {
    id: 3,
    title: "Painting",
    image: painting,
    link: "#",
    description: "Express your imagination by painting colorful pictures!",
    borderColor: "#5BA3D9",
  },
  {
    id: 4,
    title: "Music",
    image: music,
    link: "#",
    description: "Sing along and make your own music with instruments!",
    borderColor: "#5BA3D9",
  },
  {
    id: 5,
    title: "Storytelling",
    image: storytelling,
    link: "#",
    description: "Create your own stories or listen to magical tales!",
    borderColor: "#FDBD41",
  },
  {
    id: 6,
    title: "Clay Modelling",
    image: clayModelling,
    link: "#",
    description: "Shape animals, toys, and other things using soft clay!",
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
