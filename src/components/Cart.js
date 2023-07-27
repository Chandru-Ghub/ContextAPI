import React, { useEffect, useState } from 'react'
import Singleproduct from './Singleproduct'
import { Kart } from '../Context';
import { useContext } from 'react';
import Cartproducts from './Cartproducts';
const Cart = () => {
  const {cart,setCart} = useContext(Kart);
  const[count,setCount] = useState()
  const[pro,setpro] = useState(0)
  
  useEffect(()=>{
    
        setCount(cart.reduce((a,b)=>a+Number(b.price.split(',').join('')),0))
    
  },[cart])
  return (
    <div className='cartContainer'>
      <div className='cartnav'>
            <h2 className='cartTitle' style={{fontSize:'30px',color:'black'}}>icart</h2>
            {cart.length?(<h3 className='totalPrice' style={{color:'blue'}}>Total Price: ₹{count+pro}🪙 </h3>):null}
            
            {cart.length?(
            <button className='removeAll' onClick={()=>{
              if(window.confirm('Warning! all items inside the card will be removed'))
              setCart([])
            }}>Remove All</button>):null}
              <p className='qty'>PerItems: ₹{pro}</p>
      </div>
      {cart.length<1? (<span className='empty'>
        <img className='kart' src="https://kalpp.com/img/empty-cart.05d8cea1.gif" alt="emptyCart" />
        <p className='oops'><span className='op'>OOPS!</span> YOUR CART IS EMPTY</p>
      </span>
     ):null}
    
      <div className='cart-card'>
        {cart.map((prod,i)=>(
          <Cartproducts
          prod={prod}
          pro = {pro}
          setpro = {setpro}
          key={i}
         />
        ))}
       
      </div>
    </div>
  )
}

export default Cart