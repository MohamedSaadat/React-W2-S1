export default function Binding() {
  var x = "mohamed";
  var y = "fas fa-star";
  var z = 10;
  var style = {
    color: "red",
  };
  function sayHi(name) {
    return "hi " + name;
  }
  function getSum(n1, n2) {
    return n1 + n2;
  }
  function greeting(name) {
    console.log("Hi " + name);
  }
  return (
    <div className="bg-warning p-5">
      <h1>*Binding*</h1>
      <h1>my name: {x}</h1>
      <i className={y}></i>
      <h1 style={style}>{sayHi("mohamed")}</h1>
      <h1>{sayHi(x)}</h1>
      <h1>{getSum(20, z)}</h1>
      <button
        className="btn btn-outline-light"
        onClick={() => {
          greeting("mohamed");
        }}
      >
        Say Hi *console*
      </button>
    </div>
  );
}
