const RecentlyCompletedTable = ({ data }) => {
  return (
    <div className="max-w-4xl bg-white inner-shadow border-2 border-black bg-opacity-60 rounded-lg p-8 mt-16 mx-auto">
      <h2 className="md:text-3xl sm:text-2xl font-bold mb-4">
        Recently Completed
      </h2>
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-black px-4 py-2 text-left">Date</th>
            <th className="border border-black px-4 py-2 text-left">Topic</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="border border-black px-4 py-2">{item.date}</td>
              <td className="border border-black px-4 py-2">{item.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentlyCompletedTable;
