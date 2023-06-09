import React from "react";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";

const FilterRating = (props) => {
  return (
    <div className="card mb-3">
      <div
        className="card-header fw-bold text-uppercase accordion-icon-button"
        data-bs-toggle="collapse"
        data-bs-target="#filterStar"
        aria-expanded="true"
        aria-controls="filterStar"
      >
        Customer Review
      </div>
      <div className="card-body show" id="filterStar">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault5"
            value={5}
            onChange={props.handleRating}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault5"
            aria-label="Star"
          >
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault4"
            value={4}
            onChange={props.handleRating}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault4"
            aria-label="Star"
          >
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            
            value={3}
            onChange={props.handleRating}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault3"
            aria-label="Star"
          >
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            
            value={2}
            onChange={props.handleRating}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault2"
            aria-label="Star"
          >
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            value={1}
            onChange={props.handleRating}
          />
          <label
            className="form-check-label"
            htmlFor="flexRadioDefault1"
            aria-label="Star"
          >
            <IconStarFill className="text-warning me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
            <IconStarFill className="text-secondary me-1 mb-2" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterRating;
