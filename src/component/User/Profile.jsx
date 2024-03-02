import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Profile = () => {
    const { user, loading } = useSelector((state) => state.user)
    return (
        <>
            <h1 className='text-center text-danger py-4'>Your Profile</h1>
            <div className='row'>
                <div className='col-3'>
                    <p className='text-center h3'>Name</p>
                </div>
                <div className='col-3'>
                    <p className='text-center h3'>Email</p>
                </div>
                <div className='col-3'>
                    <p className='text-center h3'>Image</p>
                </div>
                <div className='col-3'>
                    <p className='text-center h3'>Action</p>
                </div>
                <div className='col-3'>
                    <p className='text-center h4 text-info'>{user.name}</p>
                </div>
                <div className='col-3'>
                    <p className='text-center h4 text-info'>{user.email}</p>
                </div>
                <div className='col-3'>
                    < img className=' text-center w-25 h-25 ' src={user.image.url} />
                </div>
                <div className='col-3'>
                    <Link to='/updateprofile' className='btn btn-danger me-2'>Update Profile</Link>
                    <Link to='/updatepass' className='btn btn-danger'>Update Password</Link>
                </div>
            </div>
        </>
    )
}

export default Profile