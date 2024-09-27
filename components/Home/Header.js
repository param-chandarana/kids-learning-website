import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-none text-white p-4 fixed z-10 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Kids Learning</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/login" className="hover:underline">Login/Signup</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
