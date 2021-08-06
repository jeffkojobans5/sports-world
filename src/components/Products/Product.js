import React from "react";

import {Link} from 'react-router-dom'

export default function Product(prop) {
  const {  title, id , price } = prop
  const  image  = prop.image.name
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} alt={title || "default title"} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{title || "default title"}</p>
        <p className="product-price">${price || 0}</p>
      </div>
    </article>    
    )
}
