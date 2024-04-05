import React from "react";
import { NavLink } from "react-router-dom";

const HeaderLinks = ({ location }) => {
  return (
    <div className=" md:hidden">
      <ul className="list-none flex gap-8 items-center">
        <li className={`hover:text-green-600 text-green-700`}>
          <NavLink
            className={`pb-[18px] ${
              location.pathname === "/"
                ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                : "border-b-white text-black"
            }`}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-green-600">
          <NavLink
            className={`pb-[18px] ${
              location.pathname == "/shop"
                ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                : "border-b-white text-black"
            }`}
            to="/shop"
          >
            Shop
          </NavLink>
        </li>
        <li className="hover:text-green-600">
          <NavLink
            className={`pb-[18px] ${
              location.pathname == "/plantCare"
                ? "  border-solid border-b-4 border-b-green-600 text-green-700"
                : "border-b-white text-black"
            }`}
            to="/plantCare"
          >
            Plant Care
          </NavLink>
        </li>

        <li className="hover:text-green-600">
          <NavLink
            className={`pb-[18px] ${
              location.pathname == "/blogs"
                ? " border-solid border-b-4 border-b-green-600 text-green-700"
                : "border-b-white text-black"
            }`}
            to="/blogs"
          >
            Blogs
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HeaderLinks;
