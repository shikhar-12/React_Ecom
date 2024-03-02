import { useEffect, useState, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearerror, updateprofile } from '../../Redux/Action/UserAction'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
const UpdateProfile = () => {
    const alert = useAlert()
    const history = useNavigate()
    const { user } = useSelector((state) => state.user)
    const { loading, error, isUpdated } = useSelector((state) => state.upc)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const hola = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(name, email)
        // console.log(image)
        const myForm = new FormData()
        myForm.append('name', name)
        myForm.append('email', email)
        myForm.append('foo', image)
        hola(updateprofile(myForm))
    }
    // if (user) {
    //     setName(user.name)
    //     setName(user.email)
    //     // setImage(user.image.url)
    // }
    // if (error) {
    //     alert.error(error)
    //     hola(clearerror())
    // }
    // if (isUpdated) {
    //     alert.success("Update Success")
    //     history('/profile')
    // }
    const handleName = (e) => {
        setName(e.target.value)

    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleFile = (e) => {
        setImage(e.target.files[0])
    }
    return (
        <>
            <h1 className='text-center text-danger py-4'>Update Profile</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                    <input type="name" className="w-25 form-control" id="name" onChange={handleName} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input onChange={handleEmail} type="email" className="w-25 form-control" id="exampleFormControlInput1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="file" className="form-label">Profile Picture</label>
                    <input onChange={handleFile} type="file" id="file" className="w-25 form-control" placeholder="Upload here..." />
                </div>
                <button type='submit' className="btn btn-danger">Update</button>
            </form>
        </>

    )
}

export default UpdateProfile