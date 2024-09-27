import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 fixed z-10 w-full shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Kids Learning</div>
        
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/contact" className="hover:underline hover:text-yellow-300 transition-colors">Contact</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline hover:text-yellow-300 transition-colors">FAQ</Link>
            </li>
          </ul>

          {/* Buttons (placed at the end) */}
          <div className="flex space-x-4 ml-auto">
            {/* Login Button */}
            <Link href="/login">
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
                Login
              </button>
            </Link>

            {/* Signup Button */}
            <Link href="/signup">
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 transition-colors">
                Signup
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
