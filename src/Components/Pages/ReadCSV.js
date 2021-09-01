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
<<<<<<< HEAD
    const [state, setstate] = useState({});
    var [counter,setCounter]=useState(0);
    var c=0;
=======
    const [state, setstate] = useState([]);
    const [value,setValue]=useState([]);
    useEffect(() => {
        // console.log(state, 'in useEffect');
    }, [state])
>>>>>>> c3574a1f427b79f5c2c2a7c45c410ef6610ab988
    const itterateData = (data) => {
        for (let i = 0; i < data.length; i++) {
         if (data[i][1] == '218') {
                setstate([...state,{ 
                  x: Number(data[i][2]), 
                  y: Number(data[i][3]),
                  w: Number(data[i][4]), 
<<<<<<< HEAD
                  h: Number(data[i][5]), });
                  
                  setCounter(counter+1);


                  
                    break;
                }
                else {
                    console.log('no')
=======
                  h: Number(data[i][5])}]);
                     break;
>>>>>>> c3574a1f427b79f5c2c2a7c45c410ef6610ab988
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

<<<<<<< HEAD

          console.log(counter)
    //    console.log(state,'in function')
=======
>>>>>>> c3574a1f427b79f5c2c2a7c45c410ef6610ab988
    }
    return (
        <div>

            <CSVReader onFileLoaded={(data, fileInfo) => itterateData(data)} />
           
           {
             
            //   console.log(state ," state")  
           }
<<<<<<< HEAD
             {state && (<DrawRectangle  state={state} counter={counter}/>)} 
             
=======
>>>>>>> c3574a1f427b79f5c2c2a7c45c410ef6610ab988

             {state && state.map((e)=>(<DrawRectangle  state={e}/>))} 
             {/* {value && value.map((e,i)=>(<DrawRectangle pOne={e[i]} pTwo={e[i+1]} />))} */}
         {/* {state && <DrawRectangle state={state} /> } */}
             <img src={img} /> 
                
           
        </div>
    )
}