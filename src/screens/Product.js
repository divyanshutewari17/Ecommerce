import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions/cart";

const Layout = (props) => {
  const product = props.data;
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem([product]))
  }
  return (
    <div className="card">
      <img src={product.img} className="card-img-top" alt="..." />
    
      {(product.discountPercentage > 0 || product.discountPrice > 0) && (
        <span
          className={`rounded position-absolute p-2 bg-warning  ms-2 small ${
            product.isNew ? "mt-5" : "mt-2"
          }`}
        >
          
          {product.discountPercentage > 0
            ? product.discountPercentage + "%"
            : "₹" + product.discountPrice}
        </span>
      )}
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <a onClick={()=>navigate('/product',{state:{product}})} className="text-decoration-none" style={{cursor: 'pointer'}}>
            {product.name}
          </a>
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">₹{product.price}</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ms-2">₹{product.originPrice}</del>
          )}
          <span className="ms-2">
            {Array.from({ length: product.star }, (_, key) => (
              <IconStarFill className="text-warning me-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group  d-flex" role="group">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
            onClick={addToCart}
          >
            <FontAwesomeIcon icon={faCartPlus} />
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            title="Add to wishlist"
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
};



export default Layout;
