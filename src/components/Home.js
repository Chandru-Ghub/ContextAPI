import React, { useContext, useEffect, useState } from 'react'
import {faker} from '@faker-js/faker'
import Singleproduct from './Singleproduct'
import adss from './iphone.mp4'
import logo from './logo.svg'
import ReactPlayer from 'react-player'
import Footer from './Footer'
const Home = () => {

 
  // const product = [...Array(20)].map(()=>({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg7DjsMnMZK7Kz2K2rv5hd6pZuRGTY7HSZZEOELjlT&s',
   
  // }))
// useEffect(()=>{
//   fetch("http://localhost:8000/products").then((a)=>a.json).then((res)=>console.log(res))
// },[])

  useEffect(()=>{
        fetch('http://localhost:3000/products').then((a)=>a.json()).then((result)=>setList(result));
  },[])
  const[list,setList] = useState([])

    
  return (
    <div className='ot'>
     
      <div className="video">
            <video className='appleads' autoPlay loop muted  src={adss}></video>
            
        </div>
        
    <div className='container'>
        {
          list.map((prod)=>(

            <Singleproduct
                prod = {prod}
                // cart = {cart}
                // setCart = {setCart}
            />
           
          ))
        }
        <br></br>
        </div>
        <div className='ads'>
           {/* <img className='kart' src="https://media.tenor.com/oKIrUL7zLF4AAAAC/apple-iphone13.gif" alt="emptyCart" /> */}
        </div>
        <h2 className='h2'>
                It’s easy to switch from
                Android to iPhone.
        </h2>
        <div className="temoj">
             <img className='emoj1' src="https://www.apple.com/in/iphone/home/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg" alt="" />
        </div>
        
       <div className="switch">
        <img className='emoj' src='https://www.apple.com/in/iphone/cop/images/overview/v1_testimoji_static_large.png' alt="" />
       
        
        </div>
      {/* <ReactPlayer autoplay controls={false} url='https://youtu.be/Rr7-NVEa73s' /> */}
      <Footer/>
    </div>
  )
}

export default Home