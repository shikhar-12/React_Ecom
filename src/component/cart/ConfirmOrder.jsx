import React from 'react'
import Checkout from './Checkout'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ConfirmOrder = () => {
    const history = useNavigate()
    const { cartItem, shippingInfo } = useSelector(state => state.cart)
    const { user } = useSelector(state => state.user)

    // calculate price
    const itemsPrice = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 25
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2))
    const totalPrice = (itemsPrice + shippingPrice + taxPrice).toFixed(2)

    const proceedtopayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice
        }
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        history('/payment')
    }
    return (
        <>
            <Checkout shipping ConfirmOrder />
            <h1>ConfirmOrder</h1>

            <div class="row d-flex justify-content-between">
                <div class="col-12 col-lg-8 mt-5 order-confirm">
                    <p> USA</p>
                    <h4 class="mb-3">Shipping Info</h4>
                    <p><b>Name:</b> {shippingInfo.phone}</p >
                    <p><b>Phone:</b>{shippingInfo.phone}</p >
                    <p class="mb-1"><b>Address:</b> {shippingInfo.address}</p>
                    <hr />
                    <h4 class="ml-4">Your Cart Items:</h4>
                    <hr />
                    <div class="cart-item my-1">

                        {cartItem.map((i) =>
                            <div class="row">
                                <div class="col-4 col-lg-2">
                                    <img src={i.image} alt="Laptop" height="45" width="65" />
                                </div>
                                <div class="col-5 col-lg-6">
                                    <Link to="#">{i.name}</Link>
                                </div>
                                <div class="col-4 col-lg-4 mt-4 mt-lg-0">
                                    <p>{i.quantity} x {i.price} = <b>{i.quantity * i.price}</b></p>
                                </div>
                            </div>
                        )}


                    </div>
                    <hr />
                </div>
            </div>
            <div class="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal: <span class="order-summary-values">{itemsPrice}</span></p>
                    <p>Shipping: <span class="order-summary-values">{shippingPrice}</span></p>
                    <p> Tax <span class="ordet-summary-values">{taxPrice}</span></p>
                </div>
                <hr />
                <p>Total: <span class="order-summary-value">{totalPrice}</span></p>
                <hr />
                <button onClick={proceedtopayment} id="checkout_btn" class="btn btn-primary btn-block">Proceed to
                    Payment</button>
            </div>
        </>
    )
}

export default ConfirmOrder