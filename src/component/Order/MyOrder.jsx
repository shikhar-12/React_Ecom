import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MDBDataTable } from 'mdreact'
import Loading from '../layout/Loader'
import MetaData from '../layout/Metadata'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { myOrders, clearErrors } from '../../Redux/Action/OrderAction'

const MyOrder = () => {
    const alert = useAlert()
    const hola = useDispatch()
    const { loading, error, orders } = useSelector(state => state.myOrders)
    // console.log(orders)
    useEffect(() => {
        hola(myOrders())
        // if (error) {
        //     alert.error(error)
        //     hola(clearErrors())
        // }
    }, [hola, alert])
    return (
        <>
            <h1>My Order</h1>
        </>
    )
}

export default MyOrder