import React, { Component, lazy, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, removeSingleItem } from "../actions/cart";
const Cart = () => {
    const product = useSelector(state => state)

    const [cart, setCart] = useState([])
    const [sum, setSum] = useState(0)

    const dispatch = useDispatch();

    const addToCart = (c) => {
        dispatch(addItem([c]))
    }

    const deleteAll = (c) => {
        dispatch(removeItem(c))
    }

    const removeOne = (c) => {
        dispatch(removeSingleItem(c))
    }
    useEffect(()=>{
        let s = 0;
        let pi = []
        let p = []
        product.forEach(e => {
            s=s+e.price

            if(pi.indexOf(e.id)===-1){
                pi.push(e.id);
                p.push(e)
            }
        });
        setCart(p)
        setSum(s)
    },[product.length])

    const elementCount = (val) => {
        let c =0;
        product.forEach(p => {
            if(p.id === val) c++;
        })
        return c;
    }
    return(
        <>
        <div className="bg-secondary border-top p-4 text-white mb-3">
          <h1 className="display-6">Shopping Cart</h1>
        </div>
        <div className="container mb-3">
          <div className="row">
            <div className="col-md-9">
              <div className="card">
                <div className="table-responsive">
                  <table className="table table-borderless">
                    <thead className="text-muted">
                      <tr className="small text-uppercase">
                        <th scope="col">Product</th>
                        <th scope="col" width={120}>
                          Quantity
                        </th>
                        <th scope="col" width={150}>
                          Price
                        </th>
                        <th scope="col" className="text-end" width={130}></th>
                      </tr>
                    </thead>
                    <tbody>
                     { cart.map(c =>   
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-3 d-none d-md-block">
                              <img
                                src={c.img}
                                width="80"
                                alt="..."
                              />
                            </div>
                            <div className="col">
                                {c.name}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="input-group input-group-sm mw-140">
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={()=>removeOne(c)}
                              disabled = {elementCount(c.id)===1}
                            >
                              <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input
                              type="text"
                              className="form-control"
                              value={elementCount(c.id)}
                            />
                            <button
                              className="btn btn-primary text-white"
                              type="button"
                              onClick={()=>addToCart(c)}
                            >
                              <FontAwesomeIcon icon={faPlus} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <var className="price">₹ {c.price}</var>
                        </td>
                        <td className="text">
                          <button className="btn btn-sm btn-outline-danger" onClick={()=>deleteAll(c)}>
                            <IconTrash className="i-va" />
                          </button>
                        </td>
                        </tr>
                    )}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer">
                  <Link className="btn btn-primary float-end">
                    Make Purchase <IconChevronRight className="i-va" />
                  </Link>
                  <Link to="/" className="btn btn-secondary">
                    <IconChevronLeft className="i-va" /> Continue shopping
                  </Link>
                </div>
              </div>
              <div className="alert alert-success mt-3">
                <p className="m-0">
                  <IconTruck className="i-va me-2" /> Free Delivery within 1-2
                  weeks
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <dl className="row border-bottom">
                    <dt className="col-6">Total price:</dt>
                    <dd className="col-6 text-end">₹ {sum}</dd>
                  </dl>
                  <p className="text-center">
                    <img
                      src="../../images/payment/payments.webp"
                      alt="..."
                      height={26}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Cart