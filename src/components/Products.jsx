import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const Products = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredProductsByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProducts(filteredProductsByCategory);
    } else {
      setProducts(data);
    }

    if (category === "all products") {
      setProducts(data);
    }
  }, [category, data]);

  return (
    <>
      {category === "macBook" && (
        <NotFound massage={"No Data Found"}></NotFound>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>
    </>
  );
};

export default Products;
