const ProgressComponent = ({ value }) => {
  // Ensure value is between 0 and 100
  const progressValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="bg-white inner-shadow border-2 border-black bg-opacity-60 rounded-lg mt-14 p-6 max-w-4xl mx-auto">
      <h3 className="text-xl font-bold text-center mb-2">{progressValue}%</h3>
      <div className="bg-gray-200 rounded-full h-6 w-full">
        <div
          className="bg-blue-600 h-full rounded-full transition-all duration-300"
          style={{ width: `${progressValue}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressComponent;
