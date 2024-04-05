
import React from "react";
import img from "../../../../public/images/blog-posts/plant3.png";

const Products = ({ product }) => {
  return (
    <div className="mb-16">
      <img src={img} alt="Image" />

      <h1 className="text-sm">{product.name}</h1>
      <span className="text-primary pb-40">${product.price}</span>
    </div>
  );
};

export default Products;
