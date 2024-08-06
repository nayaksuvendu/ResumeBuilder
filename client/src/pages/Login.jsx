import React from 'react';
import bgimage from'../assets/image/girl-with-laptop-light.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import {  login } from '../Redux/Slices/UserAuth.js';
import { signInWithGoogle } from '../components/auth/Firebase.js';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth, signOutUser } from '../components/auth/Firebase.js';

const LoginPage= () => {
  const navigate = useNavigate(); // for jump to specified page
  const dispatch = useDispatch();

  const[loginData,setloginData]=useState({
      email:"",
      password:""
  })

   // data store in state
  function handleUserInput(e){
      const{name,value}=e.target;
      setloginData({
          ...loginData,
          [name]:value
      })
  }

  async function onlogin(event){
      event.preventDefault(); // prevent to submit for validation
      if(!loginData.email || !loginData.password){
          toast.error("Please fill all details");
          return
      }

      //Email validation
      if(!loginData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
          toast.error("Invalid email id")
          return
      }

      //Password validation
      if(!loginData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
          toast.error("Password should be 6 - 16 character long with atleast a number and special character")
          return

      }

      // dispatch login/asyncThunk action
      const response = await dispatch(login(loginData));
      if(response?.payload?.success){
          navigate('/');// comes to homePage
      }
      setloginData({
          email: "",
          password: "",
      })

  }
  return (
    <div className="flex w-full flex-wrap text-slate-800 min-h-[90vh]">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-purple-600 text-center md:flex md:w-1/2 rounded-se-[95%]">
        <img src={bgimage} alt="img" className='w-fit rounded-sm' />      
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <Link to="/" className="text-2xl font-bold text-purple-600"> Resumogen . </Link>
        </div>
        <div className = "my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Feel Free To Login Here !</p>
          <h1 className=' font-semibold mt-4  text-xl alert-warning'>Welcome to Resumogen! 👋🏻 </h1>
          <p className=' text-base font-extralight'>Please sign-in to your account and start the adventure</p>
          <p className="mt-6 text-center font-medium md:text-left">
             If still not created ?
            <a href="signup" className="whitespace-nowrap font-semibold text-blue-700"> Create</a>
          </p>
          <button onClick={signInWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
            <FcGoogle className='w-9'/>  Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
          </div>
          <form noValidate autoFocus className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={onlogin}>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-purple-600">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                  onChange={handleUserInput}
                  value={loginData.email}
                />
              </div>
            </div>
            <div className="mb-4 flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-purple-600">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Password (minimum 8 characters)"
                  onChange={handleUserInput}
                  value={loginData.password}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link to='/forgetpassword' className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
            
            <button
              type="submit"
              className="mt-6 rounded-lg  px-4 py-2 text-center text-base font-semibold text-white border-purple-600 shadow-md outline-none ring-blue-500 ring-offset-2 transition ease-in-out bg-purple-600 hover:bg-purple-800 focus:ring-2 md:w-32 justify-center"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default LoginPage;

