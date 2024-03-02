import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { saveShippingInfo } from '../../Redux/Action/CartAction'
import Checkout from './Checkout'

const Shipping = () => {
    const hola = useDispatch()
    const history = useNavigate()
    const { shippingInfo } = useSelector(state => state.cart)
    // console.log(shippingInfo)
    const [address, setAddress] = useState(shippingInfo.address)
    const [city, setCity] = useState(shippingInfo.city)
    const [phone, setPhone] = useState(shippingInfo.phone)
    const [postalcode, setPostalcode] = useState(shippingInfo.postalcode)
    const [country, setCountry] = useState(shippingInfo.country)

    const submitHandler = (e) => {
        e.preventDefault()
        hola(saveShippingInfo({
            address, city, phone, postalcode, country
        }))
        history('/order/confirm')
    }
    return (
        <>
            <Checkout shipping />
            <div className='row wrapper'>
                <div className='col-10 col-lg-5'>
                    <form className='shadow-lg' onSubmit={submitHandler}>
                        <h1 className='mb-4'>Shipping Info</h1>
                        <div className='form-group'>
                            <label htmlFor="address_field">Address</label>
                            <input type="text" id='address_field' className='form-control' value={address} onChange={(e) => setAddress(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="city_field">City</label>
                            <input type="text" id='city_field' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="phone_field">Phone</label>
                            <input type="phone" id='phone_field' className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="postalcode_field">Postal Code</label>
                            <input type="number" id='postalcode_field' className='form-control' value={postalcode} onChange={(e) => setPostalcode(e.target.value)} required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="country_field">Postal Code</label>
                            <select onChange={(e) => setCountry(e.target.value)} value={country} className='form-control' name="" id="country_field">
                                <option value="">Select Country</option>
                                <option value="IN">India</option>
                            </select>
                        </div>
                        <button className='btn btn-block py-3' type='submit' id='shipping_info' >Continue</button>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Shipping