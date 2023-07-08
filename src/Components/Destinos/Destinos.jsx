import React, { useState, useEffect } from "react";
import './destinos.css'
import '../Carousel/carousel.css'
import Spiral from "../Spiral/Spiral"
import { Link as Anchor, } from "react-router-dom";


function Destinos() {
    const [destinos, setDestinos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [country, setCountry] = useState("");
    const [continent, setContinent] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        fetch("http://localhost:8080/destinos", headers)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.destino)
                setDestinos(data.destino)
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div className="espiral-contain">
            <Spiral />
        </div>;
    } else {
        const filteredDestinos = destinos.filter(destino =>
            destino.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (country === "" || destino.country === country) &&
            (continent === "" || destino.continent === continent)
        );
        return (
            <div className="contain-destinos">
                <h3>Explore the destinations</h3>
                <div className="inputsearch">
                    <input type="text" placeholder="Search...." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="country-continent">
                    <div className="label">

                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                            <option value="">All</option>
                            <option value="France">France</option>
                            <option value="Italy">Italy</option>
                            <option value="Argentina">Argentina </option>
                            <option value="Mexico">Mexico</option>
                            <option value="Egipto">Egipto </option>
                            <option value="Thailand">Thailand</option>
                            <option value="China">China </option>
                            <option value="Turkey">Turkey  </option>
                            <option value="Australia">Australia</option>
                            <option value="United States">United States</option>
                        </select>
                    </div>
                    <h4>Country or Continent</h4>
                    <div className="label">

                        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
                            <option value="">All</option>
                            <option value="Europe">Europe</option>
                            <option value="Asia">Asia</option>
                            <option value="Africa">Africa</option>
                            <option value="Oceania">Oceania</option>
                            <option value="North America">North America</option>
                            <option value="South America">South America</option>
                        </select>
                    </div>
                </div>
                <div className="destinos-contain">
                    {filteredDestinos.length > 0 ? (
                        filteredDestinos.map((destino) => (
                            <div className="card-destinos" key={destino._id}>
                                <div >
                                    <img src={destino.cover_photo} alt={destino.title} />
                                    <div className="card-text">
                                        <h2>{destino.title}</h2>

                                        <div className='price-link'>
                                            <Anchor className='btn-detail' to={`/details/${destino._id}`}>Details</Anchor>
                                            <p> {destino.packages[0].time[0].start_date}  {destino.packages[0].time[0].finish_date} </p>


                                        </div>

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

export default Destinos;
