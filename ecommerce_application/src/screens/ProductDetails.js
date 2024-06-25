import { useState,useEffect,useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import { CartContext}  from "../context/CartContext";
import Cart from './Cart.js';


 

function ProductDetail(){
    const params=useParams();
    const prodId=params.productId;
    const[product,setProduct]=useState({});
   
    const navigate=useNavigate();
    function loadProductsById(){
        fetch('https:fakestoreapi.com/products/'+prodId).then((response)=>{
            response.json().then((data)=>{
             setProduct(data);
             console.log(data);
            }).catch(error =>{
                console.log(error);
            });
         }).catch(error =>{
            console.log(error);
         })
       }

    useEffect(()=>{
        loadProductsById()
    },[prodId]);

    
    const {  addToCart } = useContext(CartContext);
    

    return(
      //    <div>
      //       <h1>This is productDeatil</h1>
      //         <h3>params:{params.productId}</h3>
      //        <h4>"product title :"{product.title}</h4>
      //  </div>
           
            <div className="card mb-3" style={{maxwidth :"350px"}}>
            <div className="row g-0">
             <div className="col-md-4">
                <img src={product.image} height={180} width={180} style={{ objectFit: 'contain'}} className="img-fluid rounded-start" alt="..."/>
              </div>
             <div className="col-md-6" style={{maxwidth:"400px"}}>
               <div className="card-body">
                 <h5 className="card-title" style={{textOverflow:'ellipsis',maxheight:'50px',fontSize:'15px',lineHeight:'20px',fontWeight:'400px',textAlign:'justify'}}>{product.title}</h5>
                 <p className="card-text ">price : $ {product.price}</p>
              <p className="card-text"><small className="text-body-secondary">{product.description}</small></p>
                <button className="btn btn-warning " onClick={()=>{navigate(-1)}}>Back</button>&nbsp;
                <button className="btn btn-success" onClick={()=>addToCart(product)}>Add To Cart</button>
                </div>
            </div>
            </div>
          </div>
       
       
       
      
      






   
    );

}
export default ProductDetail;