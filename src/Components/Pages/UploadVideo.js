
import React from 'react'
import ReactWebMediaPlayer from 'react-web-media-player';
import video from '../assets/test.mp4';
import SideBar from '../SideBar';
export default function UploadVideo() {
    const src='https://www.w3schools.com/html/mov_bbb.mp4';
    return (
        <div className='d-flex justify-content-start'>
            <div><SideBar /></div>
            <div>
            <ReactWebMediaPlayer
       title="Big Buck Bunny - 2008"
       thumbnail="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
       video={video}
       logo={{
           img: "https://nusid.net/your-logo.png", 
           href:"https://www.npmjs.com/package/react-web-media-player"
       }}
    />            </div>
        </div>
    )
}
