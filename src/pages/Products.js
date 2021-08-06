import React from "react";

import { ProductContext } from '../context/products'

import Loading from '../components/Loading'


import PageProducts from "../components/Products/PageProducts";
import Filters from "../components/Products/Filters";


export default function Products() {
  const { loading  } = React.useContext(ProductContext)

  if(loading){
    return (
      <Loading />
      )
  }

  return (
    <>
      <Filters />
      <PageProducts></PageProducts>
    </>
    )
}
