import React, { useState, useEffect } from "react";
import CartelPromo from '../../Components/CartelPromo/CartelPromo'
import CartelActividades from '../../Components/CartelActividades/CartelActividades'
import CartelCiudades from '../../Components/CartelCiudades/CartelCiudades'
import Destinos6 from "../../Components/Destinos/Destinos6";
import './Carteles.css'
export default function Carteles() {

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
        <div>

            {
                userData ? (
                    <div>

                        <Destinos6 />

                        <CartelPromo />
                        <CartelActividades />
                        <CartelCiudades />
                    </div>
                ) : (
                    <div>
                        <CartelPromo />
                        <CartelActividades />
                        <CartelCiudades />
                    </div>
                )
            }
        </div>
    )
}


