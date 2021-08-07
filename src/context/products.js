import React from "react";

import url from '../utils/URL'

import axios from 'axios';

import { featuredProducts  , paginate} from "../utils/helpers";

export const ProductContext = React.createContext();

export default function ProductProvider({children}){

  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  const [sorted, setSorted ] = React.useState([])
  const [filters, setFilters ] = React.useState({
    search : "",
    category : "",
    shipping: false,
    price : "all"
  })

  const changePage = index => {
    console.log(index)
  }

  const updateFilters = (e) => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;

    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } 
    else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } 
    else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
  }

  React.useEffect(()=> {
  	setLoading(true)
  	axios.get(`${url}/products`)
  		.then(response => {
        setSorted( paginate(response.data) )
  			setProducts(response.data)
				const featured = featuredProducts(response.data);
  			setLoading(false)
  			setFeatured(featured);
  		})
  		return ()=> {}
  },[])

  React.useEffect(()=> {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;

    if(category !== "all"){
       newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.includes(category) ? item : null;
      });       
    }

    if (shipping !== false) {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.includes('ball') ? item : null;
      });
    }

    if (price !== "all") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 20;
        } else if (price === 20) {
          return item.price > 20 && item.price < 100;
        } else {
          return item.price > 400;
        }
      });
    }
    
    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.includes(search) ? item : null;
      });
    }

    setSorted(newProducts)
  },[filters , products])
  
	return (
		<ProductContext.Provider 
		value={{
        products,
        loading,
        featured,
        sorted,
        filters,		
        changePage,
        updateFilters,

		}}>
			{children}
		</ProductContext.Provider>
		)
}
