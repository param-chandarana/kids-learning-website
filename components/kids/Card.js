import Link from "next/link";
import Image from "next/image";

const TopicCard = ({ title, image, link, description, borderColor }) => {
  return (
    <Link
      href={link}
      className="block group relative overflow-hidden rounded-lg border cursor-pointer"
      style={{ borderColor: `${borderColor}`, borderWidth: "5px" }}
    >
      <div className="relative w-full h-64 sm:h-80 bg-white">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform group-hover:scale-105 opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-8 translate-y-10 sm:translate-y-12">
          <h3 className="text-black text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
            {title}
          </h3>
          <p className="text-sm sm:text-lg">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
