import Image from 'next/image';
import interactiveActivities from '@/public/interactiveActivities.png';
import educationalResources from '@/public/educationalResources.png';
import childFriendlyInterface from '@/public/childFriendlyInterface.jpg';
import printables from '@/public/printables.jpg';

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="text-8xl font-bold text-gray-300">01</h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-4">Interactive Activities</h3>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-9 mt-8">
            <Image className="w-full rounded-lg features-image features-image" src={interactiveActivities} alt="Interactive Activities" />
            {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
        </div>
    </div>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="grid grid-cols-2 gap-9 mt-8">
        <Image className="w-full rounded-lg features-image" src={educationalResources} alt="Educational Resources" />
        {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
    </div>
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h3 className="text-8xl font-bold text-gray-300">02</h3>
        <h3 className="text-3xl font-bold text-gray-900 mt-4">Educational Resources</h3>
        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
    </div>
</div>
<div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="text-8xl font-bold text-gray-300">03</h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-4">Printables</h3>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-9 mt-8">
            <Image className="w-full rounded-lg features-image" src={printables} alt="Printables" />
            {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
        </div>
    </div>
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
    <div className="grid grid-cols-2 gap-9 mt-8">
        <Image className="w-full rounded-lg features-image" src={childFriendlyInterface} alt="Child Friendly Interface" />
        {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
    </div>
    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h3 className="text-8xl font-bold text-gray-300">04</h3>
        <h3 className="text-3xl font-bold text-gray-900 mt-4">Child-Friendly Interface</h3>
        <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
        <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
    </div>
</div>
</section>
  );
};

export default Features;
