import React from "react";

export default function Child({ count, setCount }) {
  return (
    <>
      <h1>*Child*</h1>
      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
        className="btn btn-outline-danger mb-2"
      >
        -
      </button>
    </>
  );
}
