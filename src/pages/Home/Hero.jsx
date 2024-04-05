import Container from "../../components/Container";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HeroImg from "../../../public/images/hero-image.png";
import HeroImg2 from "../../../public/images/hero-image2.png";
import Button from "/src/components/Button";

const Hero = () => {
  return (
    <Container classes={`mt-3 mb-10`}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex sm:hidden  items-center  justify-between px-16 bg-primaryGradient select-none">
            <div className="w-[56%] md:w-[63%]">
              <h3 className="uppercase text-[15px] text-left md:text-[12px] sm:text-[10px] text-textPrimary font-medium">
                Welcome to Greenshop
              </h3>
              <h1 className="uppercase font-black text-left md:text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[70px] text-textPrimary">
                Let's make a better <span className="text-primary">planet</span>
              </h1>
              <p className="text-textSecondary text-left md:text-[12px] sm:hidden text-[14px]">
                We are an online plant shop offering a wide range{" "}
                <span className=" md:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <Button classes="uppercase float-left md:hidden  bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                shop now
              </Button>
              <Button classes="uppercase hidden md:block  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                shop now
              </Button>
            </div>
            <div className="w-[43%] md:w-[35%]">
              <img
                className=""
                width={510}
                src={HeroImg}
                alt="bunch of plants"
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex bg-[#D7EBDB] rounded-3xl p-4 items-center justify-between ">
              <div className="w-[65%]">
                <h3 className="uppercasetext-[10px] text-left text-textPrimary font-medium">
                  Welcome to Greenshop
                </h3>
                <h1 className="uppercase text-left font-black text-[20px] text-textPrimary">
                  Let's make a better{" "}
                  <span className="text-primary">planet</span>
                </h1>
                <p className="text-textSecondary text-left text-[10px]">
                  We are an online plant shop offering a wide range
                </p>
                <Button classes="uppercase  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                  shop now
                </Button>
              </div>
              <div className=" w-[33%]">
                <img
                  className=" w-[100px]"
                  width={100}
                  height={100}
                  src={HeroImg2}
                  alt="bunch of plants"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex sm:hidden items-center justify-between px-16 bg-primaryGradient select-none">
            <div className="w-[56%] md:w-[63%]">
              <h3 className="uppercase text-[15px] text-left md:text-[12px] sm:text-[10px] text-textPrimary font-medium">
                Welcome to Greenshop
              </h3>
              <h1 className="uppercase font-black text-left md:text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[70px] text-textPrimary">
                Let's make a better <span className="text-primary">planet</span>
              </h1>
              <p className="text-textSecondary text-left md:text-[12px] sm:hidden text-[14px]">
                We are an online plant shop offering a wide range{" "}
                <span className=" md:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <Button classes="uppercase float-left md:hidden  bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                shop now
              </Button>
              <Button classes="uppercase hidden md:block  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                shop now
              </Button>
            </div>
            <div className="w-[43%] md:w-[35%]">
              <img
                className=""
                width={510}
                src={HeroImg}
                alt="bunch of plants"
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex bg-[#D7EBDB] rounded-3xl p-4 items-center justify-between ">
              <div className="w-[65%]">
                <h3 className="uppercasetext-[10px] text-left text-textPrimary font-medium">
                  Welcome to Greenshop
                </h3>
                <h1 className="uppercase font-black text-left text-[20px] text-textPrimary">
                  Let's make a better{" "}
                  <span className="text-primary">planet</span>
                </h1>
                <p className="text-textSecondary text-left text-[10px]">
                  We are an online plant shop offering a wide range
                </p>
                <Button classes="uppercase  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                  shop now
                </Button>
              </div>
              <div className=" w-[33%]">
                <img
                  className=" w-[100px]"
                  width={100}
                  height={100}
                  src={HeroImg2}
                  alt="bunch of plants"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex sm:hidden items-center justify-between px-16 bg-primaryGradient select-none">
            <div className="w-[56%] md:w-[63%]">
              <h3 className="uppercase text-left text-[15px] md:text-[12px] sm:text-[10px] text-textPrimary font-medium">
                Welcome to Greenshop
              </h3>
              <h1 className="uppercase text-left font-black md:text-[28px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[70px] text-textPrimary">
                Let's make a better <span className="text-primary">planet</span>
              </h1>
              <p className="text-textSecondary text-left md:text-[12px] sm:hidden text-[14px]">
                We are an online plant shop offering a wide range{" "}
                <span className=" md:hidden">
                  of cheap and trendy plants. Use our plants to create an unique
                  Urban Jungle. Order your favorite plants!
                </span>
              </p>
              <Button classes="uppercase float-left md:hidden  bg-primary text-white px-7 py-2 rounded mt-10 hover:bg-primaryDark">
                shop now
              </Button>
              <Button classes="uppercase hidden md:block  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                shop now
              </Button>
            </div>
            <div className="w-[43%] md:w-[35%]">
              <img
                className=""
                width={510}
                src={HeroImg}
                alt="bunch of plants"
              />
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex bg-[#D7EBDB] rounded-3xl p-4 items-center justify-between ">
              <div className="w-[65%]">
                <h3 className="uppercasetext-[10px] text-left text-textPrimary font-medium">
                  Welcome to Greenshop
                </h3>
                <h1 className="uppercase text-left font-black text-[20px] text-textPrimary">
                  Let's make a better{" "}
                  <span className="text-primary">planet</span>
                </h1>
                <p className="text-textSecondary text-left text-[10px]">
                  We are an online plant shop offering a wide range
                </p>
                <Button classes="uppercase  text-primary  p-2 rounded mt-5 hover:bg-primaryDark">
                  shop now
                </Button>
              </div>
              <div className=" w-[33%]">
                <img
                  className=" w-[100px]"
                  width={100}
                  height={100}
                  src={HeroImg2}
                  alt="bunch of plants"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Hero;
