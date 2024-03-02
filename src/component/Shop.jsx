import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from '../Redux/Action/ProductAction'
import Product from './product/Product'

const Shop = () => {
  const hola = useDispatch()
  const { products, loading, error } = useSelector(state => state.prod)
  useEffect(() => {
    hola(getProduct())
  }, [hola])
  return (
    <>
      <div className="container-fluid bg-body-secondary">
        <div className='row border border-4  my-4'>
          BreadCrumb
        </div>
        <div className="row">

          <div className="col-lg-4 ">
            <p className="h4 my-3">Filter By Price</p>
            <div className='row bg-white border py-4 border-4'>
              <div className='col-6'>
                <div className='form-check my-3 ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">All Price</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">$0 - $100</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">$100 - $200</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">$200 - $300</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">$300 - $400</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">$400 - $500</label>
                </div>
              </div>
              <div className='col-3 d-flex flex-column justify-content-evenly'>
                <span className=' border border-1 text-muted px-2'>1000</span>
                <span className='border border-1 text-muted px-2'>150</span>
                <span className='border border-1 text-muted px-2 '>295</span>
                <span className='border border-1 text-muted px-2 '>246</span>
                <span className='border border-1 text-muted px-2 '>145</span>
                <span className='border border-1 text-muted px-2 '>168</span>
              </div>
            </div>
            <p className="h4 my-3">Filter By Color</p>
            <div className='row bg-white py-4 border border-4'>
              <div className='col-6'>
                <div className='form-check my-3 ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">All Price</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">Black</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">White</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">Red</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">Blue</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">Yellow</label>
                </div>
              </div>
              <div className='col-3 d-flex flex-column justify-content-evenly'>
                <span className=' border border-1 text-muted px-2'>1000</span>
                <span className='border border-1 text-muted px-2'>150</span>
                <span className='border border-1 text-muted px-2 '>295</span>
                <span className='border border-1 text-muted px-2 '>246</span>
                <span className='border border-1 text-muted px-2 '>145</span>
                <span className='border border-1 text-muted px-2 '>168</span>
              </div>
            </div>
            <p className="h4 my-3">Filter By Size</p>
            <div className='row bg-white py-4 border border-4'>
              <div className='col-6'>
                <div className='form-check my-3 ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">All Price</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">XS</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">S</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">M</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">L</label>
                </div>
                <div className='form-check my-3 bg-white ms-3'>
                  <input type="checkbox" className='form-check-input border border-warning border-1' id='mycheck' />
                  <label className='form-check-label' htmlFor="mycheck">XL</label>
                </div>
              </div>
              <div className='col-3 d-flex flex-column justify-content-evenly'>
                <span className=' border border-1 text-muted px-2'>1000</span>
                <span className='border border-1 text-muted px-2'>150</span>
                <span className='border border-1 text-muted px-2 '>295</span>
                <span className='border border-1 text-muted px-2 '>246</span>
                <span className='border border-1 text-muted px-2 '>145</span>
                <span className='border border-1 text-muted px-2 '>168</span>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className='row'>
              <div className='d-flex justify-content-between'>
                <div className='d-flex '>
                  <button className='btn border border-3 bg-white '><i className="fa fa-th-large"></i></button>
                  <button className=' btn border border-3 bg-white '><i className="fa fa-bars"></i></button>
                </div>
                <div className='d-flex justify-content-end'>
                  <button type='button' className='me-2 btn bg-white dropdown-toggle' data-bs-toggle="dropdown">Sorting</button>
                  <ul className='dropdown-menu'>
                    <li><a href="/#" className='dropdown-item'>Latest</a></li>
                    <li><a href="/#" className='dropdown-item'>Popularity</a></li>
                    <li><a href="/#" className='dropdown-item'>Rating</a></li>
                  </ul>
                  <button type='button' className='btn bg-white dropdown-toggle' data-bs-toggle="dropdown">Showing</button>
                  <ul className='dropdown-menu'>
                    <li><a href="/#" className='dropdown-item'>10</a></li>
                    <li><a href="/#" className='dropdown-item'>20</a></li>
                    <li><a href="/#" className='dropdown-item'>30</a></li>
                  </ul>
                </div>
              </div>
              <div className='row gy-3'>
                {products && products.map((p) => (
                  <Product key={p._id} proddata={p} />
                  // console.log(p.CategoryName)
                ))}
                {/* <div className='col-lg-4'>
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
                <div className='col-lg-4'>
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
                <div className='col-lg-4'>
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
                <div className='col-lg-4'>
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
                <div className='col-lg-4'>
                  <div className="card">
                    <img src="images/product-5.jpg" alt="p4" className="card-img" />
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
                <div className='col-lg-4'>
                  <div className="card">
                    <img src="images/product-6.jpg" alt="p4" className="card-img" />
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
                <div className='col-lg-4'>
                  <div className="card">
                    <img src="images/product-7.jpg" alt="p4" className="card-img" />
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
                <div className='col-lg-4'>
                  <div className="card">
                    <img src="images/product-8.jpg" alt="p4" className="card-img" />
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
                <div className='col-lg-4'>
                  <div className="card">
                    <img src="images/product-1.jpg" alt="p4" className="card-img" />
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
                </div> */}
                <div className=' mt-2 justify-content-center d-flex'>
                  <span className='bg-white p-2 text-muted'>Previous</span>
                  <button type='button' className='border border-1 btn bg-white text-warning'>1</button>
                  <button type='button' className='border border-1 btn bg-white text-warning'>2</button>
                  <button type='button' className='border border-1 btn bg-white text-warning'>3</button>
                  <button type='button' className='border border-1 btn bg-white text-warning'>Next</button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Shop