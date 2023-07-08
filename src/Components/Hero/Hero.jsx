import React from 'react'
import './hero.css'
import Carousel from '../Carousel/Carousel'
import { Link as Anchor, } from "react-router-dom";

export default function Hero() {
  return (
    <div className='heroSection'>
      <div className='welcomeSection'>
        <h2 className='HeroTitle'>Travel without limits and make your dreams come true.</h2>
        <Carousel />
        <Anchor to={`/destinos`} className='HeroButton' >More</Anchor>
      </div>
    </div>
  )
}
