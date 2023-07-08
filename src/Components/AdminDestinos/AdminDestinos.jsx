import React, { useState, useEffect } from "react";
import { Link as Anchor, } from "react-router-dom";
import './AdminDestinos.css'
import { useParams } from 'react-router-dom';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import alertActions from "../../Store/Alert/actions";
import { useDispatch, useSelector } from 'react-redux';
import actionUser from '../../Store/GetUser/Actions';
import BtnLog from '../../Components/btnLog/BtnLog';

const { oneUser } = actionUser;
const { open } = alertActions;


export default function AdminDestinos() {
    let dispatch = useDispatch();
    const { destinos_id } = useParams()
    const [destinos, setDestinos] = useState([]);
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.user) {
            dispatch(oneUser({ user_id: user.user }));
        }
    }, [dispatch]);

    const idUser = useSelector((store) => store.getUser.user[0]);

    useEffect(() => {
        fetch("http://localhost:8080/destinos", headers)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.destino)
                setDestinos(data.destino)
                setNewTitle(data.destino.title);
                setNewContinent(data.destino.continent);
                setNewCountry(data.destino.country);
                setNewDescription(data.destino.description);
                setNewType(data.destino.type);
                setNewType1(data.destino.type1);
                setNewType2(data.destino.type2);
                setNewStock(data.destino.stock);
                setNewStock1(data.destino.stock1);
                setNewStock2(data.destino.stock2);
                setNewTimeStart(data.destino.timeStart);
                setNewTimeStart1(data.destino.timeStart1);
                setNewTimeStart2(data.destino.timeStart2);
                setNewTimeFinish(data.destino.timeFinish);
                setNewTimeFinish1(data.destino.timeFinish1);
                setNewTimeFinish2(data.destino.timeFinish2);
                setNewPrice(data.destino.price);
                setNewPrice1(data.destino.price1);
                setNewPrice2(data.destino.price2);
                setNewPages(data.destino.pages);
                setNewPages1(data.destino.pages1);
                setNewPages2(data.destino.pages2);
                setNewCover_photo(data.destino.cover_photo);
            });
    }, []);

    const acceso = destinos.map((destino) => destino._id)
    console.log(acceso)
    const url = `http://localhost:8080/destinos/${destinos_id}`
    useEffect(() => {
        fetch(url, headers)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            })
    }, [destinos_id])


    const [editingDestino, setEditingDestino] = useState(null);
    const [newTitle, setNewTitle] = useState('');
    const [newContinent, setNewContinent] = useState('');
    const [newCountry, setNewCountry] = useState('');
    const [newDescription, setNewDescription] = useState('');

    const [newType, setNewType] = useState('');
    const [newType1, setNewType1] = useState('');
    const [newType2, setNewType2] = useState('');

    const [newStock, setNewStock] = useState('');
    const [newStock1, setNewStock1] = useState('');
    const [newStock2, setNewStock2] = useState('');

    const [newTimeStart, setNewTimeStart] = useState('');
    const [newTimeStart1, setNewTimeStart1] = useState('');
    const [newTimeStart2, setNewTimeStart2] = useState('');

    const [newTimeFinish, setNewTimeFinish] = useState('');
    const [newTimeFinish1, setNewTimeFinish1] = useState('');
    const [newTimeFinish2, setNewTimeFinish2] = useState('');

    const [newPrice, setNewPrice] = useState('');
    const [newPrice1, setNewPrice1] = useState('');
    const [newPrice2, setNewPrice2] = useState('');


    const [newPages, setNewPages] = useState('');
    const [newPages1, setNewPages1] = useState('');
    const [newPages2, setNewPages2] = useState('');


    const [newCover_photo, setNewCover_photo] = useState('');

    const handleEditTitle = (event) => {
        setNewTitle(event.target.value)
    }
    const handleEditContinent = (event) => {
        setNewContinent(event.target.value);
    };

    const handleEditCountry = (event) => {
        setNewCountry(event.target.value);
    };

    const handleEditDescription = (event) => {
        setNewDescription(event.target.value);
    };
    const handleEditType = (event) => {
        setNewType(event.target.value);
    };
    const handleEditType1 = (event) => {
        setNewType1(event.target.value);
    };

    const handleEditType2 = (event) => {
        setNewType2(event.target.value);
    };


    const handleEditStock = (event) => {
        setNewStock(parseInt(event.target.value));
    };

    const handleEditStock1 = (event) => {
        setNewStock1(parseInt(event.target.value));
    };

    const handleEditStock2 = (event) => {
        setNewStock2(parseInt(event.target.value));
    };

    const handleEditTime = (event) => {
        setNewTimeStart(parseInt(event.target.value));
    };

    const handleEditTime1 = (event) => {
        setNewTimeStart1(parseInt(event.target.value));
    };

    const handleEditTime2 = (event) => {
        setNewTimeStart2(parseInt(event.target.value));
    };



    const handleEditTimeFinish = (event) => {
        setNewTimeFinish(event.target.value);
    };

    const handleEditTimeFinish1 = (event) => {
        setNewTimeFinish1(event.target.value);
    };

    const handleEditTimeFinish2 = (event) => {
        setNewTimeFinish2(event.target.value);
    };


    const handleEditPrice = (event) => {
        setNewPrice(parseInt(event.target.value));
    };
    const handleEditPrice1 = (event) => {
        setNewPrice1(parseInt(event.target.value));
    };

    const handleEditPrice2 = (event) => {
        setNewPrice2(parseInt(event.target.value));
    };


    const handleEditPages = (event) => {
        setNewPages(event.target.value);
    };

    const handleEditPages1 = (event) => {
        setNewPages1(event.target.value);
    };

    const handleEditPages2 = (event) => {
        setNewPages2(event.target.value);
    };
    const handleEditCover_photo = (event) => {
        setNewCover_photo(event.target.value);
    };










    const handleSaveTitle = (id) => {
        fetch(`http://localhost:8080/destinos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                title: newTitle,
                continent: newContinent,
                country: newCountry,
                description: newDescription,
                cover_photo: newCover_photo,
                pages: [
                    newPages, newPages1, newPages2
                ]

            })

        })
            .then(response => response.json())
            .then(result => {
                // Actualizar el título del destino
                setDestinos(destinos => destinos.map(destino => destino._id === id ? result.destino : destino))
                setEditingDestino(null)
                let dataAlert = {
                    icon: "success",
                    title: "Edit success",
                    type: "toast"
                };
                dispatch(open(dataAlert));

            })
            .catch(error => {
                console.log(error)
                let dataAlert = {
                    icon: "error",
                    title: error,
                    type: "toast"
                };
                dispatch(open(dataAlert));
            })

    }

    const handleSaveTitle2 = (id) => {
        fetch(`http://localhost:8080/destinos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({

                packages: [
                    {
                        type: newType,
                        stock: newStock,
                        time: [
                            {
                                start_date: newTimeStart,
                                finish_date: newTimeFinish,

                            }
                        ],
                        price: newPrice,
                    },
                    {
                        type: newType1,
                        stock: newStock1,
                        time: [
                            {
                                start_date: newTimeStart1,
                                finish_date: newTimeFinish1,

                            }
                        ],
                        price: newPrice1,
                    },
                    {
                        type: newType2,
                        stock: newStock2,
                        time: [
                            {
                                start_date: newTimeStart2,
                                finish_date: newTimeFinish2,

                            }
                        ],
                        price: newPrice2,
                    }
                ],

            })

        })
            .then(response => response.json())
            .then(result => {
                // Actualizar el título del destino
                setDestinos(destinos => destinos.map(destino => destino._id === id ? result.destino : destino))
                setEditingDestino(null)
                let dataAlert = {
                    icon: "success",
                    title: "Edit success",
                    type: "toast"
                };
                dispatch(open(dataAlert));
            })
            .catch(error => {
                console.log(error)
                let dataAlert = {
                    icon: "error",
                    title: error,
                    type: "toast"
                };
                dispatch(open(dataAlert));
            })
    }


    const handleDeleteDestino = async (id,) => {
        console.log(id)
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        fetch(`http://localhost:8080/destinos/${id}`, {
            method: 'DELETE',
            headers: headers.headers,
        })

            .then(response => {
                if (!response.ok) {
                    throw new Error(response.status);
                }
                return response.json();
            })
            .then(result => {
                // Eliminar el destino de la lista
                setDestinos(destinos => destinos.filter(destino => destino._id !== id))
                let dataAlert = {
                    icon: "success",
                    title: "Delete success",
                    type: "toast"
                };
                dispatch(open(dataAlert));
            })
            .catch(error => {
                console.log(error)
                let dataAlert = {
                    icon: "error",
                    title: error,
                    type: "toast"
                };
                dispatch(open(dataAlert));
            })
    }




    return (
        token && idUser?.is_admin ? (
        <div>

            <div className="destinos-list">

                {destinos.map((destino) => (
                    <div className="list-destinos" key={destino._id}>


                        <div className="delete-destino" onClick={() => handleDeleteDestino(destino._id)} > <FontAwesomeIcon icon={faTrash} /> </div>
                        <div className="edit-destino" onClick={() => setEditingDestino(destino._id)} > <FontAwesomeIcon icon={faEdit} /> </div>
                        {editingDestino === destino._id &&
                            <button className="save" onClick={() => handleSaveTitle(destino._id)}> <FontAwesomeIcon icon={faCheck} /></button>
                        }

                        {editingDestino === destino._id ?
                            <input type="text" value={newCover_photo} placeholder="cover_photo url" onChange={handleEditCover_photo} />
                            :
                            <img src={destino.cover_photo} onClick={() => setEditingDestino(destino._id)} ></img>

                        }


                        {editingDestino === destino._id ?
                            <input type="text" value={newPages} placeholder="photo url" onChange={handleEditPages} />
                            :
                            <img src={destino.pages[0]} onClick={() => setEditingDestino(destino._id)}></img>
                        }

                        {editingDestino === destino._id ?
                            <input type="text" value={newPages1} placeholder="photo url 1" onChange={handleEditPages1} />
                            :
                            <img src={destino.pages[1]} onClick={() => setEditingDestino(destino._id)}></img>
                        }


                        <div className="list-text">

                            {editingDestino === destino._id ?
                                <input type="text" value={newTitle} placeholder="title" onChange={handleEditTitle} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.title} </span>
                            }



                            {editingDestino === destino._id ?
                                <input type="text" value={newContinent} placeholder="continent" onChange={handleEditContinent} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.continent}</span>
                            }




                            {editingDestino === destino._id ?
                                <input type="text" value={newCountry} placeholder="country" onChange={handleEditCountry} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.country}</span>
                            }




                            {editingDestino === destino._id ?
                                <input type="text" value={newDescription} placeholder="description" onChange={handleEditDescription} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>
                                    {destino.description.length > 20 ? destino.description.substring(0, 20) + "..." : destino.description}
                                </span>
                            }






                            {editingDestino === destino._id ?
                                <input type="text" value={newType} placeholder="type" onChange={handleEditType} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[0].type}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="text" value={newType1} placeholder="type 1" onChange={handleEditType1} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[1].type}</span>
                            }

                            {editingDestino === destino._id ?
                                <input type="text" value={newType2} placeholder="type 2" onChange={handleEditType2} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[2].type}</span>
                            }





                            {editingDestino === destino._id ?
                                <input type="number" value={newStock} placeholder="stock" onChange={handleEditStock} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[0].stock}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="number" value={newStock1} placeholder="stock 1" onChange={handleEditStock1} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[1].stock}</span>
                            }

                            {editingDestino === destino._id ?
                                <input type="number" value={newStock2} placeholder="stock 2" onChange={handleEditStock2} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[2].stock[0]}</span>
                            }



                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeStart} placeholder="time start_date" onChange={handleEditTime} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[0].time[0].start_date}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeFinish} placeholder="time finish_date" onChange={handleEditTimeFinish} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[0].time[0].finish_date}</span>
                            }



                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeStart1} placeholder="time start_date 1" onChange={handleEditTime1} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[1].time[0]?.start_date}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeFinish1} placeholder="time finish_date 1" onChange={handleEditTimeFinish1} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[1].time[0]?.finish_date}</span>
                            }



                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeStart2} placeholder="time start_date 2" onChange={handleEditTime2} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[2].time[0]?.start_date}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="date" value={newTimeFinish2} placeholder="time finish_date 2" onChange={handleEditTimeFinish2} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[2].time[0]?.finish_date}</span>
                            }



                            {editingDestino === destino._id ?
                                <input type="number" value={newPrice} placeholder="price" onChange={handleEditPrice} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[0].price}</span>
                            }


                            {editingDestino === destino._id ?
                                <input type="number" value={newPrice1} placeholder="price 1" onChange={handleEditPrice1} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[1].price}</span>
                            }
                            {editingDestino === destino._id &&
                                <button onClick={() => handleSaveTitle2(destino._id)}>Guardar</button>
                            }

                            {editingDestino === destino._id ?
                                <input type="number" value={newPrice2} placeholder="price 2" onChange={handleEditPrice2} />
                                :
                                <span onClick={() => setEditingDestino(destino._id)}>{destino.packages[2].price}</span>
                            }

                        </div>
                    </div>
                ))}

            </div>

        </div>) :(<BtnLog/>)
    )
}

