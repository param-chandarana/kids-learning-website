const CircularProgressComponent = ({ value }) => {
  // Ensure value is between 0 and 100
  const progressValue = Math.min(Math.max(value, 0), 100);

  // Calculate the stroke-dashoffset
  const radius = 16; // Increase radius for a larger circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progressValue / 100) * circumference;

  return (
    <div className="bg-white inner-shadow border-2 border-black bg-opacity-60 rounded-lg p-8 mx-auto max-w-4xl">
      <h2 className="md:text-3xl sm:text-2xl font-bold mb-8">Progress</h2>
      <div className="relative w-72 h-72 mx-auto">
        {" "}
        {/* Increased width and height */}
        <svg
          className="w-full h-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="3" // Increase stroke width for better visibility
          ></circle>
          {/* Progress Circle */}
          <circle
            cx="18"
            cy="18"
            r={radius}
            fill="none"
            className="stroke-current text-[#e54e4e]"
            strokeWidth="3" // Increase stroke width for better visibility
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          ></circle>
        </svg>
        {/* Percentage Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-3xl font-bold text-[#e54e4e]">
            {" "}
            {/* Increased font size */}
            {progressValue}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressComponent;
