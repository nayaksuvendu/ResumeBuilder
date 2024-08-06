import React from 'react'
import  { useEffect } from 'react'
import HomePageImage from '../assets/image/hero.svg'
import { Link } from 'react-router-dom'
import typed from 'typed.js'
import HomeLayout from '../layouts/HomeLayout'
import { useSelector } from 'react-redux'
<link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Crimson+Pro"></link>

function Homepage() {
    const isLoggedIn = useSelector((state)=> state?.auth?.isLoggedIn);
    useEffect(()=>{
        new typed('#typed-text',{
            strings:['Resumegen is a tool that often constitutes an automated process in which you follow a template and input your information.',
                     'Ability to build, print, and download your resume for free in minutes.'],
            typeSpeed:30,
            backSpeed:30,
            cursorChar:"",
            showCursor:false,
            contentType:'text'
    });
    },[])
  return (
    <HomeLayout>
    <div className=' pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]'>
    <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold text-purple-500    bg-clip-text">
                    If You Want To Get Gaining, Get A Resume
                    </h1>
                    <p id='typed-text' className="text-xl text-gray-600 font-[Poppins]">
                    
                    </p>

                    <div className="space-x-5">
                      {isLoggedIn === true ? ( <Link to="/resume">
                            <button className="bg-purple-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-purple-600 transition-all ease-in-out duration-300">
                            Build Resume
                            </button>
                        </Link>):( <Link to="/login">
                            <button className="bg-purple-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer hover:bg-purple-600 transition-all ease-in-out duration-300">
                            Build Resume
                            </button>
                        </Link>)}

                         
                    </div> 
                </div>
                
                <div className="w-1/2 flex items-center justify-center overflow-hidden">
                    <img draggable='false' width={400} height={400} alt="homepage image" src={HomePageImage} />
                </div>  
    </div>
    </HomeLayout>
  )
}
                    
export default Homepage