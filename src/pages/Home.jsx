import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import bannerImg from "../assets/banner.jpg";
import PageTitle from "../components/PageTitle";
const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      <PageTitle title={'Home'}></PageTitle>
      <Banner></Banner>

      <div className="max-w-8/12 max-h-full  mx-auto rounded-2xl border-2 border-gray-400 p-6 -mt-44 ">
        <img src={bannerImg} className="rounded-2xl" alt="Banner Image" />
      </div>

      <h1 className="text-2xl lg:text-4xl font-bold text-center mt-16">
        Explore Cutting-Edge Gadgets
      </h1>

      <section className="max-w-11/12 flex gap-3 justify-between mx-auto py-14">
        <div className="menu max-h-[460px] bg-white rounded-xl p-3 lg:p-8">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/category/${category.slug}`}
              className={({ isActive }) =>
                `btn rounded-4xl mb-4 hover:bg-[#9567bc] hover:text-white ${
                  isActive ? `bg-[#9538E2] text-white` : ""
                }`
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>

        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Home;
