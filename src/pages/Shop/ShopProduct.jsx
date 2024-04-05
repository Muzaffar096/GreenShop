import products from "../../data/data.json";

const ShopProduct = () => {
  return (
    <section className="flex flex-wrap justify-between mb-10">
      {products.map(
        (product, i) =>
          i < 5 && (
            <div className=" transition duration-300 transform hover:shadow-lg hover:scale-105 " key={product.id}>
              <img className="bg-[#FBFBFB]" width={240} src={product.image} alt="Image" />
              <p className="my-3 ml-3 text-[15px] text-[#3d3d3d]">{product.name}</p>
              <p className=" text-primary ml-3 ">$ {product.price}</p>
            </div>
          )
      )}
    </section>
  );
};

export default ShopProduct;
