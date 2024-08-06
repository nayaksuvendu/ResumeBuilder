import React from 'react'
import HomeLayout from '../layouts/HomeLayout'

function Aboutus() {
  return (
    <HomeLayout>
    <div className="sm:flex items-center min-h-[90vh]">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-gray-500 border-b-2 border-purple-600 uppercase animate-pulse ">About us</span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-purple-600">Our Company</span>
            </h2>
            <p className="text-gray-700 line-clamp-3 font">
            Welcome to Resumegen, your one-stop solution for creating professional resumes that make a lasting impression. Our mission is to empower job seekers by providing easy-to-use tools and expert guidance, 
            enabling them to showcase their skills and experience effectively.
            </p>
        </div>
    </div>
    </div>
    </HomeLayout>
  )
}

export default Aboutus



