import React from 'react'

const Checkout = () => {
    return (
        <>
            <div className='container'>
                <div className='row '>
                    <div className='col-8 bg-white my-4 '>
                        <form>
                            <div className='row '>
                                <div className='col-6 '>
                                    <label htmlFor="firstname" className="form-label">First Name</label>
                                    <input type="text" className=" form-control" id="firstname" placeholder="First Name" />
                                </div>
                                <div className='col-6 '>
                                    <label htmlFor="firstname" className="form-label">Last Name</label>
                                    <input type="text" className=" form-control" id="firstname" placeholder="Last Name" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 '>
                                    <label htmlFor="Email" className="form-label">Email</label>
                                    <input type="text" className=" form-control" id="Email" placeholder="Email" />
                                </div>
                                <div className='col-6 '>
                                    <label htmlFor="fMobile" className="form-label">Mobile No.</label>
                                    <input type="text" className=" form-control" id="Mobile" placeholder="Mobile No." />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 '>
                                    <label htmlFor="Address" className="form-label">Address Line 1</label>
                                    <input type="text" className=" form-control" id="Address" placeholder="Address Line 1" />
                                </div>
                                <div className='col-6 '>
                                    <label htmlFor="Address" className="form-label">Address Line 2</label>
                                    <input type="text" className=" form-control" id="Address" placeholder="Address Line 2" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 '>
                                    <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                                    <select className="form-select" id="inputGroupSelect01">
                                        <option selected>Country</option>
                                        <option value="1">United States</option>
                                        <option value="2">China</option>
                                        <option value="3">India</option>
                                    </select>
                                </div>
                                <div className='col-6 '>
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className=" form-control" id="city" placeholder="New York" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6 '>
                                    <label htmlFor="state" className="form-label">State</label>
                                    <input type="text" className=" form-control" id="state" placeholder="New York" />
                                </div>
                                <div className='col-6 '>
                                    <label htmlFor="zip" className="form-label">Zip Code</label>
                                    <input type="text" className=" form-control" id="zip" placeholder="Address Line 2" />
                                </div>
                            </div>
                            <div className='row'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Default checkbox
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Checked checkbox
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='col-4'>
                        <div className='row'>
                            <p className='h4'>Products</p>
                            <div className='col-6'>
                                <p className=''>Product Name 1</p>
                                <p className=''>Product Name 2</p>
                                <p className='mb-3'>Product Name 3</p>
                                <p className='h5'>Subtotal</p>
                                <p className='h5 mb-4'>Shipping</p>
                                <p className='h3 mb-4'>Total</p>
                            </div>
                            <div className='col-6'>
                                <p className=''>$150</p>
                                <p className=''>$150</p>
                                <p className='mb-3'>$150</p>
                                <p className='h5'>$150</p>
                                <p className='h5 mb-4'>$10</p>
                                <p className='h3 mb-4'>$160</p>
                            </div>
                        </div>
                        <div className='row'>
                            <p className='h4'>PAYMENT</p>
                            <div className="form-check">
                                <input className="form-check-input text-warning" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                <label className="form-check-label h5" htmlFor="exampleRadios1">
                                    Paypal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input text-warning" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                <label className="form-check-label h5" htmlFor="exampleRadios2">
                                    Direct Check
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input text-warning" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                <label className="form-check-label h5 " htmlFor="exampleRadios3">
                                    Bank Transfer
                                </label>
                            </div>
                            <button className='btn btn-warning w-75 ms-5'>Place Order</button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}

export default Checkout