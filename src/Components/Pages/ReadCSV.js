import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';
import DrawRectangle from './DrawRectangle';
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
export default function ReadCSV() {
    const [fileData, setfileData] = useState([]);
    const [state, setstate] = useState([]);
    let x=[];
    let y=[];
    let w=[];
    let h=[];
    const itterateData = (data) => {
        for (let i = 0; i < data.length; i++)
            for (let j = 0; j < data[i].length; j++) {
                // console.log(data[i][1]);
                if (data[i][1] == '218') {
                   
                    x=data[i][2];
                    y=data[i][3];
                    w=data[i][4];
                    h=data[i][5];
                    
                    break;
                }
                else {
                    console.log('no')
                }
            }

        // for(let i=0;i<checkFrame.length;i++){
        //     if(checkFrame[i]===218)
        //     setframe(checkFrame[i]);
        // }
        
        // console.dir(state)
    }
    return (
        <div>
            <CSVReader onFileLoaded={(data, fileInfo) => itterateData(data)} />
            {/* <input type='file' multiple /> */} 
             <DrawRectangle x={x} y={y} w={w} h={h} />
           {
    console.log(x,y,w,h)
           }
            <Rectangle
                corner={x,y}
                width={w - x}
                height={h - y }
                color='#FF0266'
            />
            

        </div>
    )
}
