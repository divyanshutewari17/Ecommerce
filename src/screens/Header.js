import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { ReactComponent as IconPersonBadgeFill } from "bootstrap-icons/icons/person-badge-fill.svg";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { ReactComponent as IconListCheck } from "bootstrap-icons/icons/list-check.svg";
import { ReactComponent as IconDoorClosedFill } from "bootstrap-icons/icons/door-closed-fill.svg";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconBellFill } from "bootstrap-icons/icons/bell-fill.svg";
import { ReactComponent as IconInfoCircleFill } from "bootstrap-icons/icons/info-circle-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate()
  const select = useSelector(state =>  state)
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={()=>navigate('/')}>Ecommerce App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            </li>
            <li class="nav-item">
            </li>
          </ul>
          <form class="d-flex">
            <a class="btn btn-outline-success position-relative" onClick={()=>navigate('/cart')}>
              <IconCart3 className="i-va" />
                { select.length > 0 ? 
                <div className="position-absolute top-0 start-100 translate-middle badge bg-danger rounded-circle">
                  {select.length}
                </div>:<></>}
              </a>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
