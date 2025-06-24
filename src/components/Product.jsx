import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { product_title, product_image, price, product_id } = product;

  return (
    <div className="card bg-base-100 p-4 shadow-sm">
      <figure className="bg-gray-100 rounded-lg">
        <img src={product_image} className="h-44" alt="Shoes" />
      </figure>
      <div className="card-body p-0 pt-3">
        <h2 className="card-title text-2xl">{product_title}</h2>
        <p className="text-xl text-gray-500 font-medium">Price: {price} $</p>
        <div className="card-actions">
          <button className="btn rounded-3xl bg-transparent text-[#9538E2] border border-[#9538E2]">
            <Link to={`/product/${product_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
