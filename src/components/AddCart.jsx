import { useState } from "react";
import CartIcon from "../../public/images/add-to-shopping-cart.svg?react";
import { addToCart, removeFromCart } from "../redux/cartProductsSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCart = ({ product, state, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [added, setAdded] = useState(state);
  function handleAddClick(e) {
    e.stopPropagation();
    let data = JSON.parse(localStorage.getItem("productsInCart")) || [];
    if (!added) {
      dispatch(addToCart(product));
      data.push(product);
    } else if (added) {
      navigate("/shop/cart");
      return;
    }
    localStorage.setItem("productsInCart", JSON.stringify(data));
    setAdded(true);
  }
  return (
    <button onClick={handleAddClick} className="">
      <CartIcon
        className={`w-[20px] ${
          added ? "text-[#46A358] fill-[#46A358]" : " fill-black"
        } ${className ? className : ""}`}
      />
    </button>
  );
};

export default AddCart;
