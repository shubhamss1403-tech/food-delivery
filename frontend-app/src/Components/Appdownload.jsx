import React from 'react'
import { assets } from '../Assests/assets'
import './Appdownload.css'

function Appdownload() {
  return (
    <div className='app-download' id='app-download'>
          <p>For better experience, download our app <br/><span>Tomato App</span></p>
           <div className='app-download-platforms'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
           </div>

        </div>
  )
}

export default Appdownload