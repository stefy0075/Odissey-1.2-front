import React from 'react'
import { Link as Anchor, } from "react-router-dom";
import './footer.css'
import Logo from '../../img/logo2.png'
import Logo2 from '../../img/logoverde.png'
export default function FooterC() {
    return (
        <div className='contain-footer '>

            <div className='world'>To the World</div>
            <div className='Footer-contain '>

                <div className='Footer-links '>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='logo2'>
                        <img src={Logo2} alt="logo" />
                    </div>
                    <Anchor to={`/`} >Odyssey@gmail.com</Anchor>
                    <Anchor to={`/`} >+54 123456789</Anchor>
                    <Anchor to={`/`} > Argentina</Anchor>
                    <div className="redes-sociales-footer">
                        <Anchor to={`/`}><i className='fa fa-facebook'></i></Anchor>
                        <Anchor to={`/`}><i className='fa fa-instagram'></i></Anchor>
                        <Anchor to={`/`}> <i className='fa fa-linkedin'></i></Anchor>
                        <Anchor to={`/`}><i className='fa fa-twitter'></i></Anchor>
                        <Anchor to={`/`}> <i className='fa fa-whatsapp'></i></Anchor>
                    </div>
                </div>
                <div className='Footer-links'>
                    <h4>Links</h4>
                    <Anchor to={`/`} >Home</Anchor>
                    <Anchor to={`/destinos`} >Destinations</Anchor>
                    <Anchor to={`/faqs`} >FAQ's</Anchor>
                    <Anchor to={`/Blog`} >Blog</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Tipes</h4>
                    <Anchor to={`/`} >Tourist activities</Anchor>
                    <Anchor to={`/`} >Tourist packages</Anchor>
                    <Anchor to={`/`} >Travel without limits</Anchor>
                    <Anchor to={`/`} >Fascinating destinations</Anchor>
                    <Anchor to={`/`} >Your next destination</Anchor>
                </div>
                <div className='Footer-links'>
                    <h4>Devs</h4>
                    <Anchor to={`https://github.com/Alexis196`} >Alexis Franco</Anchor>
                    <Anchor to={`https://github.com/Pilar890`} >Pilar Villarreal</Anchor>
                    <Anchor to={`https://github.com/AgusPereyraa`} >Agustin Pereyra</Anchor>
                    <Anchor to={`https://github.com/stefy0075`} >Eliana Guarino</Anchor>
                    <Anchor to={`https://github.com/RIVERA-PRO`} >Juan Rivera</Anchor>
                </div>

            </div>
        </div>
    )
}
