//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
var show_text;
const customStyle = { color: " " };
const currentTime = date.getHours();
if (currentTime >= 0 && currentTime < 12) {
  show_text = "Good Morning";
  customStyle.color = "red";
}
if (currentTime >= 12 && currentTime < 18) {
  show_text = "Good Afternoon";
  customStyle.color = "blue";
}
if (currentTime >= 18 && currentTime < 24) {
  show_text = "Good Evening";
  customStyle.color = "green";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle} className="heading">
      {show_text}
    </h1>
  </div>,
  document.getElementById("root")
);
