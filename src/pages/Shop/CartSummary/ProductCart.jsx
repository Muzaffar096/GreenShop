import Container from "../../../components/Container";
import Product from "./ProductCartItems";
import CartTotal from "./CartTotal";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../../redux/cartProductsSlice";
import TableHead from "./TableHead";
import { useState } from "react";
import SimilarProducts from "./SimilarProducts";

const ProductCart = () => {
  const [checked, setChecked] = useState([true, false]);

  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("productsInCart")) || [];
  const items = useSelector((state) => state.cartProducts);
  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
    const data = JSON.parse(localStorage.getItem("productsInCart")) || [];
    const index = data[data.findIndex((prod) => prod.id == productId)];
    data.splice(index, 1);
    localStorage.setItem("productsInCart", JSON.stringify(data));
  };

  return (
    <Container>
      <div className="mt-16 flex flex-wrap justify-between gap-16 mb-20">
        <div className="text-left  w-[780px]">
          <table className="w-full">
            <TableHead checked={checked} setChecked={setChecked} />
            <tbody className="bg-green-600 mb-3 ">
              {items.map((item) => (
                <Product
                  key={item.id}
                  checked={checked}
                  setChecked={setChecked}
                  product={item}
                  quantity={item.quantity}
                  onDelete={() => handleDelete(item.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white w-[330px]">
          <CartTotal />
        </div>
      </div>
      <SimilarProducts />
    </Container>
  );
};
export default ProductCart;
