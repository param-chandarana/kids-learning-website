import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12">
          What Parents & Teachers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              {/* Add an icon/avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className="italic text-lg text-gray-700">
              "This platform has made learning so much fun for my kids. They
              love the games and we enjoy doing activities together!"
            </p>
            <p className="mt-6 font-bold text-[#e54e4e]">– Parent</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              {/* Add an icon/avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className="italic text-lg text-gray-700">
              "The resources available here are perfect for my classroom. I
              recommend it to all teachers looking for interactive learning
              tools."
            </p>
            <p className="mt-6 font-bold text-[#e54e4e]">– Teacher</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4">
              {/* Add an icon/avatar */}
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <p className="italic text-lg text-gray-700">
              "Amazing! My child has learned so much and actually looks forward
              to learning every day. Highly recommended."
            </p>
            <p className="mt-6 font-bold text-[#e54e4e]">– Parent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
