// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

// // Map vs forEach
// var newNumbers01 = [];
// numbers.forEach(function (x) {
//   newNumbers01.push(x * 2);
// });

// console.log(newNumbers01);

// //Filter - Create a new array by keeping the items that return true.

// const newNumbers2 = numbers.filter(function (num) {
//   return num > 10;
// });

// console.log(newNumbers2);

// // Filter vs forEach
// var newNumbers02 = [];
// numbers.forEach(function (num) {
//   if (num > 10) {
//     newNumbers02.push(num);
//   }
// });

// console.log(newNumbers02);

// //Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber03 = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("Accumalator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);

//   return accumulator + currentNumber;
// });

// console.log(newNumber03);

// //Find - find the first item that matches from an array.

// const newNumber04 = numbers.find(function (num) {
//   return num > 10;
// });

// console.log(newNumber04);

// //FindIndex - find the index of the first item that matches.
// const newNumber05 = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(newNumber05);

//Challenge Solution
import emojipedia from "./emojipedia";

const newEmoji = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmoji);
