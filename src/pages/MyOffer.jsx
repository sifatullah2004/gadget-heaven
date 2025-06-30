import axios from "axios";
import { useEffect, useState } from "react";
import Offer from "../components/Offer";
import PageTitle from "../components/PageTitle";
import Heading from "../components/Heading";
import shopImg from "../assets/shope.png";

const MyOffer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get("/offer.json").then((data) => setOffers(data.data));
  }, []);

  return (
    <div>
      <PageTitle title={"My Offer"}></PageTitle>
      <div className="bg-[#9538E2] text-white pb-9">
        <Heading
          title={"Ohh Bonus"}
          subtitle={
            "Awesome offer for everyone to collect favorite product within a very short time. You can choose any product for your wants. Let's click"
          }
        ></Heading>
      </div>

      <div className="py-10 w-11/12 mx-auto">
        <h1 className="text-4xl text-center mb-7 font-bold">
          Select Your Offers
        </h1>
        <div className="lg:flex">
          <img src={shopImg} className="mx-auto" alt="" />
          <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {offers.map((offer) => (
              <Offer key={offer.offer_id} offer={offer}></Offer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOffer;
