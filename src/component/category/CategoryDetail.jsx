import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from "../layout/Loader";
import Message from "../layout/Message";
import { Link, useParams } from 'react-router-dom';
import { getProductBycategory } from '../../Redux/Action/ProductAction';

const CategoryDetail = () => {
    const { cname } = useParams()
    // console.log("haplo" + cname)
    const { categoryproducts, loading, error } = useSelector(state => state.cpr)
    const hola = useDispatch()
    useEffect(() => {
        hola(getProductBycategory(cname))
    }, [hola, cname])

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant={"danger"}>{error}</Message> :
                categoryproducts.map((p) => (
                    <>
                        <div className='container d-inline'>
                            <div className='row d-inline-flex '>
                                <div className='col-12 '>
                                    <div className="card">
                                        <Link to={`/ProductDetail/${p._id}`}>
                                            <img src={p.image[0].url} alt="p1" className="card-img" />
                                        </Link>
                                        <div className="card-body">
                                            <Link className="card-title text-decoration-none" to={`/ProductDetail/${p._id}`}>
                                                <p className="card-title">{p.name}</p>
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
                            </div>
                        </div>


                    </>

                ))}

        </>
    )
}

export default CategoryDetail