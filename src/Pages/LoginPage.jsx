import React, { useState } from 'react'
import loginimg from '../Assets/loginimg.jpg'
import "../index.css"
import {useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailerror,setemailError] = useState("");
    const [passerror,setpassError] = useState("");
    const navigate = useNavigate()

    const validation = () => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(email)) {
    errors.email = "Invalid email format!";
  }

  if (password === "") {
    errors.password = "Password is required!";
  }

  return Object.keys(errors).length !== 0 ? errors : null;
};


        const handleSubmit = (e)=>{
            e.preventDefault();
            
            const errors = validation();
            console.log(errors)


            if(errors){
                setemailError(errors.email);
                setpassError(errors.password)
            }
            else{
                setemailError("");
                setpassError("")
                navigate("/viewExpense")
            }
        }


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginimg} alt=""/>
        </div>
        <div className='bg-gray-900 flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
                <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN</h2>
                <div className="flex flex-col text-gray-400 py-2">
                    <label htmlFor='username'>Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus-bg-gray-800 focus:outline-none'
                            onChange={(e)=>{setEmail(e.target.value)}} value={email} id="email" type="text"/>
                    <div className='text-red-500 text-sm'>{emailerror}</div>
                </div>
                <div className="flex flex-col text-gray-400 py-2">
                    <label htmlFor='username'>Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus-bg-gray-800 focus:outline-none'
                            onChange={(e)=>{setPassword(e.target.value)}} value={password} id="password" type="password"/>
                    <div className='text-red-500 text-sm'>{passerror}</div>
                </div>

                <div>
                  <button type="submit" className='w-full my-5 py-2 bg-orange-500 shadow-lg shadow-teal-500/0 hover:shadow-orange-500/40 text-white font-semibold rounded-lg'>
                  SIGN IN
                  </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default LoginPage