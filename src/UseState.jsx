import React, { useState } from "react";

export default function UseState() {
  const [userName, setUserName] = useState("mohamed");
  function changName() {
    setUserName("MOHAMED");
  }
  return (
    <div className="bg-danger p-5">
      <h1>*UseState*</h1>
      <h2>my name: {userName}</h2>
      <button onClick={changName} className="btn btn-outline-dark">
        change
      </button>
    </div>
  );
}
