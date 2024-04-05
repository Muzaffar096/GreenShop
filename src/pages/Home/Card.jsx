import JSON_DATA from "../../data/data.json";
import { useEffect, useState } from "react";
import SearchIcon from "../../../public/images/searchicon.svg?react";
import LikeIcon from "../../components/LikeIcon";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import { useDispatch, useSelector } from "react-redux";
import MyPagination from "../Shop/MyPagination";
import { setPagination } from "../../redux/paginationSlice";
import PlantImage from "../../../public/images/plant1.png";
import { useNavigate } from "react-router-dom";
import AddCart from "/src/components/AddCart";
import { addAllProductsToCart } from "/src/redux/cartProductsSlice.js";

const CardProducts = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { value, filteredProducts } = props;
  const [products, setProducts] = useState(null);
  const page = useSelector((state) => state.paginationSlice);

  const likedProducts = JSON.parse(localStorage.getItem("likedProducts")) || [];
  dispatch(addAllLikedProducts(likedProducts));

  const productsInCart =
    JSON.parse(localStorage.getItem("productsInCart")) || [];
  dispatch(addAllProductsToCart(productsInCart));

  function handleCardClick(product, PlantImage) {
    const PRODUCT = { ...product, image: PlantImage };
    navigate(`/shop/${PRODUCT.id}`, { state: { key: PRODUCT } });
  }

  function returnState(product) {
    if (!(likedProducts.length > 1)) {
      return false;
    }
    try {
      for (let i = 0; i < likedProducts.length; i++) {
        const element = likedProducts[i];
        if (element == null) {
          continue;
        }
        if (product.id === element.id) {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  function isAddedToCart(product) {
    if (!productsInCart.length) {
      return false;
    }

    try {
      for (let i = 0; i < productsInCart.length; i++) {
        const element = productsInCart[i];
        if (!element) {
          continue;
        }
        if (element.id == product.id) {
          return true;
        }
      }
    } catch (error) {
      console.log(error);
    }
    return false;
  }

  const data = filteredProducts ?? JSON_DATA;
  const count = Math.ceil(data.length / 9);
  let PRODUCTS;
  if (value == 1) {
    PRODUCTS = data;
  }

  if (value == 2) {
    PRODUCTS = data.filter((item) => item.price > 20);
  }
  if (value == 3) {
    PRODUCTS = data.filter((item) => item.price < 20);
  }

  const result = products ?? PRODUCTS.slice(0, 9);
  function handlePaginationChange(e, value) {
    let start = (value - 1) * 9;
    let end = value * 9;
    setProducts(data.slice(start, end));
    dispatch(setPagination(value));
  }

  return (
    <>
      <div className="flex flex-wrap justify-between sm:justify-center gap-12 py-10 cursor-pointer">
        {result.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer w-[250px]  transition duration-300 transform hover:shadow-lg hover:scale-105"
            onClick={() => handleCardClick(product, PlantImage)}
          >
            <img
              className="w-[250px] bg-[#FBFBFB] h-[250px] object-cover mb-3 transition duration-300 transform"
              src={product.image}
              alt={product.name}
            />
            <div className="flex justify-center gap-4 items-center">
              <SearchIcon />
              <LikeIcon product={product} state={returnState(product)} />
              <AddCart product={product} state={isAddedToCart(product)} />
            </div>
            <h3 className="text-[#3D3D3D] ml-3">{product.name}</h3>
            <h4 className="font-bold text-primary ml-3  text-[20px]">
              ${product.price}
            </h4>
          </div>
        ))}
      </div>
      <MyPagination
        count={count}
        handlePaginationChange={handlePaginationChange}
        page={page}
      />
    </>
  );
};

export default CardProducts;
