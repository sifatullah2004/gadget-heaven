const Menu = ({ category }) => {
  return (
    <div className="flex flex-col">
      <button className="text-lg font-medium">{category.category}</button>
    </div>
  );
};

export default Menu;
