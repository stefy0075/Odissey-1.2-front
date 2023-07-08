import React, { useState, useEffect } from "react";
import Spiral from "../Spiral/Spiral"
import { Link as Anchor, } from "react-router-dom";

export default function BlogDestinos() {

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
                console.log(data.destino._id)
                setIsLoading(false);
            });
    }, []);
    if (isLoading) {
        return <div className="espiral-contain">
            <Spiral />
        </div>;
    } else {
        const filteredDestinos = destinos.filter(destino => destino.title.toLowerCase().includes(searchTerm.toLowerCase()));
        const slicedDestinos = filteredDestinos.slice(0, 12); // Limiting the number of destinations to 6
        return (
            <div className="contain-destinos-home">
                <div className="contain-destinos-home-text">
                    <h3>Tips for buying a flight</h3>
                    <p>When looking for your air tickets, take into account the airport from which you depart and arrive, the price / duration of the flight, and the luggage included in your rate. Some cheap flights may have many stopovers and not include luggage. If your flight has stopovers, check if it involves a change of airport.</p>
                    <Anchor className='btn-more-home' to={`/destinos`}>More</Anchor>

                </div>
                <div className="destinos-contain-home">
                    {slicedDestinos.length > 0 ? (
                        slicedDestinos.map((destino) => (
                            <div className="home-destinos" key={destino.id}>
                                <div >
                                    <img src={destino.cover_photo} alt={destino.title} />
                                    <div className="card-text">

                                        <Anchor className='btn-detail-home' to={`/details/${destino._id}`}>More</Anchor>
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
