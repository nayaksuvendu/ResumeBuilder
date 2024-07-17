import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../Redux/Slices/AuthSlice.js';
import{FiMenu} from 'react-icons/fi'
import Footer from '../pages/Footer.jsx';

function HomeLayout({children}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for checking if user is looged in
  const isLoggedIn= useSelector((state)=> state?.auth?.isLoggedIn);

  async function handleLogout(e){
    e.preventDefault(); //oppose default behaviour
    const res = await dispatch(logout());
    if(res?.payload?.success)
      navigate('/');
  }
  return (
    <div className="min-h-[90vh]">

 <div className="drawer absolute left-0 z-50 w-full">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    {/* <!-- Navbar --> */}
    <div className="w-full navbar bg-base-300 mt-0">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost bg-purple-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"> <FiMenu 
                            size={"30px"}
                            className="font-bold text-white m-4"
                        /></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-serif font-bold text-xl"><span className='  text-purple-500  font-[Pacifico] font-thin text-3xl'>Resumegen</span></div>
      <div className="flex-none hidden lg:block">
        <ul className=" menu menu-horizontal">

          {/* <!-- Navbar menu content here --> */}
          {!isLoggedIn && (
        <li className=' relative '>
          <div className=' w-full flex items-center justify-center gap-4 shadow-none'>
            <button className=' btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full text-white'>
              <Link to='/login'>Login</Link>
            </button>
            <button className='btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full text-white '>
              <Link to='/signup'> Signup</Link>
            </button>
          </div>
        </li>
      )} 

      {isLoggedIn && (
        <li className='relative hover:shadow-none  '>
          <div className='w-full flex items-center justify-center '>
            <button className=' btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full text-white'>
              <Link to='/user/profile'>Profile</Link>
            </button>
            <button className='btn-active bg-purple-600  px-4 py-1 font-semibold rounded-md w-full text-white '>
              <Link  onClick={handleLogout}>Logout</Link>
            </button>
          </div>
        </li>
      )}                  

        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
  </div>
   
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 relative">
      {/* <!-- Sidebar content here --> */}

      {/* { isLoggedIn && role=='ADMIN' && 
            (<li>
              <Link to="/admin/dashboard">Admin DashBoard</Link>
              </li>)
          } */}
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/contactUs">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/Aboutus">About Us</Link>
                        </li>

                        
      <div className="lg:hidden">
      {!isLoggedIn && (
        <li className='absolute bottom-9 w-[80%] '>
          <div className=' w-full flex items-center justify-center gap-4'>
            <button className=' btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full text-white'>
              <Link to='/Login'>Login</Link>
            </button>
            <button className='btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full text-white'>
              <Link to='/Signup'> Signup</Link>
            </button>
          </div>
        </li>
      )} 

      {isLoggedIn && (
        <li className='absolute bottom-9 w-[90%] '>
          <div className=' flex items-center justify-center '>
            {/* <button className='btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full'>
              <Link to='/user/profile'>Profile</Link>
            </button> */}
            <a class="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="#">Profile</a>
            <a class="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="#">Logout</a>
            {/* <button className=' btn-active bg-purple-600 px-4 py-1 font-semibold rounded-md w-full '>
              <Link  onClick={handleLogout}>Logout</Link>
            </button> */}
          </div>
        </li>
      )}                  
     </div> 
                        
    </ul>
  </div>
  
 </div>
 

 {children}
 <Footer/>
</div>
  )
}

export default HomeLayout