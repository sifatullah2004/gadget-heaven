const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center py-4">
      <h2 className="text-3xl font-semibold pb-3">{title}</h2>
      <h3 className="text-gray-300 font-medium max-w-6/12 mx-auto">{subtitle}</h3>
    </div>
  );
};

export default Heading;
