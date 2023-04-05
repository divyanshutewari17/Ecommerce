import React, { Component, lazy } from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShoppingCart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions/cart";

const ProductDetail = () => {
    const {product} = useLocation().state
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(addItem([product]))
    }
    return(
        <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="row mb-3">
              <div className="col-md-5 text-center">
                <img
                  src={product.img}
                  className="img-fluid mb-3"
                  alt=""
                />
              </div>
              <div className="col-md-7">
                <h1 className="h5 d-inline me-2">
                  {product.name}
                </h1>
                <div className="mb-3">
                  { product.star >= 1? <IconStarFill className="text-warning me-1" />:<IconStarFill className="text-secondary me-1" /> }
                  { product.star >= 2? <IconStarFill className="text-warning me-1" />:<IconStarFill className="text-secondary me-1" /> }
                  { product.star >= 3? <IconStarFill className="text-warning me-1" />:<IconStarFill className="text-secondary me-1" /> }
                  { product.star >= 4? <IconStarFill className="text-warning me-1" />:<IconStarFill className="text-secondary me-1" /> }
                  { product.star >= 5? <IconStarFill className="text-warning me-1" />:<IconStarFill className="text-secondary me-1" /> }|{" "}
                </div>

                <div className="mb-3">
                  <span className="fw-bold h5 me-2">₹ {product.price}</span>
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary me-2"
                    title="Add to cart"
                    onClick={addToCart}
                  >
                    <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                  </button>
                </div>
                <div>
                  <p className="fw-bold mb-2 small">
                    Product Description
                  </p>
                  <ul className="small">
                    <li>
                      {product.description}
                    </li>
                    <li>{product.description}</li>
                    <li>{product.description}</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default ProductDetail