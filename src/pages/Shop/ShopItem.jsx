import React from "react";
import { useState } from "react";
import LikeIcon from "../../components/LikeIcon";
import AddtoCart from "../../components/AddToCart";
import PlantImage1 from "../../../public/images/plant1.png";
import PlantImage2 from "../../../public/images/plant2.png";
import PlantImage3 from "../../../public/images/plant3.png";
import PlantImage4 from "../../../public/images/plant4.png";
import PlantImage from "../../../public/images/plant5.png";
import { Button } from "@mui/material";
import Container from "../../components/Container";

const ShopItem = () => {
  const [activeSize, setActiveSize] = useState(0);
  const [counter, setCounter] = useState(1);
  function decrement() {
    if (counter == 1) {
      return;
    }
    setCounter(counter - 1);
  }
  function increment() {
    setCounter(counter + 1);
  }

  return (
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-1 mt-12">
        <div className="flex w-full">
          <div className="">
            <img className="w-[100px]" src={PlantImage1} alt="Image" />
            <img className="w-[100px]" src={PlantImage2} alt="Image" />
            <img className="w-[100px]" src={PlantImage3} alt="Image" />
            <img className="w-[100px]" src={PlantImage4} alt="Image" />
          </div>
          <div className="w-[75%] ml-16">
            <img
              className="text-center w-[405px] bg-[#FBFBFB]"
              src={PlantImage}
              alt="Image"
            />
          </div>
        </div>
        <div className="w-full">
          <h2 className="font-bold mb-[16px] text-[28px]">
            Colorful Blossom Marvel
          </h2>
          <h3 className="text-[21px] text-primary mb-[10px]">$34.99</h3>
          <div className="mb-[16px] w-[100%] h-[0.3px] bg-gray-300"></div>
          <h3 className="font-bold text-[16px] mb-[10px]">
            Short Description:
          </h3>
          <p className="text-gray-600 mb-[22px]">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
          </p>
          <h3>Size:</h3>
          <div className="flex gap-5 pt-3 pb-6">
            <span className="text-primary border-primary font-black rounded-full w-[28px] h-[28px] flex items-center justify-center border-2 border-solid cursor-pointer">
              S
            </span>
            <span className="text-primary border-primary font-black rounded-full w-[28px] h-[28px] flex items-center justify-center border-2 border-solid cursor-pointer">
              M
            </span>
            <span className="text-primary border-primary font-black rounded-full w-[28px] h-[28px] flex items-center justify-center border-2 border-solid cursor-pointer">
              L
            </span>
          </div>
          <div className="flex gap-5 mb-[22px] items-center">
            <button
              className={`text-[27px] flex items-center justify-center text-white px-[11px] bg-primary rounded-full
                ${
                  counter == 1
                    ? "cursor-not-allowed opacity-55"
                    : "cursor-pointer"
                }
             `}
              onClick={decrement}
            >
              -
            </button>
            <h1 className="text-xl w-[8px] flex justify-center items-center">
              {counter}
            </h1>
            <button
              className="text-[27px] flex items-center justify-center text-white px-[11px] bg-primary rounded-full"
              onClick={increment}
            >
              +
            </button>
            <Button
              size="large"
              variant="contained"
              className="px-[32px] py-[10px] border-2 border-solid border-green-700 rounded-md text-green-700 hover:bg-primary hover:text-white"
              sx={{
                textTransform: "capitalize",
                padding: "8px 16px",
                fontSize: "19px",
                fontFamily: "Cera Pro",
              }}
            >
              Buy Now
            </Button>
            <button className=" uppercase px-3 py-3  border-primary border rounded-lg">
              Add to cart
            </button>
            <LikeIcon className="cursor-pointer" />
          </div>
          <h2 className=" text-gray-600 mb-[10px]">
            Category: <span className="text-black">gardening, accessories</span>
          </h2>
          <h2 className=" text-gray-600 ">
            Tags: <span className="text-black">Home, Garden, Plants</span>
          </h2>
        </div>
      </div>
    </Container>
  );
};

export default ShopItem;
