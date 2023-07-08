import React from 'react'
import { useRef } from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux";
import alertActions from "../../Store/Alert/actions";
import './FormDestinos.css'
import { useParams } from 'react-router-dom';

const { open } = alertActions;

export default function FormDestinos() {

    let dispatch = useDispatch();
    let dataForm = useRef()
    const title = useRef()
    const cover_photo = useRef()
    const category_id = useRef()
    const { seller_id } = useParams()
    const pages = useRef()
    const pages1 = useRef()
    const pages2 = useRef()

    const description = useRef()
    const continent = useRef()
    const country = useRef()

    const package1Type = useRef();
    const package1Price = useRef();
    const package1Stock = useRef();
    const package1Time = useRef();
    const package1Time2 = useRef();
    const package1Hotel = useRef();
    const package1Hotel2 = useRef();

    const package2Type = useRef();
    const package2Price = useRef();
    const package2Stock = useRef();
    const package2Time = useRef();
    const package2Time2 = useRef();
    const package2Hotel = useRef();
    const package2Hotel2 = useRef();

    const package3Type = useRef();
    const package3Price = useRef();
    const package3Stock = useRef();
    const package3Time = useRef();
    const package3Time2 = useRef();
    const package3Hotel = useRef();
    const package3Hotel2 = useRef();
    const packages = useRef();

    function convertPriceToNumber(price) {
        return Number(price.replace(/[^0-9\.-]+/g, ""));
    }


    async function handleSubmit(e) {
        e.preventDefault()
        let data = {
            "title": title.current.value,
            "description": description.current.value,
            "continent": continent.current.value,
            "country": country.current.value,
            "cover_photo": cover_photo.current.value,
            "pages": [
                pages.current.value, pages1.current.value, pages2.current.value
            ],

            // "seller_id": seller_id.current.value,
            "seller_id": seller_id,
            "category_id": category_id.current.value,
            "packages": packages.current.value,

            "packages": [
                {
                    "type": package1Type.current.value,
                    "price": convertPriceToNumber(package1Price.current.value),
                    "stock": package1Stock.current.value,
                    "time": [
                        {
                            "start_date": package1Time2.current.value,
                            "finish_date": package1Time.current.value,
                        }

                    ],
                    // "hotel": [
                    //     {
                    //         "check_in": package1Hotel.current.value,
                    //         "check_out": package1Hotel2.current.value,
                    //     }

                    // ],
                },
                {
                    "type": package2Type.current.value,
                    "price": convertPriceToNumber(package2Price.current.value),
                    "stock": package2Stock.current.value,
                    "time": [
                        {
                            "start_date": package2Time2.current.value,
                            "finish_date": package2Time.current.value,

                        }

                    ],
                    // "hotel": [
                    //     {
                    //         "check_in": package2Hotel.current.value,
                    //         "check_out": package2Hotel2.current.value,
                    //     }

                    // ],
                },
                {
                    "type": package3Type.current.value,
                    "price": convertPriceToNumber(package3Price.current.value),
                    "stock": package3Stock.current.value,
                    "time": [
                        {
                            "start_date": package3Time2.current.value,
                            "finish_date": package3Time.current.value,

                        }

                    ],
                    // "hotel": [
                    //     {
                    //         "check_in": package3Hotel.current.value,
                    //         "check_out": package3Hotel2.current.value,
                    //     }

                    // ],
                },
            ],

        }
        console.log(data)
        let url = 'http://localhost:8080/destinos'
        let token = localStorage.getItem('token')
        let headers = { 'Authorization': `Bearer ${token}` }
        try {
            await axios.post(url, data, { headers: headers })
            console.log('Destinations creado')
            let dataAlert = {
                icon: "success",
                title: "Destinations Create",
                type: "toast"
            };
            dispatch(open(dataAlert));
            // e.target.reset()
        }
        catch (err) {
            console.log(err)
            let dataAlert = {
                icon: "error",
                title: err,
                type: "toast"
            };
            dispatch(open(dataAlert));
        }


    }
    return (
        <div className='formSeller'>
            <form onSubmit={handleSubmit} className='sellerFormulario'>
                <div className='contain-destin'>
                    <div>
                        <div className='inputs'>
                            <label >title</label>
                            <input type="text" placeholder='title' ref={title} />
                        </div>
                        <div className='inputs'>
                            <label >description</label>
                            <input type="text" placeholder='description' ref={description} />
                        </div>
                        <div className='al-lado'>

                            <div >
                                <label >continent </label>
                                <input type="text" placeholder='continent' ref={continent} />

                            </div>
                            <div >
                                <label >country</label>
                                <input type="text" placeholder='country' ref={country} />
                            </div>
                        </div>
                        <div className='inputs'>
                            <label >cover_photo</label>
                            <input className='photo' type="text" placeholder='photo url' ref={cover_photo} />
                        </div>

                    </div>

                    <div>
                        <div className='inputs'>
                            <label >pages</label>
                            <div className='al-lado'>
                                <input type="text" placeholder='photo url' ref={pages} />
                                <input type="text" placeholder='photo  url' ref={pages1} />
                                <input type="text" placeholder='photo  url' ref={pages2} />
                            </div>
                        </div>
                        <div className='inputs'>
                            <div className='al-lado'>
                                {/* <div>
                                    <label >seller_id</label>
                                    <input type="text" placeholder='seller_id' ref={seller_id} />
                                </div> */}
                                <div>
                                    <label >category_id</label>
                                    <input type="text" placeholder='category_id' ref={category_id} />
                                </div>
                            </div>
                        </div>
                        <div className='inputs'>
                        </div>
                        <div className='inputs'>
                            <label>packages</label>
                            <input type="text" placeholder='package ' ref={packages} />
                        </div>
                    </div>

                </div>

                <div className='packages-contain'>
                    <div className='packages'>

                        <div className='inputs'>

                            <div className='inputs'>
                                <label className='label-center'>Package 1</label>
                                <div className='al-lado'>
                                    <div>
                                        <label>Type</label>
                                        <input type="text" placeholder='type' ref={package1Type} />
                                    </div>
                                    <div>
                                        <label>Price</label>
                                        <input type="number" placeholder='price' ref={package1Price} />
                                    </div>
                                    <div>
                                        <label>Stock</label>
                                        <input type="number" placeholder='stock' ref={package1Stock} />
                                    </div>
                                </div>
                                <div className='al-lado'>
                                    <label className='label-center'>Time</label>
                                    <input type="date" ref={package1Time} />
                                    <input type="date" ref={package1Time2} />
                                </div>
                                {/* <div className='al-lado'>
                                    <label className='label-center'>Hotel</label>
                                    <input type="date" ref={package1Hotel} />
                                    <input type="date" ref={package1Hotel2} />

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='packages'>
                        <div className='inputs'>
                            <label className='label-center'>Package 2</label>
                            <div className='al-lado'>
                                <div>
                                    <label>Type</label>
                                    <input type="text" placeholder='type' ref={package2Type} />
                                </div>
                                <div>
                                    <label>Price</label>
                                    <input type="number" placeholder='price' ref={package2Price} />
                                </div>
                                <div>
                                    <label>Stock</label>
                                    <input type="number" placeholder='stock' ref={package2Stock} />
                                </div>
                            </div>
                            <div className='al-lado'>
                                <label className='label-center'>Time</label>
                                <input type="date" ref={package2Time} />
                                <input type="date" ref={package2Time2} />
                            </div>
                            {/* <div className='al-lado'>
                                <label className='label-center'>Hotel</label>
                                <input type="date" ref={package2Hotel} />
                                <input type="date" ref={package2Hotel2} />

                            </div> */}
                        </div>
                    </div>
                    <div className='packages'>
                        <div className='inputs'>
                            <label className='label-center'>Package 3</label>
                            <div className='al-lado'>
                                <div>
                                    <label>Type</label>
                                    <input type="text" placeholder='type' ref={package3Type} />
                                </div>
                                <div>
                                    <label>Price</label>
                                    <input type="number" placeholder='price' ref={package3Price} />
                                </div>
                                <div>
                                    <label>Stock</label>
                                    <input type="number" placeholder='stock' ref={package3Stock} />
                                </div>
                            </div>
                            <div className='al-lado'>
                                <label className='label-center'>Time</label>
                                <input type="date" ref={package3Time} />
                                <input type="date" ref={package3Time2} />
                            </div>
                            {/* <div className='al-lado'>
                                <label className='label-center'>Hotel</label>
                                <input type="date" ref={package3Hotel} />
                                <input type="date" ref={package3Hotel2} />

                            </div> */}
                        </div>
                    </div>

                </div>
                <button>Send</button>
            </form>
        </div>
    )
}
