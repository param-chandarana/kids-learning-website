import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5BA3D9] bg-opacity-10 text-black text-base sm:text-lg md:text-xl py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mb-4 md:mb-0">
          <Link href="#" className="hover:text-[#e54e4e]">
            FAQ
          </Link>
          <Link href="#" className="hover:text-[#e54e4e]">
            Contact
          </Link>
          <Link href="/parents" className="hover:text-[#e54e4e]">
            Parents&apos; Section
          </Link>
        </div>
        <p className="text-center md:text-left">
          &copy; 2024 Kids Learning. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
