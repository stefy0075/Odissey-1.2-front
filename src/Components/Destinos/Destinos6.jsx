import React, { useState, useEffect } from "react";
import './destinos6.css'
import '../Carousel/carousel.css'
import Spiral from "../Spiral/Spiral"
import { Link as Anchor, } from "react-router-dom";

export default function Destinos6() {
    const [destinos, setDestinos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        fetch("http://localhost:8080/destinos", headers)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.destino)
                setDestinos(data.destino)
                // console.log(data.destino._id)
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="espiral-contain">
            <Spiral />
        </div>;
    } else {
        const filteredDestinos = destinos.filter(destino => destino.title.toLowerCase().includes(searchTerm.toLowerCase()));
        const slicedDestinos = filteredDestinos.slice(0, 6); // Limiting the number of destinations to 6
        return (
            <div className="contain-destinos-home">
                <div className="contain-destinos-home-text">
                    <h3>Some destinations</h3>
                    <p>Welcome to our page dedicated to travel and tourism. On this site, you will find a wide variety of tourist destinations so you can plan your next dream vacation. From paradisiacal beaches to historical and cultural cities, we have everything you need to make your trip an unforgettable experience.</p>
                    <Anchor className='btn-more-home' to={`/destinos`}>More</Anchor>
                </div>
                <div className="destinos-contain-home">
                    {slicedDestinos.length > 0 ? (
                        slicedDestinos.map((destino) => (
                            <div className="home-destinos" key={destino._id}>
                                <div>
                                    <img src={destino.cover_photo} alt={destino.title} />
                                    <div className="card-text">
                                        <h2>{destino.title}</h2>
                                        <Anchor className='btn-detail-home' to={`/details/${destino._id}`}>Details</Anchor>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="results-no-found">No results found</p>
                    )}
                </div>

            </div>
        );
    }

}
