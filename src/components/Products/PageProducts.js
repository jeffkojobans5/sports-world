import React from "react";
import { ProductContext } from "../../context/products";
import ProductList from "./ProductList";


export default function PaginatedProducts() {
  const { sorted } = React.useContext(ProductContext);


  return (
        <ProductList products={sorted}></ProductList>
    )
 
}
