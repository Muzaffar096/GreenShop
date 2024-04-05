import Container from "../../../components/Container";
import FormInputs from "./FormInputs";
import OrderedProducts from "./OrederedProducts";

const ProductCheckout = () => {
  return (
    <Container>
      <div className="flex mb-52 gap-16">
        <FormInputs />
        <OrderedProducts />
      </div>
    </Container>
  );
};
export default ProductCheckout;
