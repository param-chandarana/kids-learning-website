import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#5BA3D9] bg-opacity-10 text-black text-xl py-8 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <Link href="/faq" className="text-xl hover:text-[#e54e4e]">
            FAQ
          </Link>
          <Link href="/contact" className="text-xl hover:text-[#e54e4e]">
            Contact
          </Link>
          <Link href="/parents" className="text-xl hover:text-[#e54e4e]">
            Parents
          </Link>
        </div>
        <p className="text-xl">
          &copy; 2024 Kids Learning. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
