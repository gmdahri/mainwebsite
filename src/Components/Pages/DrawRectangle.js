import React, { useEffect } from "react";
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle,
} from "draw-shape-reactjs";
import LineGraph from 'smooth-line-graph';
export default function DrawRectangle({ state }, index) {

    console.log(state, 'in rect')
   


    // console.log(state.state,'pxa');
    var x = [1];
    return (
        <div>
        
            {/* {px &&    <Line
              position="fixed"
              from={[px, py]}
              to={[pxa, pya]}
              color="#FFFF00"
            />} */}
            {/* {state && state.state && console.log(state.state[0].x)} */}

            {/* {  state && <Rectangle
                corner={[state.state.x, state.state.y]}
                width={state.state.w - state.state.x}
                height={state.state.h - state.state.y}
                color='#FF0266'
            />}  */}
             <Line
                    position='fixed'
                    from={[110, 610]}
                    to={[600, 850]}
                    color='#1DBFE7'
                />
        </div>
    );
}
