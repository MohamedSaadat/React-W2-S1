import React, { useEffect, useState } from "react";
import Product from "./Product";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await axios(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(response.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  function deleteProduct(productIndex) {
    let newProducts = products.filter(
      (product, index) => index != productIndex,
    );
    setProducts(newProducts);
  }

  function updateProduct(productIndex, price) {
    const newProducts = structuredClone(products);
    newProducts[productIndex].price = price;
    setProducts(newProducts);
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="container">
        <div className="row g-4">
          {products.map((product, index) => {
            return (
              <div className="col-md-4">
                <Product
                  product={product}
                  index={index}
                  deleteProduct={deleteProduct}
                  updateProduct={updateProduct}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
