import data from "../../../data/blog.posts.json";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import Products from "./Products";

const SimilarProducts = () => {
  return (
    <div className="mb-24">
      <h1 className="text-primary text-lg border-b-[1px] mb-10 pb-2">
        You may be interested in
      </h1>

      <div className="flex flex-wrap justify-around">
        {data.map((product) => (
          <div key={product.id}>
            <Products product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
