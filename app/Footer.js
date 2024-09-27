import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Navigation Links */}
        <div className="mb-4">
          <Link href="#" className="mx-2 hover:underline transition-colors">Home</Link>
          <Link href="#" className="mx-2 hover:underline transition-colors">Features</Link>
          <Link href="#" className="mx-2 hover:underline transition-colors">Contact</Link>
          <Link href="#" className="mx-2 hover:underline transition-colors">FAQ</Link>
        </div>

        {/* Social Media Links */}
        <div className="mb-4">
          <Link href="#" className="mx-2 hover:text-yellow-300 transition-colors">
            <FaFacebookF className="inline-block w-5 h-5" />
          </Link>
          <Link href="#" className="mx-2 hover:text-yellow-300 transition-colors">
            <FaTwitter className="inline-block w-5 h-5" />
          </Link>
          <Link href="#" className="mx-2 hover:text-yellow-300 transition-colors">
            <FaInstagram className="inline-block w-5 h-5" />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; 2024 Kids Learning. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
