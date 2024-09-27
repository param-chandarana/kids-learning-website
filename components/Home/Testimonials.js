const Testimonials = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Parents & Teachers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
              <p>
                "This platform has made learning so much fun for my kids. They love the games and we enjoy doing activities together!"
              </p>
              <p className="mt-4 font-bold">– Parent</p>
            </div>
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
              <p>
                "The resources available here are perfect for my classroom. I recommend it to all teachers looking for interactive learning tools."
              </p>
              <p className="mt-4 font-bold">– Teacher</p>
            </div>
            <div className="bg-purple-100 p-8 rounded-lg shadow-lg">
              <p>
                "Amazing! My child has learned so much and actually looks forward to learning every day. Highly recommended."
              </p>
              <p className="mt-4 font-bold">– Parent</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  