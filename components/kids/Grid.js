import TopicCard from "./Card";

const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 py-8 px-4 sm:px-8 lg:px-16">
      {items.map((item) => (
        <TopicCard
          key={item.id}
          title={item.title}
          image={item.image}
          link={item.link}
          description={item.description}
          borderColor={item.borderColor}
        />
      ))}
    </div>
  );
};

export default Grid;
