import React from 'react'
import './CardOferta.css'
import imgoferta from '../../img/card.jpg'
import { Link as Anchor, } from "react-router-dom";
export default function CardOferta() {
    return (
        <div>
            <div className='cardOferta'>
                <img src={imgoferta} alt="ofera" />
                <div className='cardOfertaText'>
                    <p>If you have not yet defined your destination, you may be interested in seeing our offers section.</p>
                    <Anchor className='btn-detail' to={`/destinos`}>More</Anchor>
                </div>
            </div>

        </div>
    )
}
