import { Link } from "react-router-dom";
import data from "../../../data/blog.posts.json";
import SubTotal from "../CartSummary/SubTotal";
import Products from "./Products";
import Payment from "./Payment";

const OrderedProducts = () => {
  return (
    <div className="right w-[405px]">
      <p className="mb-5">Your Order</p>
      <div className="flex justify-between border-b-[0.3px] pb-3 mb-3">
        <p>Products</p>
        <p>Subtotal</p>
      </div>
      <div className="wrapper">
        {data.map((item) => (
          <Products key={item.id} item={item} quantity={item.quantity} />
        ))}
      </div>
      <p className="mt-4 mb-5 text-textPrimary text-end">
        Have a coupon code?{" "}
        <Link to="/shop/cart" className="text-primary">
          {" "}
          Click here
        </Link>
      </p>
      <SubTotal />
      <Payment />
    </div>
  );
};

export default OrderedProducts;
