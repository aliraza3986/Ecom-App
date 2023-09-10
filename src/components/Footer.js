import React from 'react'
import Footerlogo from '../asstes/Footerlogo.png'
import playlogo from '../asstes/playlogo.png'
import Applogo from '../asstes/Applogo.png'

export default function Footer() {
  return (
    <>
    <div className='footer-weraper'>
<img src={Footerlogo} alt='' />

    </div>
    <div className='row Footer-inner'>
    <div className='col-md-1'>
      </div>
    <div className='col-md-2'>
      <ul>
        <li><a href=''> About Us</a></li>
        <li><a href=''> Mitao Bhook</a></li>
        <li><a href=''> Mitao Bhook - Scholarship</a></li>
        <li><a href=''> Privacy Policy</a></li>
        <li><a href=''> Careers</a></li>

      </ul>

    </div>
   
    <div className='col-md-2'> 
        <ul>
        <li><a href=''> Contact Us</a></li>
        <li><a href=''> Store Locator</a></li>
        <li><a href=''> Track Order</a></li>
       

      </ul>
      </div>
    <div className='col-md-3'> 
        <ul>
        <li><a href=''> Terms & Conditions</a></li>
        <li><a href=''> Powered by</a></li>
        <li><a href='https://simplexts.net'> SimpleX Technology Solutions</a></li>
        
      </ul></div>
    <div className='col-md-4'>     
    <ul>
        <li><a href=''> <img src={Applogo} alt=''/></a></li>
        <li><a href=''> <img src={playlogo} alt=''/></a></li>
 
      </ul>
      </div>
      <div className='col-md-5'>
        <h5>Powered by</h5>
      </div>
      </div>
    </>
  )
}
    