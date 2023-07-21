import React, { useState } from 'react'
import { Kart } from '../Context';
import { useContext } from 'react';
const Cartproducts = ({prod,pro,setpro}) => {
    const {cart,setCart} = useContext(Kart);
    const[num,setnum] = useState(0)
    
    let price = prod.price.split(',').join('');
    console.log(price)
    function incre(){
        console.log(num)
        setpro(pro+1*(price))
        setnum(num+1)
    }
    function decre(){
        console.log(num)
        setnum(num!==0?num-1:0)
        setpro(num!==0?pro-1*(price):0)
       
    }
   
    return (
     
        <div className='cartCard'>
               
                <p>
                    {/* {prod.stock<50?( <span className="stk">limited stock</span>):null} */}
                   <img className="phonec"  src={prod.thumbnail} alt="ecommerce" />
                </p>  
                <div>
                <ul>
                <li className='title'>{prod.title}</li>
                <li className='desc'>{prod.description}</li>
                <li className={prod.stock>50?'stocksG':'stocksR'}>Stock:{prod.stock}</li>
                <li className='price'>₹{prod.price}</li>
                </ul>
                <div className="btnctrl">
                {cart.includes(prod)?(
                       <button className='removeCartcart' onClick={()=>{
                          setCart(cart.filter((a)=>a.id!==prod.id))
                        }}>Remove from cart</button> 
                ):(
                  <button className='addCart' onClick={()=>{
                      setCart([...cart,prod])
                    }}>Add Cart</button>  
                  
                )}<br></br>
                <button className='cartss' onClick={incre}>+</button>
                    <span>{num}</span>
                <button className='cartss' onClick={decre}>-</button>
                </div>
                
                </div>
        </div>
     
    )
}

export default Cartproducts