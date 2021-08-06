import React from "react";
import Product from "./Product";

export default function ProductList(prop) {
  const { title , products} = prop
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      <div className="products-center">
        {products.map(item => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}