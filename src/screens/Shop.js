import logo from '../logo.svg';
import FilterPrice from '../filters/FilterPrice';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
import { products as prods } from '../data/productList';
import Layout from './Product';
import FilterRating from '../filters/FilterRating';

const Shop = () => {
    const [filters, setFilters] = useState({
        rating: "",
        price: 2500
    })

    const handlePrice = (e) => {
        console.log(e.target)
        setFilters({
            ...filters,
            price:e.target.value
        })
    }

    const handleRating = (e) =>{
        setFilters({
           ...filters,
           rating: e.target.value
        })
    }

    const [products, setProducts ] = useState([])

    useEffect(()=>{
        if(filters.rating === "" && filters.price===2500){
            setProducts([...prods])
        } else{
            let p1 = []
            if(filters.rating !== ""){
                p1 = prods.filter(p => p.star == filters.rating)
            }

            if(p1.length === 0) p1=prods;
            if(filters.price!==2500){
                p1 = p1.filter(p => p.price <= filters.price)
            }

            setProducts(p1)
        }
    },[filters.rating, JSON.stringify(filters.price)])
    return(
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-3">
                <FilterPrice handlePrice={handlePrice} price={filters.price}/>
                <FilterRating handleRating={handleRating}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-7">
                  <span className="align-middle fw-bold">
                    {products.length} results for{" "}
                    <span className="text-warning">"t-shirts"</span>
                  </span>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                { products.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <Layout data={product} />
                      </div>
                    );
                  })}
              </div>
              {/* <div className="row g-3">
                {this.state.view === "grid" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {this.state.view === "list" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-12">
                        <CardProductList data={product} />
                      </div>
                    );
                  })}
              </div> */}
            </div>
          </div>
        </div>
    )
}

export default Shop;