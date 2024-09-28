import apple from "@/public/math/counting/apple_animation.gif";
import car from "@/public/math/counting/car_animation.gif";
import Image from "next/image";
import Link from "next/link";

// Define metadata for the page
export const metadata = {
  title: "Counting - Fun Learning Activities for Kids",
  description:
    "Engage your kids with fun counting activities! Learn to count with apples, cars, and exciting games.",
  keywords:
    "counting for kids, counting activities, fun counting games, counting worksheets, learn to count",
  author: "Kids Learning",
  openGraph: {
    title: "Counting Activities for Kids",
    description:
      "Fun counting activities that help kids learn to count using apples, cars, and more!",
    url: "https://kids-learning-website.vercel.app/kids/math/counting",
    image: "/public/logo.png",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const CountingComponent = () => {
  return (
    <main>
      <h2 className="text-6xl md:text-5xl font-bold mb-4 px-4 sm:px-8 lg:px-20 mx-4 sm:mx-8 mt-10">
        Colouring
      </h2>

      <div className="p-4 sm:p-6 lg:p-8 rounded-lg grid gap-10 sm:gap-12 lg:gap-20 px-4 sm:px-8 lg:px-20 mx-4 sm:mx-8 text-xl sm:text-2xl">
        {/* First Row: Two columns */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* First Card: Counting Description */}
          <div className="md:w-[60%] bg-[#FDBD41] px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 rounded-lg inner-shadow border-2 border-black">
            <p className="my-6 sm:my-8 lg:my-12">
              Colours make everything bright and fun! They help us describe
              things, like a blue sky, a red apple, or a green tree, There are
              many colours, and they can be in groups like primary or seconday
              colours!
            </p>
            <h3 className="font-semibold mb-4 sm:mb-6 lg:mb-8 text-3xl sm:text-4xl">
              How Do We Use Colours?
            </h3>
            <p className="mb-6 sm:mb-8 lg:mb-12">
              You can mix colours to make new ones! For example, red and blue
              make purple. You can use colours to paint, draw, and make
              beautiful pictures!
            </p>
          </div>

          {/* Second Card: Example */}
          <div className="md:w-[40%] bg-[#a2bd95] rounded-lg border px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 inner-shadow border-2 border-black">
            <h3 className="font-bold text-3xl sm:text-4xl mb-4">Example</h3>
            <p className="mb-2">Primary Colours</p>
            <div className="text-xl my-4">
              🔴 - Red
              <br />
              🟡 - Yellow
              <br />
              🔵 - Blue
            </div>
            <p>Secondary Colours</p>
            <div className="text-xl my-4">
              🟠 - Orange
              <br />
              🟢 - Green
              <br />
              🟣 - Purple
            </div>
          </div>
        </div>

        {/* Second Row: Three columns (Equal Height Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Card 1: Play Game */}
          <Link href="#">
            <div className="bg-[#DE757A] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#c7656b] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Play Game!
                </h3>
                <p className="mt-2">
                  Test your knowledge of colours! Click here to play fun games
                  that let you match colours to different objects! ✏️
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Play Games */}
          <Link href="https://www.youtube.com/watch?v=snUGqgAmz-c">
            <div className="bg-[#5BA3D9] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#4c8bba] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Watch Videos!
                </h3>
                <p className="mt-2">
                  Ready to explore the world of colours? Click here to watch
                  videos that teach you more about colours and how to use them!
                  🎥
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3: Take Printouts */}
          <Link
            href="/art/colouring/colouring_worksheet.pdf"
            download="colouring_worksheet.pdf"
          >
            <div className="bg-[#E98C4E] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#cc7a43] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Take Printouts!
                </h3>
                <p className="mt-2">
                  Want to practise mixing colours? Download printable worksheets
                  to colour and discover new colour combinations! 📄
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CountingComponent;
