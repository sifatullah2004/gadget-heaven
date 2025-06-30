import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#fb4afb] text-white" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#9538E2] text-white" : "")}
          to={"/statistics"}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#9538E2] text-white" : "")}
          to={"/dashBoard"}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#9538E2] text-white" : "")}
          to={"/myOffer"}
        >
          My Offer
        </NavLink>
      </li>
    </>
  );

  return (
    <div className={`${location.pathname === "/" ? `pt-4` : `pt-0`}`}>
      <div
        className={`${
          location.pathname === "/"
            ? `navbar bg-[#9538E2] shadow-sm w-11/12 md:px-32 lg:px-48 text-white rounded-t-3xl mt-5 mx-auto`
            : `navbar bg-base-100 shadow-sm px-16 mx-auto`
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-xl font-bold">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a className="border-base-300 border p-2 rounded-full mr-3">
            <MdOutlineShoppingCart />
          </a>
          <a className="border border-base-300 p-2 rounded-full">
            <GrFavorite />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
