import React from 'react'
import Detail from '../../Components/Detail/Detail'
import video from '../../img/video.mp4'
import '../../Components/Detail/Detail.css'
export default function PageDetail() {
    return (
        <div>
            <video className='video' src={video} autoplay="true" muted="true" loop="true"
                poster="https://www.coderhouse.com/anims/mod1anim1-low.mp4"></video>
            <Detail />
        </div>
    )
}
