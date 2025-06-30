import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-[#9538E2] w-11/12 mx-auto rounded-b-3xl">
      <div className="hero-content">
        <div className="md:max-w-8/12 text-center pt-20 pb-52 text-white">
          <h1 className="text-2xl md:text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6 md:max-w-10/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn text-[#9538E2] text-xl font-bold rounded-3xl leading-1"><Link to={'/dashboard'}>Shop Now</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
