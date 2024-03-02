import React from "react";
import { Link } from "react-router-dom";

const category = ({ catdata }) => {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card bg-light border border-0">
          <div className="row">
            <div className="col-4">
              <Link to={`/CategoryDetail/${catdata.CategoryName}`}>
                <img src={catdata.image.url} className="h-100 w-100" alt="cat1" />
              </Link>

            </div>
            <div className="col-8">
              <div className="card-body">
                <h5 className="card-title">{catdata.CategoryName}</h5>
                <p className="card-text">100 Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default category;
