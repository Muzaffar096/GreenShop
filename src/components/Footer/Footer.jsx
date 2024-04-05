import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

import Container from "../Container";
import Button from "../Button";

import Plant from "../../../public/images/plant.png";
import Cactus from "../../../public/images/cactus.png";
import Teapot from "../../../public/images/teapot.png";
import Location from "../../../public/images/Location.png";
import Message from "../../../public/images/Message.png";
import Calling from "../../../public/images/Calling.png";
import AcceptedPayments from "../../../public/images/acceptedPayments.png";

import Logo from "../../../public/images/logo.svg?react";
import Facebook from "../../../public/images/Facebook.svg?react";
import Instagram from "../../../public/images/Instagram.svg?react";
import Twitter from "../../../public/images/Twitter.svg?react";
import Linkedin from "../../../public/images/Linkedin.svg?react";
import Union from "../../../public/images/Union.svg?react";

const Footer = () => {
  return (
    <Container classes="flex bg-softBackground flex-col">
      <div className="p-7">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 grid-cols-4 gap-7">
          <div className="flex flex-col px-3">
            <div className="h-[120px] flex items-end pb-3">
              <img width={96} src={Plant} alt="plant" />
            </div>
            <h3 className="text-[18px] font-bold">Garden Care</h3>
            <p className="text-[14px] py-1 text-textSecondary">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="flex flex-col px-3 border-x">
            <div className="h-[120px] flex items-end pb-3">
              <img width={96} src={Cactus} alt="plant" />
            </div>
            <h3 className="text-[18px] font-bold">Plant Renovation</h3>
            <p className="text-[14px] py-1 text-textSecondary">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="flex flex-col px-3">
            <div className="h-[120px] flex items-end pb-3">
              <img width={96} src={Teapot} alt="plant" />
            </div>
            <h3 className="text-[18px] font-bold">Watering Garden</h3>
            <p className="text-[14px] py-1 text-textSecondary">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>
          </div>
          <div className="">
            <h3 className="text-[18px] font-bold pt-4 pb-4">
              Would you like to join newsletters?
            </h3>
            <div className="flex">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full p-3 text-[14px] py-1 duration-200 border-gray-300 shadow-input focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:border-r-0 rounded-l-lg"
                placeholder="Enter your email address"
              />
              <Button classes="bg-primary text-white py-3 px-6 rounded-r-lg hover:bg-primaryDark">
                Join
              </Button>
            </div>
            <p className="text-textSecondary text-[14px] pt-4">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
      </div>
      <Divider variant="fullWidth" />
      <div className="pl-7  grid grid-cols-4 py-6 md:grid-cols-1 lg:grid-cols-2 items-center bg-footerBackgroundSecondary">
        <Logo />
        <div className="flex gap-2 items-center">
          <div>
            <img className="w-8" src={Location} alt="location" />
          </div>
          70 West Buckingham Ave. Farmingdale, NY 11735
        </div>
        <div className="flex gap-4">
          <div>
            <img className="w-5" src={Message} alt="Message" />
          </div>
          contact@greenshop.com
        </div>
        <div className="flex gap-4">
          <div>
            <img className="w-5" src={Calling} alt="Call" />
          </div>
          +88 01911 717 490
        </div>
      </div>
      <Divider variant="fullWidth" />
      <div className="grid grid-cols-4  lg:grid-cols-2 px-7">
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-textPrimary font-bold text-[20px]">My Account</h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/my-account">My Account</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/stores">Our stores</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/contact">Contact us</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/career">Career</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/Specials">Specials</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-textPrimary font-bold text-[20px]">
            Help & Guide
          </h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/my-account">Help Center</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/stores">How to Buy</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/contact">Shipping & Delivery</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/career">Product Policy</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/Specials">How to Return</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-textPrimary font-bold text-[20px]">Categories</h3>
          <ul className="list-none">
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/my-account">House Plants</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/stores">Potter plants</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/contact">Seeds</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/career">Small Plants</NavLink>
            </li>
            <li className="text-[14px] py-1 hover:underline">
              <NavLink to="/Specials">Accessories</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 my-8">
          <h3 className="text-textPrimary font-bold text-[20px]">
            Social Media
          </h3>
          <div className="grid grid-cols-5 w-max gap-3">
            <span className="border-2 border-solid rounded border-socialMediaBorder p-[7px] w-8 h-8 flex justify-center items-center">
              <Facebook />
            </span>
            <span className="border-2 border-solid rounded border-socialMediaBorder p-[7px] w-8 h-8 flex justify-center items-center">
              <Instagram />
            </span>
            <span className="border-2 border-solid rounded border-socialMediaBorder p-[7px] w-8 h-8 flex justify-center items-center">
              <Twitter />
            </span>
            <span className="border-2 border-solid rounded border-socialMediaBorder p-[7px] w-8 h-8 flex justify-center items-center">
              <Linkedin />
            </span>
            <span className="border-2 border-solid rounded border-socialMediaBorder p-[7px] w-8 h-8 flex justify-center items-center">
              <Union />
            </span>
          </div>
          <div>
            <h3 className="text-textPrimary font-bold text-[20px] mt-8">
              We accept
            </h3>
            <img src={AcceptedPayments} alt="Payment methods" />
          </div>
        </div>
      </div>
      <Divider variant="fullWidth" />
      <p className="text-textPrimary text-[14px] flex items-center justify-center py-2">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </Container>
  );
};

export default Footer;
