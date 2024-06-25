import { useContext } from 'react';
import '../styles/Cart.css'
import { CartContext } from '../context/CartContext'
 function Cart() {

  const { cartItems, addToCart, removeFromCart, getCartTotal } = useContext(CartContext);

  return (
    <>
    

         <div className="cart mt-0">
      {cartItems.map((item) => {
        return (
          <div className="cards " key={item.id}>
            
            <img src={item.image} height={60} alt="" style={{marginLeft:'200px'}} />
            
            <p className='text-center'>{item.title}<br></br><span className='text-center'>${item.price}</span></p>
            
            <div className="quantity">
              <button
                onClick={() =>{
                  addToCart(item)
                }}>
                +
              </button>
              <p className='text-center'>{item.quantity}</p>
              <button
                onClick={() => {
                  removeFromCart(item)
                }}>
                -
              </button>
            </div>
           
          </div>
        );
      })}
      {cartItems.length > 0 && (
        <div className="total">
          <h2>Total Amount : ${getCartTotal()}</h2>
        </div>
      )}
    </div>
 

   
    </> 
  )
}
export default Cart;