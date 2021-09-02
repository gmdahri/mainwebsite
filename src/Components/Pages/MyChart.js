import React from 'react';

import { Line } from 'react-lineto';

const MyChart = ({ state }) => {
  const data = [
    {
      color: "steelblue",
      points: [{ x: 1, y: 2 }, { x: 3, y: 5 }, { x: 7, y: -3 }]
    }
  ];
  return <div> { state &&
    state.map((element,index)=>{
      if (index<state.length-2){
        console.log(element.x,element.y,state[index+1].x,state[index+1].y);

    <Line x0={element.x} y0={element.y} x1={state[index+1].x} y1={state[index+1].y} />}
    })
    }
  </div>
};
export default MyChart;