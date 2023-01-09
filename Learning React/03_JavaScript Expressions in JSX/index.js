import React from "react";
import ReactDOM from "react-dom";

const fname = "Bhav";
const lname = "Kushwaha";
const num = 2;

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your Lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
