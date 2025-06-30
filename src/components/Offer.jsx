import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Offer = ({ offer }) => {
  const {
    valid_till,
    applicable_products,
    offer_id,
    membership_type,
    offer_title,
    condition,
    discount_percentage,
  } = offer;
  const navigate = useNavigate();

  const handleGetOfferBtn = (offer) => {
    toast.success(`Congrate! You're eligible for ${offer} offer`)
    navigate("/dashboard");
  };

  return (
    <div className="card xl:w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{offer_title}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{membership_type}</h2>
          <span className="text-xl">
            <span className="text-3xl xl:text-4xl font-bold">
              {discount_percentage}
            </span>
            %off
          </span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{condition}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Buy within {valid_till}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>Use Promo Code: {offer_id}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>
              {applicable_products[0]} and {applicable_products[1] || `Other`}
            </span>
          </li>
          <li className="opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-base-content/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="line-through">Seamless cloud integration</span>
          </li>
          <li className="opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-base-content/50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="line-through">Real-time collaboration tools</span>
          </li>
        </ul>
        <div className="mt-6">
          <button
            onClick={() => handleGetOfferBtn(membership_type)}
            className="btn btn-primary btn-block bg-[#9538E2]"
          >
            Get Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
