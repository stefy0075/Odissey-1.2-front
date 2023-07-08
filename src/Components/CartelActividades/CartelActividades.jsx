import React from 'react'
import './CartelActividades.css'
import { Link as Anchor, } from "react-router-dom";
import isla from '../../img/isla.png'
export default function CartelActividades() {
    return (
        <div className='cartelActividades-contain'>



            <div className='text-cartelActividades'>
                <h3>Tourist activities</h3>
                <p>Are you planning a trip? At Almundo we bring you the best activities, walks, excursions and tours with promotions so that you can enjoy the main tourist attractions of your next destination to the fullest.</p>
                <Anchor to={`/Blog`} className='btn-more' >More</Anchor>
            </div>
            <div className='img-cartelActividades'>
                <img src={isla} alt="" />
            </div>

        </div>
    )
}
