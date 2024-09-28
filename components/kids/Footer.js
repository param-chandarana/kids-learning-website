const Footer = () => {
  return (
    <footer className="bg-[#5BA3D9] bg-opacity-10 text-black text-xl py-8 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/faq" className="text-xl hover:text-[#e54e4e]">
            FAQ
          </a>
          <a href="/contact" className="text-xl hover:text-[#e54e4e]">
            Contact
          </a>
        </div>
        <p className="text-xl">
          &copy; 2024 Kids Learning. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
