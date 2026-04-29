import React, { useState } from 'react'
import { assets } from '../Assests/assets'
import './Login.css'

function Login({ setShowLogin }) {

  const [error,setError]=useState(false)
  const [form,setform]=useState({
    name:"",
    email:"",
    password:""



  })

     
    const [currState, setCurrState] =  useState('login')
    



   const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);
   }


  return (
    <div className='login-popup'>
            <form onSubmit={handleSubmit} className='login-popup-container'>
              <div className='login-popup-title'>
                <h1>{currState}</h1>
                 
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
              </div>
              <div className='login-popup-inputs'>
                {
                     currState==="login" ? <></> : <input value={form.name} onChange={(e)=>setform({...form,name:e.target.value})} type="text" placeholder='your name' required />
                }
                
                <input  value={form.email}  onChange={(e)=>setform({...form,email:e.target.value})} type="email" placeholder='email' required />
                <input  value={form.password} onChange={(e)=>setform({...form,password:e.target.value})} type="password" placeholder='password' required />
              </div>
                <button>{currState === 'sign up' ? 'create account' : 'login'}</button>
                <div className='login-popup-condition'>
                <input type='checkbox' required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                
                 {
                    currState==="login"
                    ? <p>Create a new account? <span onClick={()=> setCurrState("sign up")}> Click here</span></p>
                    : <p>Already have an account? <span onClick={()=> setCurrState("login")}> Login here</span></p>
                 }
                
                {
                  error &&<div>
                    <p> name:{form.name}</p>
                    <p> email:{form.email}</p>
                    <p> password:{form.password}</p>
                  </div>
                }
            

            </form>
    </div>
  )
}

export default Login