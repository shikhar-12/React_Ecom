import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './ShoppingCart.css'
import { addItemsToCart, removeItemsFromCart } from '../../Redux/Action/CartAction'
import { Link, useNavigate, useParams } from "react-router-dom";
const ShoppingCart = () => {
    const { id } = useParams()
    console.log("id hai" + id)
    const hola = useDispatch();
    const [quantity, setQuantity] = useState(0)
    const { cartItem } = useSelector(state => state.cart)
    const history = useNavigate()
    const decreaseQty = (id, quantity, stock) => {
        const newQty = quantity - 1
        if (quantity <= 1) {
            return
        }
        hola(addItemsToCart(id, newQty))
    }
    const increaseQty = (id, quantity, stock) => {
        const newQty = quantity + 1
        // if (quantity => stock) {
        //     return
        // }
        hola(addItemsToCart(id, newQty))
    }

    const checkoutHandler = () => {
        history('/shipping')
    }

    const handleRemove = () => {
        hola(removeItemsFromCart(id))
    }
    return (
        <>
            <div className='container'>
                <div className='row my-4'>
                    <div className='col-lg-8'>
                        <div className='row bg-dark my-3 py-2 '>
                            <div className='col-lg-4 col-4'>
                                <span className='text-white   border-primary '>Products</span>
                            </div>
                            <div className='col-lg-2 col-2 col-2  '>
                                <span className='text-white '>Price</span>
                            </div>
                            <div className='col-lg-2 col-2 col-2 '>
                                <p className='text-white d-inline'>Quantity</p>
                            </div>
                            <div className='col-lg-2 col-2 col-2 '>
                                <p className='text-white d-inline'>Total</p>
                            </div>
                            <div className='col-lg-2 col-2 col-2 '>
                                <p className='text-white d-inline'>Remove</p>
                            </div>
                        </div>
                        {cartItem.map((i) =>
                            <div className='row bg-white my-3'>
                                <div className='col-lg-4 col-4 d-flex '>
                                    <div className='d-flex'>
                                        <img src={i.image} alt="pro" className='img-thumb ' />
                                        <p className='mt-3 '>{i.name}</p>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-2 col-2 '>
                                    <p className='mt-3'>{i.price}</p>
                                </div>
                                <div className='col-lg-2 col-2 col-2'>
                                    <div className="input-group mt-2 inp-gr">

                                        <button onClick={() => decreaseQty(i.product, i.quantity, i.stock)} className="btn text-warning" ><i className="fa-solid fa-minus"></i></button>
                                        <input name='quantity' type='text' className=' form-control form-control-sm' defaultValue={i.quantity} ></input>
                                        <button onClick={() => increaseQty(i.product, i.quantity, i.stock)} className=" btn text-warning" ><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                                <div className='col-lg-2 col-2 col-2'>
                                    <p className='mt-3'>{quantity === 0 ? i.quantity * i.price : i.price * quantity}</p>
                                </div>
                                <div className='col-lg-2 col-2 col-2'>
                                    <button onClick={handleRemove} className='btn btn-danger mt-2'><i className=" fa-solid fa-xmark"></i></button>
                                </div>
                            </div>
                        )}

                        {/* <div className='row bg-white my-3'>
                            <div className='col-lg-4 col-4 d-flex '>
                                <div className='d-flex'>
                                    <img src="/images/product-2.jpg" alt="pro" className='img-thumb ' />
                                    <p className='  mt-3 '>Product Name</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2 '>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <div className="input-group mt-2 inp-gr">
                                    <span className="input-group-text  ">
                                        <a onClick={handleMinClick} className="text-warning" ><i className="fa-solid fa-minus"></i></a>
                                    </span>
                                    <div className='form-control text-center'>{quantity}</div>
                                    <span className="input-group-text">
                                        <a onClick={handleAddClick} className=" text-warning" ><i className="fa-solid fa-plus"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <a href="/#" className='btn btn-danger mt-2'><i className=" fa-solid fa-xmark"></i></a>
                            </div>
                        </div>
                        <div className='row bg-white my-3'>
                            <div className='col-lg-4 col-4 d-flex '>
                                <div className='d-flex'>
                                    <img src="/images/product-3.jpg" alt="pro" className='img-thumb ' />
                                    <p className='  mt-3 '>Product Name</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2 '>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <div className="input-group mt-2 inp-gr">
                                    <span className="input-group-text  ">
                                        <a onClick={handleMinClick} className="text-warning" ><i className="fa-solid fa-minus"></i></a>
                                    </span>
                                    <div className='form-control text-center'>{quantity}</div>
                                    <span className="input-group-text">
                                        <a onClick={handleAddClick} className=" text-warning" ><i className="fa-solid fa-plus"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <a href="/#" className='btn btn-danger mt-2'><i className=" fa-solid fa-xmark"></i></a>
                            </div>
                        </div>
                        <div className='row bg-white my-3'>
                            <div className='col-lg-4 col-4 d-flex '>
                                <div className='d-flex'>
                                    <img src="/images/product-4.jpg" alt="pro" className='img-thumb ' />
                                    <p className='  mt-3 '>Product Name</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2 '>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <div className="input-group mt-2 inp-gr">
                                    <span className="input-group-text  ">
                                        <a onClick={handleMinClick} className="text-warning" ><i className="fa-solid fa-minus"></i></a>
                                    </span>
                                    <div className='form-control text-center'>{quantity}</div>
                                    <span className="input-group-text">
                                        <a onClick={handleAddClick} className=" text-warning" ><i className="fa-solid fa-plus"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <a href="/#" className='btn btn-danger mt-2'><i className=" fa-solid fa-xmark"></i></a>
                            </div>
                        </div>
                        <div className='row bg-white my-3'>
                            <div className='col-lg-4 col-4 d-flex '>
                                <div className='d-flex'>
                                    <img src="/images/product-5.jpg" alt="pro" className='img-thumb ' />
                                    <p className='  mt-3 '>Product Name</p>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2 '>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <div className="input-group mt-2 inp-gr">
                                    <span className="input-group-text  ">
                                        <a onClick={handleMinClick} className="text-warning" ><i className="fa-solid fa-minus"></i></a>
                                    </span>
                                    <div className='form-control text-center'>{quantity}</div>
                                    <span className="input-group-text">
                                        <a onClick={handleAddClick} className=" text-warning" ><i className="fa-solid fa-plus"></i></a>
                                    </span>
                                </div>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <p className='mt-3'>$150</p>
                            </div>
                            <div className='col-lg-2 col-2'>
                                <a href="/#" className='btn btn-danger mt-2'><i className=" fa-solid fa-xmark"></i></a>
                            </div>
                        </div> */}
                    </div>
                    <div className='col-lg-4 col-4'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control border border-warning" placeholder='Coupon Code' />
                                    <span className="input-group-text bg-warning">
                                        <button className="btn btn-warning" href="/#">Apply Coupon</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className='h3 text-muted my-2'>Cart Summary</p>
                        <div className='row'>
                            <div className='d-flex px-4 my-3 justify-content-between'>
                                <p className='h5'>Subtotal</p>
                                <p className='h5'>{cartItem.reduce((acc, i) => acc + i.quantity * i.price, 0)}</p>
                            </div>
                            <div className='d-flex px-4 justify-content-between'>
                                <p className='h5'>Shipping</p>
                                <p className='h5 me-2'>Rs 100</p>
                            </div>
                            <hr />
                            <div className='d-flex px-4 justify-content-between'>
                                <p className='h4'>Total</p>
                                <p className='h4'>{cartItem.reduce((acc, i) => acc + i.quantity * i.price + 100, 0)}</p>
                            </div>
                            <button onClick={checkoutHandler} className='btn btn-warning w-75 py-3 mt-3 ms-5'>Proceed To Checkout</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ShoppingCart