import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";



function Parent(){
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#fff")
  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor)
    setChildrenColor(newChildColor)
  }

  return (
    <div className="parent" style={{backgroundColor: color}}>
      <Child onChangeColor ={handleChangeColor} color={childrenColor}/>
      <Child onChangeColor ={handleChangeColor} color={childrenColor}/>
      <Child onChangeColor ={handleChangeColor} color={childrenColor}/>

    </div>
  )

}

export default Parent;









/*
function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child />
      <Child />
    </div>
  );
}


*/