import React from 'react'
import logo from './Daco_4616252.png'
const Footer = () => {
    let year = new Date
    let yr = year.getFullYear()
    let dev = '</>'
  return (
    <div>
       
        <div className="footer">
            <div className="ip">
            <a href="https://www.apple.com/in/iphone/">
            <img title='OfficialPage' className='flogo' src={logo} alt="logo" />
            </a>
          
            </div>
            &copy;{yr} chandru{dev}
        </div>

    </div>
  )
}

export default Footer