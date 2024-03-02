import React from 'react'

const Product = ({ proddata }) => {
  return (
    <>
      <div className='col-lg-4'>
        <div className="card">
          <img src={proddata.image[0].url} alt="p1" className="card-img" />
          <div className="card-body">
            <p className="card-title">{proddata.name}</p>
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

export default Product