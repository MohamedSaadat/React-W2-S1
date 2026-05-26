import React from "react";

export default function Product({ product, index, deleteProduct }) {
  return (
    <div className="col-md-4">
      <div className="text-center bg-dark text-white p-2 rounded">
        <h2>index: {index + 1}</h2>
        <hr />
        <h2>name: {product.name}</h2>
        <h2>price: {product.price}</h2>
        <h2>type: {product.type}</h2>
        <button
          onClick={() => deleteProduct(index)}
          className="btn btn-outline-danger"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
