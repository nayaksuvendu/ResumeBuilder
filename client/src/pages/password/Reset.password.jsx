import React from 'react'
import forgetbg from '../../assets/forget.svg'
import HomeLayout from '../../layouts/HomeLayout'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { resetPassword } from '../../Redux/Slices/UserAuth';
import { useState } from 'react';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data,setData] = useState(
        {
            password:"",
            cnfPassword:"",
            resetToken: useParams().resetToken
        }
    );

    function handleOnChange(e){
        const{name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })

    }
    async function handleOnSubmit(e){
          e.preventDefault();

          if (!data.password || !data.cnfPassword || !data.resetToken) {
            toast.error("All fields are mandatory");
            return;
          }

          if (!data.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/)) {
            toast.error(
              "Minimum password length should be 8 with Uppercase, Lowercase, Number and Symbol"
            );
            return;
          }

          if (data.password !== data.cnfPassword) {
            toast.error("Both password should be same");
            return;
          }
          // console.log(useParams().resetToken)
          const res =  dispatch(resetPassword(data));

         // redirecting to the login page
          if (res.payload?.success) {
            navigate("/login");
          }

    }
  return (
    <HomeLayout>
    <div className=" min-h-screen flex items-center justify-center bg-gray-100 grid-cols-1">

      <div className="bg-black p-8 rounded-lg shadow-lg max-w-md w-1/2 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Create new password</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Your new password must be different from previous used passwords.
        </p>
        <form noValidate onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="name@company.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-gray-700">New Password</label>
            <input
              type="password"
              id="new-password"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.password}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={data.cnfPassword}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to resumogen <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Reset password
          </button>
        </form>
      </div>
      <div className="w-1/2 flex items-center justify-center mt-4 ">
        <img alt="homepage image" src={forgetbg} />
      </div> 
      
    </div>
    </HomeLayout>
  );
};

export default ForgotPassword;

