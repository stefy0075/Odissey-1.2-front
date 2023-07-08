import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link as Anchor } from 'react-router-dom';
import Logo from '../../img/logo2.png';
import Logo2 from '../../img/logoverde.png';
import Register from '../Register/Register';
import LogIn from '../LogIn/LogIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import UserInfo from '../InfoUser/InfoUser';
import axios from 'axios';
import Carrito from '../Carrito/Carrito';
import { useDispatch, useSelector } from 'react-redux';
import actionUser from '../../Store/GetUser/Actions';

const { oneUser } = actionUser;

export default function Navbar() {
    const dispatch = useDispatch();

    let [scrolled, setScrolled] = useState(false);
    let [modal, setModal] = useState(false);
    let [modalCart, setModalCart] = useState(false);
    let [modalUser, setModalUser] = useState(false);
    let [isOpen, setIsOpen] = useState(false);
    let [modalUserOption, setModalUserOption] = useState('login');
    const [userData, setUserData] = useState(null);

    const updateUserData = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            setUserData(user);
        }
    };

    useEffect(() => {
        updateUserData();
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.user) {
            dispatch(oneUser({ user_id: user.user }));
        }
    }, [dispatch]);

    const idUser = useSelector((store) => store.getUser.user[0]);



    // const user2 = useSelector(state => state.getUser.user);
    // console.log(user2)

    const handleModal = () => {
        setModal(!modal);
    }; //Funcion renderiza Modal 'favoritos'

    const handleModalCart = () => {
        setModalCart(!modalCart);

    }; //Funcion renderiza Modal 'Carrito'

    const handleModalUser = () => {
        setModalUser(!modalUser);
    }; //Funcion renderiza Modal 'user'

    const handleModalUserOption = () => {
        setModalUserOption(modalUserOption === 'register' ? 'login' : 'register');
    }; //Funcion renderiza el modal 'register' o 'login'


    // Cambio de estado en el Navbar cuando se scrollea 
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Cambio de color en navbar al hacer scroll
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };
    // --------------------------------------------- //
    const [seller, setIsSeller] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8080/seller/:id')
            .then(response => {
                setIsSeller(response.data)
                console.log(setIsSeller)
            })
    }, []);


    return (

        <header>



            <nav className={scrolled ? "navbar scrolled " : "navbar"}>
                <div className='logos'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='logo2'>
                        <img src={Logo2} alt="logo" />
                    </div>
                    <h1>Odyssey</h1>
                </div>

                <div className={`nav_items  ${isOpen && "open"}`} >
                    <div className="cerrar-nav" onClick={() => setIsOpen(!isOpen)}>
                        x
                    </div>
                    <div className='logo-nav'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='logo2-nav'>
                        <img src={Logo2} alt="logo" />
                    </div>

                    <div className='iconos2'>

                        <FontAwesomeIcon icon={faShoppingCart} onClick={handleModalCart} />
                        <FontAwesomeIcon icon={faUser} onClick={handleModalUser} />
                    </div>

                    <div>

                        {userData ? (
                            idUser?.is_admin ? (
                                <div className='enlaces'>
                                    <Anchor to={`/`} >Home</Anchor>
                                    <Anchor to={`/destinos`} >Destinations</Anchor>
                                    <Anchor to={`/faqs`} >FAQ's</Anchor>
                                    <Anchor to={`/blog`} >Blog</Anchor>
                                    <Anchor to={`/new/destinos`} >Admin</Anchor>
                                </div>
                            ) : (
                                <div className='enlaces'>
                                    <Anchor to={`/`} >Home</Anchor>
                                    <Anchor to={`/destinos`} >Destinations</Anchor>
                                    <Anchor to={`/faqs`} >FAQ's</Anchor>
                                    <Anchor to={`/blog`} >Blog</Anchor>
                                </div>
                            )) : (
                            <div className='enlaces'>
                                <Anchor to={`/`} >Home</Anchor>
                                <Anchor to={`/faqs`} >FAQ's</Anchor>
                                <Anchor to={`/blog`} >Blog</Anchor>
                            </div>
                        )}


                        <div className="redes-sociales">
                            <Anchor to={`/`}><i className='fa fa-facebook'></i></Anchor>
                            <Anchor to={`/`}><i className='fa fa-instagram'></i></Anchor>
                            <Anchor to={`/`}> <i className='fa fa-linkedin'></i></Anchor>
                            <Anchor to={`/`}> <i className='fa fa-whatsapp'></i></Anchor>
                        </div>
                    </div>

                </div>


                <div className='icons-nav'>
                    {/* <FontAwesomeIcon icon={faHeart} onClick={handleModal} /> */}
                    <FontAwesomeIcon icon={faShoppingCart} onClick={handleModalCart} />
                    <FontAwesomeIcon icon={faUser} onClick={handleModalUser} />
                </div>

                <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* {modal && (
                    <div className="modal_content ">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModal}>x</div>
                            <h3>Favourite</h3>
                            <Favorito />
                        </div>
                    </div>
                )} */}
                {modalCart && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalCart}>x</div>
                            <h3>Your Cart</h3>

                            <Carrito />
                        </div>
                    </div>
                )}

                {modalUser && (
                    <div className="modal_content">
                        <div className="modal-nav">
                            <div className="cerrar-modal" onClick={handleModalUser}>x</div>
                            <h3>Your Profile</h3>
                            <UserInfo />
                            {modalUserOption === 'register' ? <Register /> : <LogIn />}
                            <p className='loginText'>Already have an account? <Anchor id='login' onClick={handleModalUserOption}>{modalUserOption === 'register' ? 'Log In' : 'Register'}</Anchor></p>
                        </div>
                    </div>
                )}

            </nav>

        </header >

    )
}
