import React from 'react'

const ShopDetail = () => {
    return (
        <>
            <div className='conatiner'>
                <div className='row my-4'>
                    <div className='col-lg-4'>
                        <div className='carousel slide' data-bs-ride="carousel" id='mycaro1'>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img className='w-100 h-75' src="/images/product-1.jpg" alt="p" />
                                </div>
                                <div className='carousel-item active'>
                                    <img className='w-100 h-75' src="/images/product-2.jpg" alt="p" />
                                </div>
                                <div className='carousel-item active'>
                                    <img className='w-100 h-75' src="/images/product-3.jpg" alt="p" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#mycaro1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#mycaro1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <p className='h3'>Product Name Goes Here</p>
                        <div className="d-flex justify-content-start">
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star"></i>
                            <i className="text-warning fa-solid fa-star-half-stroke"></i>
                            <small>(99)</small>
                        </div>
                        <p className='h4'>$120.00</p>
                        <p className='text-muted'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
                        <div>
                            <span className='me-3'>Sizes:</span>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='r1' />
                                <label htmlFor="r1" className='form-check-label'>XS</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='r1' />
                                <label htmlFor="r1" className='form-check-label'>S</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='r1' />
                                <label htmlFor="r1" className='form-check-label'>M</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='r1' />
                                <label htmlFor="r1" className='form-check-label'>L</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='r1' />
                                <label htmlFor="r1" className='form-check-label'>XL</label>
                            </div>
                        </div>
                        <div>
                            <span className='me-3'>Colors:</span>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='cr1' />
                                <label htmlFor="cr1" className='form-check-label'>Blue</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='cr2' />
                                <label htmlFor="cr2" className='form-check-label'>White</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='cr3' />
                                <label htmlFor="cr3" className='form-check-label'>Purple</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='cr4' />
                                <label htmlFor="cr4" className='form-check-label'>Red</label>
                            </div>
                            <div className='form-check form-check-inline'>
                                <input type="radio" className='form-check-input' id='cr5' />
                                <label htmlFor="cr5" className='form-check-label'>Green</label>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className="input-group mt-3 w-25 border border-4">
                                <span className="input-group-text  ">
                                    <a className="text-warning" href="/#"><i className="fa-solid fa-minus"></i></a>
                                </span>
                                <input type="text" className="form-control border border-warning" placeholder="" />
                                <span className="input-group-text">
                                    <a className="text-warning" href="/#"><i className="fa-solid fa-plus"></i></a>
                                </span>
                            </div>
                            <button className='btn bg-warning h-50 mt-3 ms-4'><i className="me-1 fa-solid fa-cart-shopping"></i>Add To cart</button>
                        </div>
                        <div className='d-flex mt-2'>
                            <p className='text-dark h6  me-3'>Share On:</p>
                            <a className='text-dark me-2' href="/#"><i className="fa-brands fa-facebook-f"></i></a>
                            <a className='text-dark me-2' href="/#"><i className="fa-brands fa-twitter"></i></a>
                            <a className='text-dark me-2' href="/#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a className='text-dark me-2' href="/#"><i className="fa-brands fa-pinterest-p"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab">Description</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab">Information</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab">Reviews 0</button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel">
                    <p className='h3'>Product Description</p>
                    <p>
                        os no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.

                        Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel">
                    <p className='h3'>Product Description</p>
                    <p>
                        os no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.

                        Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel">
                    <p className='h3'>Product Description</p>
                    <p>
                        os no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.

                        Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.
                    </p>
                </div>
            </div>
            <div className='carousel slide' data-bs-ride='carousel' id='mycaro'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <div className='cards-wrapper mx-3 d-flex'>
                            <div className="card mx-3">
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
                            <div className="card mx-3">
                                <img src="images/product-2.jpg" alt="p1" className="card-img" />
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
                            <div className="card mx-3">
                                <img src="images/product-3.jpg" alt="p1" className="card-img" />
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
                            <div className="card mx-3">
                                <img src="images/product-4.jpg" alt="p1" className="card-img" />
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
                    </div>
                    <div className='carousel-item'>
                        <div className='cards-wrapper  d-flex'>
                            <div className="card mx-3">
                                <img src="images/product-5.jpg" alt="p1" className="card-img" />
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
                            <div className="card mx-3">
                                <img src="images/product-6.jpg" alt="p1" className="card-img" />
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
                            <div className="card mx-3">
                                <img src="images/product-7.jpg" alt="p1" className="card-img" />
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
                            <div className="card mx-3">
                                <img src="images/product-8.jpg" alt="p1" className="card-img" />
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
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#mycaro" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#mycaro" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default ShopDetail