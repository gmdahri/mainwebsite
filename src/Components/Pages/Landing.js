import React from 'react'
import SideBar from '../SideBar';
import { Row, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Landing() {
    return (
        <div className='d-flex justify-content-start'>
            <div><SideBar /></div>
            <div>data</div>          
        </div>
    )
}
