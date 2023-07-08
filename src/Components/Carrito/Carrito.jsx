import React, { useState, useEffect } from "react";
import './Carrito.css'
import alertActions from "../../Store/Alert/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
const { open } = alertActions;

export default function Carrito() {
  let token = localStorage.getItem("token");
  let headers = { headers: { Authorization: ` Bearer ${token}` } };
  let dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [reload, setReload] = useState(false)

  const updateCartItems = () => {
    const cartData = JSON.parse(localStorage.getItem("carrito"));
    setCartItems(cartData || []);
  }
  useEffect(() => {
    updateCartItems();
  }, []);


  const handleDelete = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("carrito", JSON.stringify(updatedCartItems));
    let dataAlert = {
      icon: "success",
      title: "Removed product",
      type: "toast"
    };
    dispatch(open(dataAlert));
  };

  const handleClear = () => {
    setCartItems([]);
    localStorage.removeItem("carrito");
    let dataAlert = {
      icon: "success",
      title: "Removed All products",
      type: "toast"
    };
    dispatch(open(dataAlert));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const handleBuy = () => {
    // Hacer la petición HTTP al servidor para realizar la compra
    axios
      .post("http://localhost:8080/buy", cartItems, headers)
      .then(res => window.location.href = res.data.response.body.init_point);
    localStorage.removeItem("carrito");
  };

  return (
    <div className="content-carrito">
      {cartItems.length > 0 ? (
        <div>
          <div className="sub-content-carrito">
            {cartItems.map((item, index) => {
              return (
                <div className="card-productos" key={index}>
                  <img src={item.cover_photo} alt="" />
                  <div className="card-text-productos">
                    <div
                      className="eliminar"
                      onClick={() => handleDelete(index)}
                    >
                      x
                    </div>

                    <div className="price-title">

                      <h2>{item.title}</h2>


                      <div className="plane-cantidad">

                        <p className="plane">{item.type}</p>
                        <p className="card-price">{item.quantity}</p>
                      </div>
                      <p className="carrito-price">${item.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="total-price">Total: ${totalPrice}</p>
          <div className="vaciar-comprar">
            <button className="vaciar" onClick={handleClear}>
              Remove
            </button>
            <button className="comprar" onClick={handleBuy}>Buy</button>
          </div>

        </div>
      ) : (
        <p className="no-hay-productos">There are no products </p>
      )}
    </div>
  );
}
