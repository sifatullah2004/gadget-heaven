import { MdOutlineCancel } from "react-icons/md";

const Cart = ({ product }) => {
  const { product_image, product_title, description, price } = product;

  return (
    <div className="flex justify-between bg-white rounded-xl p-4">
      <div className="flex gap-6">
        <img
          src={product_image}
          className="w-32 max-h-28 bg-gray-200 rounded-lg"
          alt=""
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">{product_title}</h1>
          <p className="text-gray-500 font-normal">{description}</p>
          <p className="text-xl font-semibold">Price: $ {price}</p>
        </div>
      </div>
      <MdOutlineCancel className="text-3xl text-red-400 font-thin"/>
    </div>
  );
};

export default Cart;
