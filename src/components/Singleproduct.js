import React from 'react'
import { Kart } from '../Context';
import { useContext } from 'react';
const Singleproduct = ({prod}) => {
const {cart,setCart} = useContext(Kart);
  return (
   
      <ul className='card'>
             
              <li>
                 <img className='phone' src={prod.thumbnail} alt="ecommerce" />
              </li>  
              <li className='title'>{prod.title}</li>
              <li className='rating'>☆{prod.rating}</li>
              <li className='price'>₹{prod.price}</li>
              <li className='offer'>{prod.offer}</li>

              {cart.includes(prod)?(
                     <button className='removeCart' onClick={()=>{
                        setCart(cart.filter((a)=>a.id!==prod.id))
                      }}>Remove cart</button> 
              ):(
                <button className='addCart' onClick={()=>{
                    setCart([...cart,prod])
                  }}>Add Cart</button>  
                
              )}
            
              
            
      </ul>
   
  )
}

export default Singleproduct