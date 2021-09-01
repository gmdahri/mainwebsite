import React,{useEffect} from 'react'
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';

export default function DrawRectangle(state,counter) {
    // console.log(state.state , 'in rectangle ')
    console.log(state.state,'pxa');
    var x=[1];
    return (
        <div>

<<<<<<< HEAD
<img src={img} /> 
             {/* <Line
                    position='fixed'
                    from={[1469.4885341291, 1029.933670802]}
                    to={[1050.7102464445 , 173.8927916782 ]}
                    color='#1DBFE7'
                /> */}
                {state && state.state && console.log(state.state)}
        {  state ? for(let i=0;i<counter;i++){}:null}
=======
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
>>>>>>> c3574a1f427b79f5c2c2a7c45c410ef6610ab988
        </div>
    )
}