import Container from "../../components/Container";
import Tabs from "../Home/Tab";
import ShopInfo from "./ShopInfo";
import ShopItem from "./ShopItem";
import ShopProduct from "./ShopProduct";

const Shop = () => {
  return (
    <Container>
      <div className="mt-3">
        <ShopItem />
      </div>
      <ShopInfo />
      <ShopProduct />
    </Container>
  );
};
export default Shop;
