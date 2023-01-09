import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img alt="random" src={img + "?grayscale"} />
      <img
        className="food-img"
        alt="noodles"
        src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe-500x375.jpg"
      ></img>
      <img
        className="food-img"
        alt="bacon"
        src="https://saltandbaker.com/wp-content/uploads/2020/12/How-to-Cook-Bacon-in-the-Oven-2.jpg"
      ></img>
      <img
        className="food-img"
        alt="soup"
        src="https://www.inspiredtaste.net/wp-content/uploads/2018/10/Homemade-Vegetable-Soup-Recipe-2-1200.jpg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
