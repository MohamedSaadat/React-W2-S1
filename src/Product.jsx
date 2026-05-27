import React from "react";
import Products from "./Products";

export default function Product({
  product,
  index,
  deleteProduct,
  updateProduct,
}) {
  return (
    <div className="text-center bg-dark text-white p-2 rounded p-5 position-relative">
      {/* {product.sale && (
        <div className="bg-warning rounded px-2 position-absolute top-0 start-0 text-dark">
          sale
        </div>
      )} */}
      <h2>index: {index + 1}</h2>
      <hr />
      <img className="w-100" src={product.imageCover} alt="" />
      <h2>title: {product.title}</h2>
      <h2>price: {product.price}</h2>
      {/* <h2>type: {product.type}</h2> */}
      {/* <h2>sale: {product.sale.toString()}</h2> */}
      <button
        onClick={() => {
          updateProduct(index, product.price - 1);
        }}
        className="btn btn-outline-warning"
      >
        -
      </button>
      <button
        onClick={() => deleteProduct(index)}
        className="btn btn-outline-danger mx-2"
      >
        Delete
      </button>
      <button
        onClick={() => {
          updateProduct(index, product.price + 1);
        }}
        className="btn btn-outline-warning"
      >
        +
      </button>
    </div>
  );
}
