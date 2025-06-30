import { useEffect, useState } from "react";
import { storedWishlists } from "../utils";
import Cart from "./Cart";

const Wishlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const all = storedWishlists();
    setProducts(all);
  }, []);

  return (
    <div>
      <h1 className="text-lg md:text-3xl font-bold">Wishlist</h1>
      <div className="flex flex-col gap-3 mt-5">
        {products.map((product) => (
          <Cart key={product.product_id} product={product}></Cart>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
