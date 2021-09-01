import React,{useEffect} from 'react'
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
import img from '../assets/frame218.jpg';

export default function DrawRectangle(state,counter) {
    // console.log(state.state , 'in rectangle ')
    var x=[1];
    return (
        <div>

<img src={img} /> 
             {/* <Line
                    position='fixed'
                    from={[1469.4885341291, 1029.933670802]}
                    to={[1050.7102464445 , 173.8927916782 ]}
                    color='#1DBFE7'
                /> */}
                {state && state.state && console.log(state.state)}
        {  state ? for(let i=0;i<counter;i++){}:null}
        </div>
    )
}