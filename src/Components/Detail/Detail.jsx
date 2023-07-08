import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Spiral from "../Spiral/Spiral";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlane, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import alertActions from "../../Store/Alert/actions";
import { useDispatch } from "react-redux";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
const { open } = alertActions;


export default function Detail() {
    let dispatch = useDispatch();
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [carrito, setCarrito] = useState([]);
    const [showLightbox, setShowLightbox] = useState(false);
    const [showLightbox2, setShowLightbox2] = useState(false);
    const [showLightbox3, setShowLightbox3] = useState(false);



    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }

    useEffect(() => {
        fetch(`http://localhost:8080/destinos/${id}`, headers)
            .then((response) => response.json())
            .then((data) => {
                setProducto(data.destino);
                console.log(data.destino)
            });
    }, [id]);

    const handleSubmit = (index, cover_photo, title, stock, price, type) => {
        // Verificar si el precio está disponible
        if (price === "Not Available" || stock === "Not Available" || !stock) {
            let dataAlert = {
                icon: "error",
                title: "Not available",
                type: "toast"
            };
            dispatch(open(dataAlert));
            return;
        }

        // Si el precio está disponible, actualizar el stock del paquete
        const newPackages = [...producto.packages];
        const newPackage = { ...newPackages[index] };
        newPackage.stock -= 1;
        newPackages.splice(index, 1, newPackage);

        // Actualizar el estado del producto con los paquetes actualizados
        const newProducto = { ...producto, packages: newPackages };
        setProducto(newProducto);

        // Agregar el paquete actualizado al carrito
        const newCartItem = { price, type, stock, title, cover_photo };
        setCarrito([...carrito, newCartItem]);
        localStorage.setItem('carrito', JSON.stringify([...carrito, newCartItem,]));

        let existingPackageIndex = carrito.findIndex(pkg => pkg.title === title && pkg.type === type);
        if (existingPackageIndex !== -1) {
            // Si el paquete ya está en el carrito, actualizar la cantidad de ese paquete
            let updatedPackage = { ...carrito[existingPackageIndex] };
            updatedPackage.quantity += 1;
            let updatedCart = [...carrito];
            updatedCart[existingPackageIndex] = updatedPackage;
            setCarrito(updatedCart);
            localStorage.setItem('carrito', JSON.stringify(updatedCart));
        } else {
            // Si el paquete no está en el carrito, agregarlo al carrito con cantidad 1
            const newPackage = { title, cover_photo, price, stock, type, quantity: 1 };
            setCarrito([...carrito, newPackage]);
            localStorage.setItem('carrito', JSON.stringify([...carrito, newPackage]));
        }

        let dataAlert = {
            icon: "success",
            title: "Added product",
            type: "toast"
        };
        dispatch(open(dataAlert));

    };




    useEffect(() => {
        const cart = localStorage.getItem('carrito');
        if (cart) {
            setCarrito(JSON.parse(cart));
        }
    }, []);





    if (!producto) {
        return (
            <div className="espiral-contain">
                <Spiral />
            </div>
        );
    }

    return (
        <div className="contain-detail">
            <h3>Destination details</h3>
            <div className="detail-contain">
                <div className="img-detail">
                    <img
                        src={producto.cover_photo}
                        alt={producto.title}
                        onClick={() => setShowLightbox(true)}
                    />
                    {showLightbox && (
                        <Lightbox
                            mainSrc={producto.cover_photo}
                            onCloseRequest={() => setShowLightbox(false)}
                        />
                    )}
                    <div className="images-detail">
                        <div className="imgs">
                            <img
                                src={producto.pages[0]}
                                alt={producto.title}
                                onClick={() => setShowLightbox2(true)}
                            />
                            {showLightbox2 && (
                                <Lightbox
                                    mainSrc={producto.pages[0]}
                                    onCloseRequest={() => setShowLightbox2(false)}
                                />
                            )}
                        </div>
                        <div className="imgs">
                            <img
                                src={producto.pages[1]}
                                alt={producto.title}
                                onClick={() => setShowLightbox3(true)}
                            />
                            {showLightbox3 && (
                                <Lightbox
                                    mainSrc={producto.pages[0]}
                                    onCloseRequest={() => setShowLightbox3(false)}
                                />
                            )}
                        </div>
                        <div className="imgs">
                            <img
                                src={producto.cover_photo}
                                alt={producto.title}
                                onClick={() => setShowLightbox(true)}
                            />
                            {showLightbox && (
                                <Lightbox
                                    mainSrc={producto.cover_photo}
                                    onCloseRequest={() => setShowLightbox(false)}
                                />
                            )}
                        </div>

                    </div>
                </div>

                <div className="text-detail">

                    <h3>{producto.title}</h3>
                    <p className="descripcion">{producto.country} | {producto.continent}</p>
                    <p className="descripcion">{producto.description}</p>
                    <p> {producto.packages[0].type} | {producto.packages[1].type} | {producto.packages[2].type}  </p>
                    <p> {producto.packages[0].time[0].start_date} | {producto.packages[0].time[0].finish_date} </p>
                </div>
            </div>



            <div className="container">

                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="swiper_container"
                >
                    {producto.packages.map((product, index) => {
                        return (

                            <SwiperSlide>
                                <div className="card-packages" >
                                    <div className="packages-text">
                                        <h4 className="type">{product.type}</h4>
                                        <div className="hotel">
                                            <h4 >Time, from | until</h4>
                                            <div className="desde-hasta">
                                                <p>{product.time?.start_date}</p>
                                                <p>{product.time?.finish_date}</p>
                                            </div>
                                        </div>
                                        <div className="hotel">
                                            {/* <h4>Hotel, entrance | exit </h4>
                                            <div className="entrada-salida">
                                                <p>{product.hotel[0].check_in} </p>
                                                <p>{product.hotel[0].check_out}</p>
                                            </div> */}
                                        </div>

                                        <p className="stock">Stock: {product.stock}</p>
                                        <div className="precio-btn">
                                            <button onClick={() => handleSubmit(index, producto.cover_photo, producto.title, product.stock, product.price, product.type, producto._id)} className="btn-comprar">
                                                <FontAwesomeIcon icon={faShoppingCart} />
                                            </button>
                                            <p >${product.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        )
                    })}



                    <div className="slider-controler">
                        <div className="swiper-button-prev slider-arrow">
                            <ion-icon name="arrow-back-outline"></ion-icon>
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>

        </div >
    );
}
