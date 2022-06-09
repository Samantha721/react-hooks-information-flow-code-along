import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";


//can use this onChangeColor as an event handler
function Child({ onChangeColor, color }) {
function handleClick() {
  const newColor = getRandomColor();
  onChangeColor(newColor)
}

  return <div 
  onClick={handleClick}
  className="child" 
  style={{ backgroundColor: color }} />;
}

export default Child;
