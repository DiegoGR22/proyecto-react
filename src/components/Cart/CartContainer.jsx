/* eslint-disable react/prop-types */
// import React from 'react'
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartList from "./CartList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const CartContainer = () => {

    const { cart, clearAll, totalPrice } = useContext(CartContext);

    return (
        <>
            <section className="w-100 px-3 py-5" style={{ backgroundColor: '#eee', borderRadius: '.5rem .5rem 0 0' }}>
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-11">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
                            <div>
                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></a></p>
                            </div>
                        </div>

                        {
                            cart.map((item) => (
                                <div key={item.id}>
                                    <CartList item={item} />
                                </div>
                            ))
                        }

                        <div className="card mb-4">
                            <div className="card-body p-4 d-flex flex-row">
                                <div className="form-outline flex-fill">
                                    <input type="text" id="form1" className="form-control form-control-lg" />
                                    <label className="form-label">Discound code</label>
                                    {/* <label htmlFor="text">Discound code</label> */}
                                </div>
                                <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body p-4">
                                <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {
                cart.length > 0 ?
                    <>
                        <strong>Precio Total: ${totalPrice}</strong>
                        <div>
                            <Button onClick={clearAll}>vaciar carro</Button>
                            {/* <Checkout /> */}
                            <Button>
                                <Link to="/">Seguir Comprando</Link>
                            </Button>
                            <Button>
                                <Link to="/cart/checkout">Finaliza tu compra</Link>
                            </Button>
                        </div>
                    </>
                    : <>
                        <b>Carrito vacio</b>
                        <Button>
                            <Link to={"/"}>Volver al Inicio</Link>
                        </Button>
                    </>
            }
        </>
    )
}

export default CartContainer
