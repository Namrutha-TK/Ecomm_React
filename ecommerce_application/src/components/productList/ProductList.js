import {useState, useEffect } from "react";
import ProductCard from "../productCard/ProductCard";

const ProductList = (props) => {
   
   
  const [productList,setProductList]= useState([])
 
  function LoadProducts(){
   console.log("Load Products")
   fetch('https://fakestoreapi.com/products').then((response)=>{
    response.json().then((data)=>{
     setProductList(data);
    })
 })
  }
  
  useEffect(()=> {
     LoadProducts();

  },[])
 
 
 
  
    return ( 
      <div className="container">
      <div className="row">
        {productList.map((p) => {
           return <ProductCard product={p} OnAddToCartClick={props.OnAddToCartClick} />
        }    
         )}     
         </div>
    </div>

     );
}
 
export default ProductList;