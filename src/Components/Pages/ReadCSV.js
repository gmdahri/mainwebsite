import React, { useState, useEffect } from 'react';
import CSVReader from 'react-csv-reader';
import DrawRectangle from './DrawRectangle';
import {
    Line,
    SteppedLine,
    PolyLine,
    Circle,
    Rectangle
} from 'draw-shape-reactjs';
import img from '../assets/frame218.jpg';

export default function ReadCSV() {
    const [state, setstate] = useState([]);
    const [value,setValue]=useState([]);
    useEffect(() => {
        // console.log(state, 'in useEffect');
    }, [state])
    const itterateData = (data) => {
        for (let i = 0; i < data.length; i++) {
         if (data[i][1] == '218') {
                setstate([...state,{ 
                  x: Number(data[i][2]), 
                  y: Number(data[i][3]),
                  w: Number(data[i][4]), 
                  h: Number(data[i][5])}]);
                     break;
                }
          }
        // for(var i=0;i<data.length;i++){
        //     for(var j=0;j<data[i].length;j++){
        //         if(data[i][6]!='xmid')
        //         setstate([...state,
        //         {
        //             x:data[i][6],
        //             y:data[i][7]
        //         }]);
        //     }
        // }

    }
    return (
        <div>

            <CSVReader onFileLoaded={(data, fileInfo) => itterateData(data)} />
           
           {
             
            //   console.log(state ," state")  
           }

             {state && state.map((e)=>(<DrawRectangle  state={e}/>))} 
             {/* {value && value.map((e,i)=>(<DrawRectangle pOne={e[i]} pTwo={e[i+1]} />))} */}
         {/* {state && <DrawRectangle state={state} /> } */}
             <img src={img} /> 
                
           
        </div>
    )
}