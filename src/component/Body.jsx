import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from '../Redux/Action/CategoryAction'
import { getProduct } from '../Redux/Action/ProductAction'
import Categories from './category/Category'
import Loader from "./layout/Loader";
import Message from "./layout/Message";
import FeaturedProduct from './product/FeaturedProduct'
import Metadata from "./layout/Metadata";
function Body() {
    const hola = useDispatch()
    const { categories, loading, error } = useSelector(state => state.cat)
    const { products } = useSelector(state => state.prod)
    // const { categories } = useSelector(state => state.cat)
    // console.log(categories)
    useEffect(() => {
        hola(getCategories())
    }, [hola])
    useEffect(() => {
        hola(getProduct())
    }, [hola])
    return (
        <>
            <Metadata title="HOME | ECOM" />
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-8">
                        <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                            <div className="carousel-indicators carousel-indicators-square">
                                <button className="active btn btn-square" type="button" data-bs-slide-to="0" data-bs-target="#mycarousel" aria-current="true" ></button>
                                <button type="button" data-bs-slide-to="1" data-bs-target="#mycarousel" aria-current="true"  ></button>
                                <button type="button" data-bs-slide-to="2" data-bs-target="#mycarousel" aria-current="true" ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block " src="/images/carousel-1.jpg" alt="c1" />
                                    <div className="carousel-caption ">
                                        <h1  >Men's Fashion</h1>
                                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                        <button className="btn border border-white text-white border-1" type="button">ShopNow</button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block" src="/images/carousel-2.jpg" alt="c2" />
                                    <div className="carousel-caption">
                                        <h1>Women's Fashion</h1>
                                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                        <button className="btn border border-white text-white border-1" type="button">ShopNow</button>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block" src="/images/carousel-3.jpg" alt="c3" />
                                    <div className="carousel-caption">
                                        <h1>Kid's Fashion</h1>
                                        <p>Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                        <button className="btn  border border-white text-white border-1" type="button">ShopNow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 g-md-5 g-lg-0 d-flex flex-column align-items-center ">
                        <div className="card h-100 text-bg-dark">
                            <img src="/images/offer-1.jpg" className="card-img h-100" alt="of1" />
                            <div className="card-img-overlay mt-5 text-center">
                                <h5 className="card-title">Save 20%</h5>
                                <p className="h2 card-text">Special Offer</p>
                                <button className="btn btn-warning card-text">Shop Now</button>
                            </div>
                        </div>
                        <div className="card h-100 text-bg-dark mt-5">
                            <img src="/images/offer-2.jpg" className="card-img h-100" alt="of2" />
                            <div className="card-img-overlay mt-5 text-center">
                                <h5 className="card-title">Save 20%</h5>
                                <p className="h2 card-text">Special Offer</p>
                                <button className="btn btn-warning card-text">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 ">
                        <div className="bg-light d-flex align-items-center"><i className="fa-solid fa-check text-warning h2"></i><p className="h2 d-inline ms-2">Quality Product</p></div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="bg-light d-flex align-items-center"><i className="fa fa-shipping-fast text-warning h2"></i><p className="h2 d-inline ms-2">Free Shipping</p></div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="bg-light"><i className="fas fa-exchange-alt text-warning h2"></i><p className="h2 d-inline ms-2">14-Day Return</p></div>
                    </div>
                    <div className="col-lg-3 col-md-6 ">
                        <div className="bg-light"><i className="fa fa-phone-volume text-warning h2"></i><p className="h2 d-inline ms-2">24/7 Support</p></div>
                    </div>

                </div>
                {/* category start */}
                <div className="row gy-5 my-5">
                    <h2 className="text-uppercase d-inline">Categories</h2>
                    {loading ? <Loader /> : error ? <Message variant={'danger'}>{error}</Message> :
                        categories.map((p) => (
                            <Categories key={p._id} catdata={p} />))}
                </div>
                {/* category end */}

                {/* Featured Product start */}
                <div className="row gy-3">
                    <h2 className="text-uppercase d-inline">Featured Products</h2>
                    {loading ? <Loader /> : error ? <Message variant={"danger"}>{error}</Message> :
                        products.map((p) => (
                            <FeaturedProduct key={p._id} proddata={p} />
                        ))}
                </div>
                {/* Featured Product end*/}

                {/* after featured Products */}
                <div className="row my-4 g-3 g-sm-3">
                    <div className="col-md-6">
                        <div className="card h-100 text-bg-dark">
                            <img src="/images/offer-1.jpg" className="card-img h-100" alt="of1" />
                            <div className="card-img-overlay mt-5 text-center">
                                <h5 className="card-title">Save 20%</h5>
                                <p className="h2 card-text">Special Offer</p>
                                <button className="btn btn-warning card-text">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card h-100 text-bg-dark">
                            <img src="/images/offer-2.jpg" className="card-img h-100" alt="of2" />
                            <div className="card-img-overlay mt-5 text-center">
                                <h5 className="card-title">Save 20%</h5>
                                <p className="h2 card-text">Special Offer</p>
                                <button className="btn btn-warning card-text">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Recent Products */}
                <div className="row gy-3">
                    <h2 className="text-uppercase d-inline">Recent Products</h2>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-1.jpg" alt="p1" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-2.jpg" alt="p2" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star-half-stroke"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-3.jpg" alt="p3" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star-half-stroke"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-4.jpg" alt="p4" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-5.jpg" alt="p5" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
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
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-6.jpg" alt="p6" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star-half-stroke"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-7.jpg" alt="p7" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star-half-stroke"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="card">
                            <img src="images/product-8.jpg" alt="p8" className="card-img" />
                            <div className="card-body">
                                <p className="card-title">Product Name Goes Here</p>
                                <p className="card-text h4 ms-4 me-2 text-center d-inline">$123</p><p className="text-muted d-inline"><del>$123.00</del></p>
                                <div className="d-flex justify-content-center">
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className="text-warning fa-solid fa-star"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <i className=" text-warning fa-regular fa-star"></i>
                                    <small>(99)</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* after recent products */}
                <div className="row my-4">
                    <div className="col-lg-2 col-md-3 ">
                        <div className="bg-light">
                            <img src="/images/vendor-1.jpg" alt="v1" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3">
                        <div className="bg-light ">
                            <img src="/images/vendor-2.jpg" alt="v2" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 ">
                        <div className="bg-light">
                            <img src="/images/vendor-3.jpg" alt="v3" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 d-lg-block d-md-block d-sm-none ">
                        <div className="bg-light">
                            <img src="/images/vendor-4.jpg" alt="v4" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 d-lg-block d-md-none d-none ">
                        <div className="bg-light">
                            <img src="/images/vendor-5.jpg" alt="v5" />
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-3 d-lg-block d-md-none d-none ">
                        <div className="bg-light">
                            <img src="/images/vendor-6.jpg" alt="v6" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Body;