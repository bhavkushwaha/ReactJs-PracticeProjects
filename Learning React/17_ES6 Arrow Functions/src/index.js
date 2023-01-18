import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumbers = numbers.map((x) => x * x);

// console.log(newNumbers);

//Map -Create a new array by doing something with each item in an array.
const newNumbers01 = numbers.map((x) => x * 2);

console.log(newNumbers01);

////Filter - Create a new array by keeping the items that return true.
const newNumbers02 = numbers.filter((num) => num < 10);

console.log(newNumbers02);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers03 = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
});

console.log(newNumbers03);

////Find - find the first item that matches from an array.
const newNumbers04 = numbers.find((num) => num > 10);

console.log(newNumbers04);

////FindIndex - find the index of the first item that matches.
const newNumbers05 = numbers.findIndex((num) => num > 10);

console.log(newNumbers05);
