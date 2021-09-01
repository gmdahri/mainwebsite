import React,{useEffect} from 'react'
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';

export default function DrawRectangle(state) {
    // console.log(state.state , 'in rectangle ')
    console.log(state.state,'pxa');
    var x=[1];
    return (
        <div>

        {/* {pxa && pxb &&    <Line
                position='fixed'
                from={[pxa, pya]}
                to={[pxb , pyb ]}
                color='#1DBFE7'
            />} */}

{/* {state && state.state && console.log(state.state[0].x)} */}

        {  state && <Rectangle
                corner={[state.state.x, state.state.y]}
                width={state.state.w - state.state.x}
                height={state.state.h - state.state.y}
                color='#FF0266'
            />} 
        </div>
    )
}