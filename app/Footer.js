import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <Link href="#" className="mr-4 hover:underline">Home</Link>
            <Link href="#" className="mr-4 hover:underline">Features</Link>
            <Link href="#" className="mr-4 hover:underline">Contact</Link>
            <Link href="#" className="mr-4 hover:underline">FAQ</Link>
          </div>
          <div className="mb-4">
            <Link href="#" className="mr-4 hover:underline">Facebook</Link>
            <Link href="#" className="mr-4 hover:underline">Twitter</Link>
            <Link href="#" className="mr-4 hover:underline">Instagram</Link>
          </div>
          <p className="text-sm">&copy; 2024 Kids Learning. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  