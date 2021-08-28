import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className='d-flex justify-content-start '>
          
            <ProSidebar style={{height:'100vh'}} >
                <Menu iconShape="square">
                    <MenuItem>Dashboard <Link to='/landing' /></MenuItem>
                    <SubMenu title="Components" className='center' >
                        <MenuItem>about<Link to='/about' /></MenuItem>
                        <MenuItem>upload a video <Link to='/UploadVideo' /></MenuItem>
                        <MenuItem>Designer <Link to='/Designer' /></MenuItem>

                    </SubMenu>
                </Menu>
            </ProSidebar>
            
           
        </div>
    )
}

