import React from 'react'
import { Link } from "react-router-dom";

const FeaturedProduct = ({ proddata }) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="card">
                    <Link to={`ProductDetail/${proddata._id}`}>
                        <img src={proddata.image[0].url} alt="p1" className="card-img" />
                    </Link>
                    <div className="card-body">
                        <Link className="card-title text-decoration-none" to={`ProductDetail/${proddata._id}`}>
                            <p className="card-title">{proddata.name}</p>
                        </Link>
                        <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                        <div className="d-flex justify-content-center">
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <small>(99)</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct