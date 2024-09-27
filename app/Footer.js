import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-10 text-black py-8">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-4">
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to home page"
          >
            Home
          </Link>
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to features page"
          >
            Features
          </Link>
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to contact us page"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to FAQ page"
          >
            FAQ
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to Facebook page"
          >
            <FaFacebookF className="inline-block w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to Twitter page"
          >
            <FaTwitter className="inline-block w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="mx-2 hover:text-[#e54e4e] transition-colors"
            aria-label="Go to Instagram page"
          >
            <FaInstagram className="inline-block w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; 2024 Kids Learning. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
