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
import MyChart from './MyChart';

export default function ReadCSV() {
    const [state, setstate] = useState([]);
    const [flag, setFlag] = useState(false);
    useEffect(() => {
        // console.log(state, 'in useEffect');
    }, [state]);
    const itterateData = (data) => {
        // for (let i = 0; i < data.length; i++) {
        //  if (data[i][1] == '218') {
        //         setstate([...state,{ 
        //           x: Number(data[i][2]), 
        //           y: Number(data[i][3]),
        //           w: Number(data[i][4]), 
        //           h: Number(data[i][5])}]);
        //              break;
        //         }
        //   }

        for (var i = 0; i < data.length; i++) {

            if (data[i][6] != 'xmid')
                setstate((pre) => [...pre,
                {
                    x: Number(data[i][6]),
                    y: Number(data[i][7])
                }]);

        }
        setFlag(true);

    }
    return (
        <div>

            <CSVReader onFileLoaded={(data, fileInfo) => itterateData(data)} />
            <MyChart state={state}/>
            {

                //   console.log(state ," state")  
            }

            {/* {state && state.map((e)=>(<DrawRectangle  state={e}/>))}  */}
            {/* {flag && (<DrawRectangle  state={state}  />)}  */}

            {/* {flag && state.map((element, index) => {
                if (index<state.length-2) {
                //     <Line
                //     position="fixed"
                //     from={[element.x, element.y]}
                //     to={[state[index+1], state[index+1].y]}
                //     color="#FFFF00"
                //   />
                    <DrawRectangle px={element.x} py={element.y} pxa={state[index + 1].x} pya={state[index + 1].y} h={flag}/>
                    console.log(element.x,element.y,state[index+1].x,state[index+1].y);
                } */}
            {/* })} */}
            {/* <img src={img} />  */}


        </div>
    )
}