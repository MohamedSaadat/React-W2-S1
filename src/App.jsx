import React from "react";

import Binding from "./Binding.jsx";
import UseState from "./UseState.jsx";
import UseStateEX from "./UseStateEX.jsx";
import Parent from "./Parent.jsx";
import Products from "./Products.jsx";

export default function App() {
  return (
    <>
      <h1>App</h1>
      <hr />
      <Binding />
      <hr />
      <UseState />
      <hr />
      <UseStateEX />
      <hr />
      <Parent />
      <hr />
      <Products />
    </>
  );
}
