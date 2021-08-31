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
    const [state, setstate] = useState({});
  
    const itterateData = (data) => {
        for (let i = 0; i < data.length; i++)
            for (let j = 0; j < data[i].length; j++) {
                if (data[i][1] == '218') {
                   
                  setstate({...state, 
                  x: Number(data[i][2]), 
                  y: Number(data[i][3]),
                  w: Number(data[i][4]), 
                  h: Number(data[i][5]) });


                  
                    break;
                }
                else {
                    console.log('no')
                }
          }


          console.log(state)
    //    console.log(state,'in function')
    }
    return (
        <div>
            <CSVReader onFileLoaded={(data, fileInfo) => itterateData(data)} />
           
           {
             
            //   console.log(state ," state")
           }
             {state && (<DrawRectangle  state={state}/>)} 
             

           
        </div>
    )
}