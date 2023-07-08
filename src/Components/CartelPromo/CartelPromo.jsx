import React from 'react'
import './CartelPromo.css'
import { Link as Anchor, } from "react-router-dom";
import celu from '../../img/celular.png'


export default function CartelPromo() {
    return (
        <div className='cartelPromo-contain'>

            <div className='img-cartelPromo'>
                <img src={celu} alt="" />
            </div>

            <div className='text-cartelPromo'>
                <h3> Don't miss anyone promotion</h3>
                <p>You can cancel your purchases* made online or by phone within a maximum period of 10 days from the date you made the purchase</p>
                <Anchor to={`/Blog`} className='btn-more' >More</Anchor>
            </div>

        </div>
    )
}
