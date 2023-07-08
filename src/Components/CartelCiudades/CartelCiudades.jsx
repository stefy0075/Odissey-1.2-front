import React from 'react'
import ciudades from '../../img/ciudades.png'
import { Link as Anchor, } from "react-router-dom";
import './CartelCiudades.css'
export default function CartelCiudades() {
    return (
        <div className='cartelCiudades-contain'>

            <div className='img-cartelCiudades'>
                <img src={ciudades} alt="" />
            </div>

            <div className='text-cartelCiudades'>
                <h3>Discover cities</h3>
                <p>If you like to travel, nothing better than doing it with the greatest peace of mind. At Almundo, together with Assist Card, we have the best travel assistance plans for any destination you visit. Did you know that there are destinations with mandatory travel insurance? Here you can find them at the best price and with financing options. If you are looking for travel insurance for Europe, America, Asia or any destination</p>
                <Anchor to={`/destinos`} className='btn-more' >More</Anchor>
            </div>

        </div>
    )
}
