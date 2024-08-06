import React, { useState } from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast';
import { forgetPassword } from '../../Redux/Slices/UserAuth';

export default function ForgetPassword() {

    const dispatch = useDispatch();
    
    const [data,setEmail] = useState({email:""});


   async function handleSubmit(e){
        e.preventDefault();

        if(!data.email){
            toast.error("All fields are mandatory");
            return;
        }

        if (!data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            toast.error("Invalid email id");
            return;
          }

       await dispatch(forgetPassword(data)) ;
        
       setEmail("");

    }
  return (
    <HomeLayout>
        <div className=' min-h-screen flex items-center justify-center bg-gray-100 grid-cols-1'>

            <form onSubmit={handleSubmit}
            className=' flex flex-col justify-center gap-8 rounded-lg p-4 w-96 h-[28rem] shadow-[0_0_10px_black] '
            >
                <h1 className=' text-center text-2xl font-bold shadow-md h-10'>Forget Password</h1>
                <p>
                    Enter your register email, we will send you a verification link on
                    your register email from which you can reset your password
                </p>
                <div className=' flex flex-col gap-1'>
                    <input 
                    type="email" 
                    name='email'
                    id='email'
                    placeholder='Enter your register email'
                    className=' bg-transparent px-2 py-1 border'
                    onChange={(event)=>{setEmail({...data,email:event.target.value})}}
                    value={data.email}
                    />
                </div>

                <button
                className="w-full text-white bg-purple-600 py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                type='submit'
                >
                    Get Verification Link
                </button>

                <p
                className='text-center'
                >
                 Already have an account ?{' '}
                 <Link to={'/Login'} className='link text-accent cursor-pointer'>
                 login
                 </Link>
                </p>

            </form>

        </div>

    </HomeLayout>
  )
}
