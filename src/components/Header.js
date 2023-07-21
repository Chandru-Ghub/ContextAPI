import React from 'react'
import { Link } from 'react-router-dom'
import { Kart } from '../Context';
import { useContext } from 'react';
import logo from './Daco_4616252.png'
import {GrCart} from 'react-icons/gr'
const Header = () => {
  const {cart,setCart} = useContext(Kart);
  return (
    <div className='navbar'>
      {/* <h2>Context API React</h2> */}
      <a href="https://www.apple.com/in/iphone/">
      <img title='OfficialPage' className='logo' src={logo} alt="logo" />
      </a>
      <ul className='calign'>
        <li>
          <Link className='j' to='/'>HOME</Link>
        </li>
        <li>
          <Link className='j' to='/cart'><button className='scart'><GrCart/>{cart.length}</button></Link>
        </li>
      </ul>
    </div>
  )
}

export default Header