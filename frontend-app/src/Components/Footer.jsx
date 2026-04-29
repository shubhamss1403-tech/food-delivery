import React from 'react'
import { assets } from '../Assests/assets'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Food Delivery" />
          Freshly prepared meals made with quality ingredients, delivered quickly and safely right to your doorstep. We ensure every order is handled with care, maintaining the perfect balance of taste, hygiene, and convenience. Whether you're craving something spicy, sweet, or healthy, our wide selection of dishes and reliable delivery service make it easy to enjoy your favorite food anytime without any hassle.
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1 234 567 890</li>
            <li>shubham@example.com</li>
           </ul>
        </div>
      </div>
      <hr />
       <p>© 2026 Food Delivery. All rights reserved. Fresh taste, fast delivery, always.</p>

      </div>
  )}