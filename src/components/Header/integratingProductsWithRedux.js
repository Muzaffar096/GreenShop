import { useDispatch } from "react-redux";
import { addAllLikedProducts } from "../../redux/likedProductsSlice";
import { addAllProductsToCart } from "../../redux/cartProductsSlice";

export default function integrateLocalWithRedux() {
   const dispatch = useDispatch();
   let likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
   dispatch(addAllLikedProducts(likedProducts));

   let productsInCart =
      JSON.parse(localStorage.getItem("productsInCart")) || [];
   dispatch(addAllProductsToCart(productsInCart));
}
