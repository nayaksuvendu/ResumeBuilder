import React, { useEffect } from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


export default function Profile() {

const userDetails =  useSelector((state) => state?.auth?.data);

useEffect(()=>{},[userDetails]);

  return (
   <HomeLayout>

    <div className=' min-h-[90vh] flex justify-center items-center'>
        <div className='my-10 flex flex-col gap-4 rounded-lg  w-[30rem] shadow-[0_0_10px_black] '>
            <img 
            className=' w-52 m-auto  rounded-full  border-4 border-white mt-1'
            src={userDetails?.avatar?.secure_url} alt="image" />
            <h3
            className='text-xl font-semibold text-center capitalize text-purple-500 font-serif'
            >{userDetails?.fullname}
            </h3>
            <div className='grid grid-cols-2 gap-1 m'>
                <p className='mx-2 font-bold'>Email :</p><p>{userDetails?.email}</p>
                {/* <p>Role :</p><p>{userDetails?.role}</p> */}
            </div>
            <div className='flex items-center justify-between gap-2 text-white'>
                <Link
                to="/user/changepassword"
                className=" w-1/2 bg-purple-600 hover:bg-purple-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center "
                >
                <button>Change password</button>
                </Link>
                <Link
                to="/user/editprofile"
                className=" w-1/2 bg-purple-600 hover:bg-purple-500 transition-all ease-in-out duration-300 rounded-sm font-semibold py-2 cursor-pointer text-center"
                >
                <button>Edit profile</button>
                </Link>
            </div>


        </div>

    </div>

   </HomeLayout>
  )
}
