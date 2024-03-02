import React, { useEffect, useState } from 'react'
import * as UserConst from "../../Redux/Constants/UserConstant";
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../Redux/Action/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const { isAuthenticated, error } = useSelector((state) => state.user)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [image, setImage] = useState("")

    const hola = useDispatch()
    const history = useNavigate()
    const alert = useAlert()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, email, password, cpassword)
        // console.log(image)
        const myForm = new FormData()
        myForm.append('name', name)
        myForm.append('email', email)
        myForm.append('password', password)
        myForm.append('cpassword', cpassword)
        myForm.append('foo', image)
        hola(register(myForm))
    }
    useEffect(() => {
        if (error) {
            alert.error(error)
            hola(UserConst.CLEAR_ERRORS)
        }
        if (isAuthenticated) {
            history('/login')
        }
    }, [hola, history, alert, error, isAuthenticated])

    const handleName = (e) => {
        setName(e.target.value)

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePass = (e) => {
        setPassword(e.target.value)
    }
    const handleCpass = (e) => {
        setCpassword(e.target.value)
    }
    const handleFile = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <>
            <p className='h1'>Signup</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                    <input type="name" className="w-25 form-control" id="name" onChange={handleName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="w-25 form-control" id="exampleFormControlInput1" onChange={handleEmail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Password" className="form-label">Password</label>
                    <input type="password " id="inputPassword5" className="w-25 form-control" placeholder="Password" onChange={handlePass} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cPassword" className="form-label">Cofirm Password</label>
                    <input type="password" id="cPassword" className="w-25 form-control" placeholder="Confirm Password" onChange={handleCpass} />
                </div>
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Profile Picture</label>
                    <input type="file" id="file" className="w-25 form-control" placeholder="Upload here..." onChange={handleFile} />
                </div>
                <button type='submit' className="btn btn-danger">Signup</button>
            </form>
        </>
    )
}

export default Signup