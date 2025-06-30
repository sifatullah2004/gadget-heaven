import { useState } from "react";
import Heading from "../components/Heading";
import PurchaseCarts from "../components/PurchaseCarts";
import Wishlist from "../components/Wishlist";
import PageTitle from "../components/PageTitle";

const DashBoard = () => {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "active",
  });

  const handleActiveBtn = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        status: "active",
      });
    } else {
      setIsActive({
        cart: false,
        status: "active",
      });
    }
  };

  return (
    <div>
      <PageTitle title={'Dashboard'}></PageTitle>
      <section className="bg-[#9538E2] text-white pb-16">
        <Heading
          title={"Dashboard"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>

        <div className="flex justify-center gap-3">
          <button
            className={
              isActive.cart
                ? "btn rounded-3xl w-32"
                : "btn rounded-3xl w-32 bg-transparent text-white"
            }
            onClick={() => handleActiveBtn("cart")}
          >
            Cart
          </button>
          <button
            className={
              isActive.cart
                ? "btn rounded-3xl w-32 bg-transparent text-white"
                : "btn rounded-3xl w-32"
            }
            onClick={() => handleActiveBtn("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </section>

      <section className="max-w-10/12 mx-auto py-7">
        {isActive.cart ? (
          <PurchaseCarts></PurchaseCarts>
        ) : (
          <Wishlist></Wishlist>
        )}
      </section>
    </div>
  );
};

export default DashBoard;
