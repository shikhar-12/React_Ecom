import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, clearerror, loaduser } from '../../Redux/Action/UserAction';
import * as UserConst from "../../Redux/Constants/UserConstant";
import { useAlert } from 'react-alert';
const Login = () => {
    const { isAuthenticated, error } = useSelector((state) => state.user)
    const hola = useDispatch()
    const history = useNavigate()
    const alert = useAlert()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(email, password)
        hola(login(email, password))
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            hola(clearerror())
        }
        if (isAuthenticated) {

            history('/')
        }
    }, [error, alert, hola, history, isAuthenticated])

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    return (
        <>
            <p className='h1'>Login</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange={handleEmail} type="email" className="w-25 form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                    <input onChange={handlePass} type="password" id="inputPassword5" className="w-25 form-control" />
                </div>
                <button type='submit' className="btn btn-success">Login</button>
                <p>Not Have an Account<Link to="/signup">Signup</Link></p>
            </form>
        </>
    )
}

export default Login