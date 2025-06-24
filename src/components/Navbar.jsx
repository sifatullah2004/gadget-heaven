import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrFavorite } from "react-icons/gr";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Statistics</NavLink>
      </li>
      <li>
        <NavLink>Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
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
        <a className="text-xl">Gadget Heaven</a>
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
  );
};

export default Navbar;
