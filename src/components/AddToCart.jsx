import { useState } from "react";
import CartIcon from "../../public/images/add-to-shopping-cart.svg?react";
import { addToCart, removeFromCart } from "../redux/cartProductsSlice";
import CheckCircle from "../../public/images/check-circle.svg?react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const AddToCart = ({ product, state, className }) => {
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
    <Button
      onClick={handleAddClick}
      className={`w-max h-max px-3 py-2 rounded-lg border-2 border-primary flex items-center bg-primary text-white ${
        added ? "gap-2 bg-transparent" : "fill-white"
      }`}
      variant={added ? "outlined" : "contained"}
      sx={{
        textTransform: "capitalize",
        padding: "8px 12px",
        fontSize: "21px",
        fontFamily: "Cera Pro",
      }}
    >
      <span className={`${added ? "text-primary" : ""}`}>
        {added ? "Added" : "Add to cart"}
      </span>
      {added ? <CheckCircle className={`w-[28px] h-[28px]`} /> : ""}
    </Button>
  );
};

export default AddToCart;
