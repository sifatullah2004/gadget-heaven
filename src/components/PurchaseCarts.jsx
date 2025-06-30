import { useEffect, useState } from "react";
import { allStoredData, handleRemoveCartData } from "../utils";
import Cart from "./Cart";
import { useContext } from "react";
import { CostsContext } from "../context/CostsContext";
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { HiSortDescending } from "react-icons/hi";

const PurchaseCarts = () => {
  const [products, setProducts] = useState([]);
  const { cost, setCost } = useContext(CostsContext);
  const navigate = useNavigate();

  useEffect(() => {
    const allStored = allStoredData();
    setProducts(allStored);
  }, []);

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const handlePurchase = () => {
    handleRemoveCartData();
    navigate(`/`);
    setCost(0);
  };

  return (
    <div>
      <div className="flex justify-between items-center text-lg lg:text-3xl font-bold">
        <p>Cart</p>
        <div className="flex items-center gap-3 text-2xl lg:text-3xl font-bold">
          <p>Total Cost: $ {cost}</p>
          <button
            onClick={() => handleSortByPrice()}
            className="btn rounded-3xl text-[#9538E2] border border-[#9538E2]"
          >
            Sort by Price
            <span className="mt-2 text-lg"><HiSortDescending /></span>
          </button>
          <button
            disabled={cost === 0 && true}
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn rounded-4xl text-white bg-[#9538E2]"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-5">
        {products.map((product) => (
          <Cart key={product.product_id} product={product}></Cart>
        ))}
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col items-center">
          <BsPatchCheckFill className="text-4xl text-green-500" />
          <h3 className="font-bold text-2xl">Payment Successfully</h3>
          <div className="divider"></div>
          <p className="text-gray-400 font-medium">Thanks for Purchasing.</p>
          <p className="text-gray-400 font-medium">Total: $ {cost}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => handlePurchase()}
                className="btn w-80 md:w-[464px] rounded-3xl"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default PurchaseCarts;
