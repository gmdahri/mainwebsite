import React,{useEffect} from 'react'
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
import img from '../assets/frame218.jpg';

export default function DrawRectangle(x,y,w,h) {
    console.log(x,y,w,h)
    
    return (
        <div>

{/* <img src={img} /> */}
             {/* <Line
                    position='fixed'
                    from={[1469.4885341291, 1029.933670802]}
                    to={[1050.7102464445 , 173.8927916782 ]}
                    color='#1DBFE7'
                /> */}
           <Rectangle
                corner={x,y}
                width={w - x}
                height={h - y }
                color='#FF0266'
            />
        </div>
    )
}
