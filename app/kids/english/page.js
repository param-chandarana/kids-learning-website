import alphabet from "@/public/english/alphabet.jpg";
import vowels from "@/public/english/vowels.jpg";
import stories from "@/public/english/stories.jpg";
import spelling from "@/public/english/spelling.jpg";
import reading from "@/public/english/reading.jpg";
import writing from "@/public/english/writing.jpg";
import Grid from "@/components/kids/Grid";

const items = [
  {
    id: 1,
    title: "Alphabet",
    image: alphabet,
    link: "#",
    description: "Practice the ABCs with songs and fun activities!",
    borderColor: "#A7C393",
  },
  {
    id: 2,
    title: "Vowels",
    image: vowels,
    link: "#",
    description: "Explore the special letters A, E, I, )O, U with fun games!",
    borderColor: "#DE757A",
  },
  {
    id: 3,
    title: "Stories",
    image: stories,
    link: "#",
    description: "Listen to fun tales and make up your own!",
    borderColor: "#5BA3D9",
  },
  {
    id: 4,
    title: "Spelling",
    image: spelling,
    link: "#",
    description: "Learn to spell new words with games and puzzles!",
    borderColor: "#5BA3D9",
  },
  {
    id: 5,
    title: "Reading",
    image: reading,
    link: "#",
    description: "Discover books and read along with us!",
    borderColor: "#FDBD41",
  },
  {
    id: 6,
    title: "Writing",
    image: writing,
    link: "#",
    description: "Practise writing letters and words with fun tracing games!",
    borderColor: "#E98C4A",
  },
];

const English = () => {
  return (
    <main>
      <h1 className="text-6xl ml-20 pl-6 my-8 font-bold">English</h1>
      <div>
        <Grid items={items} className="mx-20" />
      </div>
    </main>
  );
};

export default English;
