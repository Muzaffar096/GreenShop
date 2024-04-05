import { useState } from "react";
import Icon from "../../public/images/likeIcon.svg?react";
import { useDispatch, useSelector } from "react-redux";
import {
  addLikedProduct,
  removeLikedProduct,
  addAllLikedProducts,
} from "/src/redux/likedProductsSlice.js";

const LikeIcon = ({ onClick, className, product, state }) => {
  const [liked, setLiked] = useState(state);
  const dispatch = useDispatch();
  function handleLiked(e) {
    e.stopPropagation();
    if (!liked) {
      if (product) {
        dispatch(addLikedProduct(product));
      }
      let data = JSON.parse(localStorage.getItem("likedProducts")) || [];
      data.push(product);
      localStorage.setItem("likedProducts", JSON.stringify(data));
    } else if (liked) {
      dispatch(removeLikedProduct(product.id));
      let data = JSON.parse(localStorage.getItem("likedProducts")) || [];
      let index = data.findIndex((element) => element.id == product.id);
      data.splice(index, 1);
      localStorage.setItem("likedProducts", JSON.stringify(data));
    }
    setLiked(!liked);
  }
  return (
    <div onClick={handleLiked}>
      <Icon
        className={`w-[20px] ${
          liked ? "text-[#46A358] fill-[#46A358]" : "text-black fill-none"
        } ${className ? className : ""}`}
      />
    </div>
  );
};
export default LikeIcon;
