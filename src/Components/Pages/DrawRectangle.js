import React, { useEffect } from "react";
import {
  Line,
  SteppedLine,
  PolyLine,
  Circle,
  Rectangle,
} from "draw-shape-reactjs";

export default function DrawRectangle({ state }) {
  useEffect(() => {}, []);

  // console.log(state.state,'pxa');
  var x = [1];
  return (
    <div>
      {state &&
        state.map((element, index) => {
         index<state.length-10 && (
            <Line
              position="fixed"
              from={[element.x, element.y]}
              to={[state[index + 1].x, state[index + 1].y]}
              color="#FFFF00"
            />)
          
        })}
      {/* <Line
              position="fixed"
              from={[state[0].x, state[0].y]}
              to={[state[10].x, state[10].y]}
              color="#FFFF00"
            /> */}
      {/* {state && state.state && console.log(state.state[0].x)} */}

      {/* {  state && <Rectangle
                corner={[state.state.x, state.state.y]}
                width={state.state.w - state.state.x}
                height={state.state.h - state.state.y}
                color='#FF0266'
            />}  */}
    </div>
  );
}
