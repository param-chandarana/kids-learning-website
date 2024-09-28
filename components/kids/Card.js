import Link from "next/link";
import Image from "next/image";

const TopicCard = ({ title, image, link, description, borderColor }) => {
  return (
    <Link
      href={link}
      className={`block group relative overflow-hidden rounded-lg border mx-5 cursor-pointer`}
      style={{ borderColor: `${borderColor}`, borderWidth: "5px" }}
    >
      <div className="relative w-full h-80 bg-white">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 transform group-hover:scale-105 opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-center p-10 translate-y-14">
          <h3 className="text-black text-5xl mb-8">{title}</h3>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default TopicCard;
