import React, { useState } from "react";

export default function Products() {
  const [products, setProduct] = useState(
    [{
      name: "p1",
      price: 10,
      type: "T1",
    },
    {
      name: "p2",
      price: 20,
      type: "T2",
    },
    {
      name: "p3",
      price: 30,
      type: "T3",
    },]
  );
  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="row g-4">
          {products.map((product) => {
            return (
              <div className="col-md-4">
                <div className="text-center bg-dark text-white p-2 rounded">
                  <h2>{product.name}</h2>
                  <h2>{product.price}</h2>
                  <h2>{product.type}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
