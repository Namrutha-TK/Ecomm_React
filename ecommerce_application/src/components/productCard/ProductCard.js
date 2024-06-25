import { Link } from "react-router-dom";

function ProductCard(props) {

  console.log("Productcard",props)
  var prod=props.product;
  function OnADCClick(){
    props.OnAddToCartClick(prod)
  }
    return ( 
        
<div className="col-3 card mx-2 my-2 " style={{ width: "260px", height:"360px",boxSizing:"border-box",boxshadow: "0px 0px 0px 0px white",margin:"5px",borderstyle: "solid",marginbottom:" 10px", bordercolor: "#e0e0e086"}}>
  <div style={{height:'200px',width:"240px",justifyContent:'center',alignItems:'center'}}>
  <img src={prod.image} height={180} width={180} style={{ objectFit: 'contain'}} className="card-img-top mt-2" alt="img" />
  </div>
  <div className="card-body">
  
    <Link to={"/products/" + prod.id} className="card-title text-secondary" style={{textOverflow:'ellipsis',maxheight:'50px',fontSize:'14px',lineHeight:'20px',textDecoration:'none',fontWeight:'400px',textAlign:'justify' ,overflow:'hidden'}}>{prod.title}</Link>
    <p className="card-text text-center mt-1">${prod.price} </p>
    <div style={{alignItems:'center',position:'absolute',left:'30%'}}>
    <a href="#" className="btn btn-primary mt-3 d-none" style={{position:'relative',bottom:'5px'}} onClick={OnADCClick}>Add To Cart</a></div>
  </div>
</div>

        
     );
}

export default ProductCard;