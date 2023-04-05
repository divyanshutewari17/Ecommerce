const FilterPrice = (props) => {
    return (
       < div className="card mb-3">
        <div
            className="card-header fw-bold text-uppercase accordion-icon-button"
            data-bs-toggle="collapse"
            data-bs-target="#filterPrice"
            aria-expanded="true"
            aria-controls="filterPrice"
        >
            Price
        </div>
        <ul className="list-group list-group-flush show" id="filterPrice">
            <li className="list-group-item">

            <div className="row">
                <div className="col-xs-9">
                <input
                className="form-range"
                type="range"
                id="flexCheckDefault1"
                min="200"
                max="2500"
                value={props.price}
                onChange={props.handlePrice}
                />
                </div>
                <div className="col-xs-3">
                    <div className="form-control">
                    ₹ {props.price}
                    </div>
                </div>
            </div>
            </li>
        </ul>
        </div>
    )
}

export default FilterPrice;