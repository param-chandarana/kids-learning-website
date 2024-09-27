import Image from 'next/image';
import interactiveGames from '@/public/whatsnew1.png';
import educationalResources from '@/public/whatsnew4.png';
import childFriendlyInterface from '@/public/whatsnew2.png';

const Features = () => {
  return (
    <section id="features" className="bg-white mt-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">What's new?</h2>

        {/* Feature 1: Image Left, Content Right */}
        <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center py-8 md:px-8">
          <Image
            src={interactiveGames}
            alt="Interactive Games"
            width={250}
            height={250}
            className="mx-auto mb-4 md:mb-0"
          />
          <div className="text-left md:ml-8 max-w-xs md:w-1/2">
            <h3 className="text-8xl font-bold text-gray-300">01</h3>
            <h3 className="text-3xl font-bold mt-4">Interactive Games</h3>
            <p className="mt-4 text-lg">
              Fun games designed to engage children in learning across various subjects.
            </p>
          </div>
        </div>

        {/* Feature 2: Content Left, Image Right */}
        <div className="w-full min-h-[60vh] flex flex-col md:flex-row-reverse items-center justify-center py-8 md:px-8">
          <Image
            src={educationalResources}
            alt="Educational Resources"
            width={250}
            height={250}
            className="mx-auto mb-4 md:mb-0"
          />
          <div className="text-left md:mr-8 max-w-xs md:w-1/2">
            <h3 className="text-8xl font-bold text-gray-300">02</h3>
            <h3 className="text-3xl font-bold mt-4">Educational Resources</h3>
            <p className="mt-4 text-lg">
              Downloadable worksheets, videos, and activities for both learning and fun.
            </p>
          </div>
        </div>

        {/* Feature 3: Image Left, Content Right */}
        <div className="w-full min-h-[60vh] flex flex-col md:flex-row items-center justify-center py-8 md:px-8">
          <Image
            src={childFriendlyInterface}
            alt="Child-Friendly Interface"
            width={250}
            height={250}
            className="mx-auto mb-4 md:mb-0 md:w-1/3"
          />
          <div className="text-left md:ml-8 max-w-xs">
            <h3 className="text-8xl font-bold text-gray-300">03</h3>
            <h3 className="text-3xl font-bold mt-4">Child-Friendly Interface</h3>
            <p className="mt-4 text-lg">
              Simple, colorful, and easy-to-use design that encourages exploration and learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
