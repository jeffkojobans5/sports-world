
import React, { useContext } from "react";
import { ProductContext } from "../../context/products";
export default function Filters() {
  const {
    filters: { search, shipping, price },
    updateFilters,
    sorted
  } = useContext(ProductContext);
  return (
    <>
    <section className="filters-section">
      <h2 className="section-title">search products</h2>
      <form className="filters-form">
        <div>
          {/* search input */}
          <div className="form-group">
            <label htmlFor="search">search product</label>
            <input
              type="text"
              name="search"
              id="search"
              className="form-control"
              value={search}
              onChange={updateFilters}
            />
          </div>

          {/* end of search form */}
          {/* select category */}

          {/* end of category */}
          {/* free shipping */}
          <div className="form-group">
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
            <label htmlFor="shipping">free shipping</label>
          </div>
          {/* end of free shipping */}
        </div>
        {/* price */}
        <div className="price-group">
          <p>price</p>
          <label>
            <input
              type="radio"
              name="price"
              id="all"
              value="all"
              checked={price === "all"}
              onChange={updateFilters}
            />
            all
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="0"
              checked={price === 0}
              onChange={updateFilters}
            />
            $0 - $20
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="20"
              checked={price === 20}
              onChange={updateFilters}
            />
            $20 - $100
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="100"
              checked={price === 100}
              onChange={updateFilters}
            />
            Over $100
          </label>
        </div>
        {/* end of price */}
      </form>
      <h6>total products :{sorted.flat().length} </h6>
      <hr />
    </section>
    </>
  );
}
