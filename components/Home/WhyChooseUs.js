import Image from 'next/image';
// import whatsnew1 from '@/public/whatsnew1.png';

const WhyChooseUs = () => {
  return (
    <section className="bg-yellow-100 py-16">
      <div className="container mx-auto text-center">
        {/* Image */}
        <Image
          src={whatsnew1} // Replace with your actual image path
          alt="Why Choose Us"
          width={200}
          height={200}
          className="mx-auto mb-6"
        />

        <h2 className="text-4xl font-bold mb-10">Why Choose Our Platform?</h2>
        <p className="max-w-3xl mx-auto text-lg">
          Our platform is designed with both fun and education in mind. With a variety of interactive activities, tailored educational resources, and a safe, engaging environment, we inspire children to learn and grow. Join us today!
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
