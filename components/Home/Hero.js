import Image from "next/image";
import Link from "next/link";
import hero from "@/public/hero.webp";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden hero-image">
        <Image
          src={hero}
          alt="Event Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>
      <div className="relative z-10 text-left hero-content px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          Your child <br /> is a hero!
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Join us now and access guided learning, interactive games, and
          educational resources.
        </p>

        <Link href="#" aria-label="Sign up">
          <button className="bg-[#e54e4e] text-white transition-all duration-300 ease-in-out px-8 py-4 rounded-lg shadow-md font-semibold text-lg hover:bg-[#d73d3d]">
            Start Learning
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
