const StatsComponent = ({ stats }) => {
  return (
    <div className="bg-white inner-shadow border-2 border-black bg-opacity-60 rounded-lg mt-14 p-6 max-w-4xl mx-auto">
      <div className="flex justify-around gap-4 md:gap-8 px-4 sm:px-6 lg:px-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={stat.icon} alt={stat.label} className="h-16 w-16 mb-2" />
            <p className="font-semibold text-xl text-center">{stat.label}</p>
            <p className="text-lg font-bold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsComponent;
