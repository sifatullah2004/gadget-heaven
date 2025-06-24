import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";
import Rating from "react-rating";
const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const singleProduct = data.find((product) => product.product_id === id);
    setProduct(singleProduct);
  }, [data, id]);

  const {
    product_title,
    product_image,
    price,
    description,
    rating,
    availability,
    specifications,
  } = product;

  return (
    <div className="pb-20">
      <div className="bg-[#9538E2] text-white pb-52">
        <Heading
          title={"Product Details"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>
      </div>

      <div className="hero bg-base-200 h-full max-w-8/12 mx-auto -mt-48 rounded-3xl py-5">
        <div className="hero-content flex-col lg:flex-row text-lg gap-7">
          <div className="">
            <img src={product_image} className="lg:max-w-sm lg:bg-base-300 rounded-lg lg:shadow-2xl py-20" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-semibold">{product_title}</h1>

            <p className="text-xl font-semibold">Price: ${price}</p>

            <p className="badge badge-outline badge-success text-sm bg-green-50 rounded-3xl">
              {availability}
            </p>

            <p className="text-gray-500">{description}</p>

            <p className="font-bold">Specifications:</p>

            <div className="text-gray-500">
              {specifications?.map((specification, idx) => (
                <ol key={idx}>
                  <li>
                    {idx + 1}. {specification}
                  </li>
                </ol>
              ))}
            </div>

            <p>Rating:</p>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="5 star"
                />
              </div>
              <p className="badge rounded-3xl ml-3">{rating}</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="btn rounded-4xl bg-[#9538E2] text-white">
                Add to Card <MdOutlineShoppingCart />{" "}
              </button>
              <button className="border border-gray-300 p-3 rounded-full">
                <GrFavorite />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
