import React, { useState, useEffect } from "react";
import './Blog.css'
import Carrusel2 from '../Carrusel2/Carrusel2'
import BlogDestinos from '../BlogDestinos/BlogDestinos'
import CardAventura from '../CardAventura/CardAventura'
import CardOferta from '../CardOferta/CardOferta'
export default function Blog() {
    const [userData, setUserData] = useState(null);

    const updateUserData = () => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserData(JSON.parse(user));
        }
    };

    // Llamar a la función updateUserData cuando el componente se monte
    useEffect(() => {
        updateUserData();
    }, []);
    return (
        <div className='blog-contain'>

            {
                userData ? (
                    <div className='blog-contain'>
                        <div className='carrusel-odertas'>
                            <Carrusel2 />
                            <CardOferta />
                        </div>
                        <BlogDestinos />
                        <CardAventura />

                    </div>
                ) : (
                    <div className='blog-contain'>
                        <div className='carrusel-odertas'>
                            <Carrusel2 />
                            <CardOferta />
                        </div>

                        <CardAventura />

                    </div>
                )
            }

        </div>
    )
}

