import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut, LoginUser } from "../../redux/actions/authLogin"
import { useNavigate } from 'react-router-dom'
import GoogleLogin from "../../assets/component/Google/GoogleLogin";

export const LoginPage = () => {
    const navigate =useNavigate()
  const [Password, setPassword] = useState("")
  const [Email, setEmail] = useState("")

  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value)
      }
      if (e.target.id === "password") {
        setPassword(e.target.value)
      }
    }
  }

  const handleLoginUser = async() => {
    const checker = await dispatch(LoginUser(
      {
        "email": Email,
        "password": Password
      }
    ))
    if (checker){
        navigate("/homepage")
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-gray-500 via-white-600 to-gray-200 h-screen">
    <div className="border-4 border-black px-20 py-16 bg-white rounded-lg">
      <h1 className="text-4xl font-bold pb-10 text-center">LOGIN</h1>
      <div className="flex flex-col items-center relative">
      <h1 className="text-lg font-normal text-left w-96">Email :</h1>
      <input onChange={handleInput} id='email' className='border-2 border-black w-96 py-2 px-2 rounded text-center' type='email ' placeholder="Email Address" />
      <h1 className="text-lg font-normal pt-8 text-left w-96">Password :</h1>
      <input onChange={handleInput} id='password' className="border-2 border-black w-96 py-2 px-2 rounded text-center" type='password'  placeholder="Password"/>
    </div>
    <div className="py-4 flex flex-col">  
      <button
            type="button"
            className="px-9 py-2 bg-black text-white rounded-lg mt-2 w-96"
            onClick={handleLoginUser}>Login
      </button>
      {/* <button className="px-9 py-2 bg-black text-white rounded-lg mt-2 w-96" onClick={()=>{
        dispatch(LogOut())}}>logout</button> */}
          <div className="flex justify-center items-center py-4">
            <GoogleLogin />
          </div>

          <span className="flex justify-center items-center text-black">
            Don't have an account?
            <span
              className="px-2 cursor-pointer underline underline-offset-2 font-bold"
              onClick={() => {
                navigate("/Register");
              }}>Sign Up
            </span>
          </span>
    </div> 
    </div>
    </div>
  )
}