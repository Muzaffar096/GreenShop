import React, { useState } from "react";
import Container from "../Container";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/images/logo.svg?react";
import HeaderLinks from "./HeaderLinks";
import HeaderButtons from "./HeaderButtons";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import integrateLocalWithRedux from "./integratingProductsWithRedux";

const Header = () => {
  const [modalSearch, setModalSearch] = useState(false);
  const location = useLocation();

  integrateLocalWithRedux();

  function handleclick() {
    setModalSearch(true);
  }

  const path = location.pathname.split("/").slice(1);
  path.unshift("Home");

  function getLink(pageName) {
    switch (pageName) {
      case "home":
        return "/";
      case "shop":
        return "/shop";
      case "cart":
        return "/shop/cart";
      case "plant-care":
        return "/plant-care";
      case "blogs":
        return "/blogs";
      case "checkout":
        return "/shop/checkout";
      default:
        break;
    }
  }
  return (
    <div className="mt-[24px] md:fixed md:left-0 md:bottom-0 md:right-0 md:bg-slate-50 md:z-50 ">
      <Container>
        <div className="flex sm:justify-start md:gap-4 justify-between items-center">
          <div className="cursor-pointer md:ml-4">
            <NavLink to="/">
              <Logo className=" md:hidden" />
              <span className=" hidden md:block">
                <HomeIcon color="disabled" fontSize="large" />
              </span>
            </NavLink>
          </div>
          <HeaderLinks location={location} />
          <HeaderButtons
            handleclick={handleclick}
            setModalSearch={setModalSearch}
          />
        </div>
      </Container>
      <Container>
        <div className="h-[0.3px] w-full bg-green-200 mt-[4px]"></div>
      </Container>
      <div className=" md:hidden">
        {location.pathname == "/" ? (
          ""
        ) : (
          <Container classes="py-4">
            <Breadcrumbs aria-label="breadcrumb">
              {path.map((page, index) => {
                if (index == path.length - 1) {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        textTransform: "capitalize",
                      }}
                      color="text.primary"
                    >
                      {page.split("-").join(" ")}
                    </Typography>
                  );
                } else {
                  return (
                    <Link
                      key={index}
                      to={getLink(page.toLowerCase().trim())}
                      className="capitalize hover:underline"
                    >
                      {page}
                    </Link>
                  );
                }
              })}
            </Breadcrumbs>
          </Container>
        )}
      </div>
    </div>
  );
};

export default Header;
