import React, { useState } from "react";
import Product from "./Product";

export default function Products() {
  const [products, setProduct] = useState([
    {
      name: "product 1",
      price: 10,
      type: "T1",
    },
    {
      name: "product 2",
      price: 20,
      type: "T2",
    },
    {
      name: "product 3",
      price: 30,
      type: "T3",
    },
  ]);

  function deleteProduct(productIndex) {
    let newProducts = products.filter(
      (product, index) => index != productIndex,
    );
    setProduct(newProducts);
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="row g-4">
          {products.map((product, index) => {
            return (
              <Product
                product={product}
                index={index}
                deleteProduct={deleteProduct}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
