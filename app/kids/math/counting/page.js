import apple from "@/public/math/counting/apple_animation.gif";
import car from "@/public/math/counting/car_animation.gif";
import Image from "next/image";
import Link from "next/link";

const CountingComponent = () => {
  return (
    <main>
      <h2 className="text-6xl md:text-5xl font-bold mb-4 px-4 sm:px-8 lg:px-20 mx-4 sm:mx-8 mt-10">
        Counting
      </h2>

      <div className="p-4 sm:p-6 lg:p-8 rounded-lg grid gap-10 sm:gap-12 lg:gap-20 px-4 sm:px-8 lg:px-20 mx-4 sm:mx-8 text-xl sm:text-2xl">
        {/* First Row: Two columns */}
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16">
          {/* First Card: Counting Description */}
          <div className="md:w-[60%] bg-[#FDBD41] px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 rounded-lg inner-shadow border-2 border-black">
            <p className="my-6 sm:my-8 lg:my-12">
              Counting means finding out how many things are in a group. It’s
              like using numbers to count toys, apples, or anything you see!
            </p>
            <h3 className="font-semibold mb-4 sm:mb-6 lg:mb-8 text-3xl sm:text-4xl">
              How to Count?
            </h3>
            <p className="mb-6 sm:mb-8 lg:mb-12">
              To count, point to each item, say a number for each one, and keep
              going until you’ve counted everything! You can count toys, books,
              or even your fingers and toes!
            </p>
            <p className="mb-4">
              You can count toys, books, or even your fingers and toes!
            </p>
          </div>

          {/* Second Card: Example */}
          <div className="md:w-[40%] bg-[#a2bd95] rounded-lg border px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 inner-shadow border-2 border-black">
            <h3 className="font-bold text-3xl sm:text-4xl mb-4">Example</h3>
            <p className="mb-2">Count apples in the basket</p>
            <Image
              src={apple}
              alt="Apples in a basket"
              className="mb-4"
              unoptimized
              height={180}
            />
            <p>How many cars are there on the road?</p>
            <Image
              src={car}
              alt="Cars on the road"
              className="mb-4"
              unoptimized
              height={180}
            />
          </div>
        </div>

        {/* Second Row: Three columns (Equal Height Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {/* Card 1: Take Quiz */}
          <Link href="/kids/math/counting/quiz">
            <div className="bg-[#DE757A] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#c7656b] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Take Quiz!
                </h3>
                <p className="mt-2">
                  Ready for a fun quiz? Click here to test your counting skills!
                  ✏️
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Play Games */}
          <Link href="/kids/math/counting/games">
            <div className="bg-[#5BA3D9] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#4c8bba] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Play Games!
                </h3>
                <p className="mt-2">
                  Ready to play? Click here for exciting counting games that
                  make learning fun! 🎮
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3: Take Printouts */}
          <Link
            href="/math/counting/counting_worksheet.pdf"
            download="counting_worksheet.pdf"
          >
            <div className="bg-[#E98C4E] text-black rounded-lg px-8 py-6 sm:px-10 sm:py-8 lg:px-16 lg:py-10 hover:bg-[#cc7a43] transition flex flex-col justify-between h-full inner-shadow border-2 border-black">
              <div>
                <h3 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-6">
                  Take Printouts!
                </h3>
                <p className="mt-2">
                  Want to practice at home? Download printable worksheets! 📄
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
