import TopicCard from "./Card";

const Grid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-20 py-4 px-20">
      {" "}
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
