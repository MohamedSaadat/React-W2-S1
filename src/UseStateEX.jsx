import React, { useState } from "react";

export default function UseStateEX() {
  const [Num1, setNum1] = useState(0);
  const [Num2, setNum2] = useState(0);
  const [Total, setTotal] = useState(0);
  function getSum() {
    setTotal(Num1 + Num2);
  }
  return (
    <div className="bg-info-subtle p-5">
      <h1>*UseStateEX*</h1>
      <div className="row mb-4">
        <div className="col-6">
          <label htmlFor="">num1</label>
          <input
            onChange={(e) => setNum1(+e.target.value)}
            className="form-control"
            type="number"
            name=""
            id=""
          />
        </div>
        <div className="col-6">
          <label htmlFor="">num2</label>
          <input
            onChange={(e) => setNum2(+e.target.value)}
            className="form-control"
            type="number"
            name=""
            id=""
          />
        </div>
      </div>
      <button onClick={getSum} className="btn btn-outline-primary mb-3">
        calculate
      </button>
      <h2>total: {Total}</h2>
    </div>
  );
}
