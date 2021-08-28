import React from 'react'
import SideBar from '../SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function about() {
    return (
        <div className='d-flex justify-content-start'>
            <div><SideBar /></div>
            <div>in about</div>          
        </div>
    )
}
