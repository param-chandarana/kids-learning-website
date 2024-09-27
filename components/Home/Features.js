import Image from "next/image";
import interactiveActivities from "@/public/interactiveActivities.png";
import educationalResources from "@/public/educationalResources.png";
import childFriendlyInterface from "@/public/childFriendlyInterface.jpg";
import printables from "@/public/printables.jpg";

const Features = () => {
  return (
    <section className="bg-white dark:bg-gray-900 mb-6">
      <h2 className="text-5xl font-bold text-center py-10 mt-6">
        Why Choose Our Platform?
      </h2>
      <div className="container mx-auto">
        <div className="gap-16 items-center py-4 px-4 lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
          <div className="flex justify-end pr-20">
            <div className="flex justify-end pr-20">
              <Image
                className="w-full rounded-lg pr-20"
                src={interactiveActivities}
                alt="Interactive Activities"
                width={300}
              />
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 pl-15">
            <h3 className="text-8xl font-bold text-[#e54e4e] text-opacity-80">
              01
            </h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Interactive Activities
            </h3>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. We are strategists, designers and developers.
              Innovators and problem solvers.
            </p>
          </div>
        </div>

        <div className="gap-16 items-center py-4 px-4 lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
          <div className="flex justify-end pr-20">
            <div className="flex justify-end pr-20">
              <Image
                className="w-full rounded-lg pr-20"
                src={educationalResources}
                alt="Educational Resources"
                width={300}
              />
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="text-8xl font-bold text-[#e54e4e] text-opacity-80">
              02
            </h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Educational Resources
            </h3>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. We are strategists, designers and developers.
              Innovators and problem solvers.
            </p>
          </div>
        </div>

        <div className="gap-16 items-center py-4 px-4 lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
          <div className="flex justify-end pr-20">
            <div className="flex justify-end pr-20">
              <Image
                className="w-full rounded-lg pr-20"
                src={printables}
                alt="Printables"
                width={300}
              />
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="text-8xl font-bold text-[#e54e4e] text-opacity-80">
              03
            </h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Printables
            </h3>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. We are strategists, designers and developers.
              Innovators and problem solvers.
            </p>
          </div>
        </div>

        <div className="gap-16 items-center py-4 px-4 lg:grid lg:grid-cols-2 lg:py-10 lg:px-6">
          <div className="flex justify-end pr-20">
            <div className="flex justify-end pr-20">
              <Image
                className="w-full rounded-lg pr-20"
                src={childFriendlyInterface}
                alt="Child Friendly Interface"
                width={300}
              />
            </div>
          </div>
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h3 className="text-8xl font-bold text-[#e54e4e] text-opacity-80">
              04
            </h3>
            <h3 className="text-3xl font-bold text-gray-900 mt-2">
              Child-Friendly Interface
            </h3>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. We are strategists, designers and developers.
              Innovators and problem solvers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
