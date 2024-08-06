import React from 'react';
import bgimage from'../assets/image/boy-with-rocket-light.png'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast';
import { createAccount } from '../Redux/Slices/UserAuth.js';
import { BsPersonCircle } from 'react-icons/bs';
import { signInWithGoogle } from '../components/auth/Firebase.js';

const SignupPage = () => {

  const navigate=useNavigate(); // for jump to specified page
  const dispatch=useDispatch();

  const[previewImage,setPreviewImage]= useState("")

  const[signupData,setSignupData]=useState({
      fullName:"",
      email:"",
      password:"",
      avatar:""
  })
   // data store in state
  function handleUserInput(e){
      const{name,value}=e.target;
      setSignupData({
          ...signupData,
          [name]:value
      })
  }

  // For image upload
  function getImage(event){
    event.preventDefault(); // it prevent default behaviour of an event i.e. it prevent direct upload
    //getting image
    const uploadedImage=event.target.files[0] // bcz we upload single image that store in 0th index
    if(uploadedImage){
        setSignupData({
         ...signupData,
        avatar:uploadedImage
        })
        const fileReader= new FileReader;
        fileReader.readAsDataURL(uploadedImage);
        fileReader.addEventListener("load",function () {setPreviewImage(fileReader.result)})
    }
}

  async function createNewAccount(event){
      event.preventDefault(); // prevent to submit for validation
      if(!signupData.email || !signupData.password || !signupData.fullName || !signupData.avatar){
          toast.error("Please fill all details");
          return
      }

      //checking name field length
      if(signupData.fullName.length < 8){
         toast.error("Name should be atleast of 8 characters")
         return 
      }
      
      //Email validation
      if(!signupData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
          toast.error("Invalid email id")
          return
      }

      //Password validation
      if(!signupData.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
          toast.error("Password should be 6 - 16 character long with atleast a number and special character")
          return

      }
  // Data send inform of Form to server
      const formData = new FormData();
      formData.append("fullname",signupData.fullName)
      formData.append("email",signupData.email)
      formData.append("password",signupData.password)
      formData.append("avatar",signupData.avatar);

      // dispatch formDta to AuthSlice through craeteAsyncThank/AsynccreateAccount action
      const response= await dispatch(createAccount(formData));
      if(response?.payload?.success){
          navigate('/');// comes to homePage
      }
      setSignupData({
          fullName: "",
          email: "",
          password: "",
          avatar:"",
      });

      setPreviewImage('');
  }



  return (
    <div className="flex w-full flex-wrap text-slate-800 min-h-[90vh]">
      <div className="relative hidden h-screen select-none flex-col justify-center bg-purple-600 text-center md:flex md:w-1/2 rounded-se-[95%] w-fit">
        <img src={bgimage } alt="img" className=' w-fit' />      
      </div>
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12">
          <a href="/" className="text-2xl font-bold text-purple-600"> Resumogen . </a>
        </div>
        <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
          <p className="text-center text-3xl font-bold md:text-left md:leading-tight">Create your free account</p>
          <p className="mt-6 text-center font-medium md:text-left">
            Already using Resumo?
            <a href="login" className="whitespace-nowrap font-semibold text-blue-700">Login here</a>
          </p>
          <button onClick={signInWithGoogle} className="-2 mt-8 flex items-center justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-black hover:text-white focus:ring-2">
          <FcGoogle className=' w-9'/>  Get started with Google
          </button>
          <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
            <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">Or use email instead</div>
          </div>
          <form noValidate autoFocus className="flex flex-col items-stretch pt-3 md:pt-8" onSubmit={createNewAccount}>
          <div className="flex flex-col pt-4 ">
            <label htmlFor="avatar">
              {previewImage ? ( <img className='w-24 h-24 rounded-full m-auto' src={previewImage}/>)
               : (<BsPersonCircle className='w-24 h-24 rounded-full m-auto cursor-pointer'/>)
               }
             </label>
              <input type="file"
                      name='avatar'
                      id='avatar'
                      className='hidden'
                      onChange={getImage}
                      accept='.jpg,.png,.jpeg,.svg'
              />
         </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Fullname"
                  onChange={handleUserInput}
                  value={signupData.fullName}

                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                  placeholder="Email"
                  onChange={handleUserInput}
                  value={signupData.email}
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
                  value={signupData.password}
                />
              </div>
            </div>
            <div className="block">
              <input
                className="mr-2 h-5 w-5 appearance-none rounded border border-gray-300 bg-contain bg-no-repeat align-top text-black shadow checked:bg-blue-600 focus:border-purple-600 focus:shadow"
                type="checkbox"
                id="remember-me"
                style={{
                  backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\'%3e%3cpath fill=\'none\' stroke=\'%23fff\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M6 10l3 3l6-6\'/%3e%3c/svg%3e")',
                }}
                defaultChecked
              />
              <label className="inline-block" htmlFor="remember-me">
                I agree to the <a className="underline" href="#">Terms and Conditions</a>
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 rounded-lg bg-purple-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-blue-500 ring-offset-2 transition ease-in-out hover:bg-purple-700 focus:ring-2 md:w-32"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default SignupPage;
