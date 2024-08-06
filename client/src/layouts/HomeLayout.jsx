import {useDispatch,useSelector} from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Slices/UserAuth.js';
import {FiMenu} from 'react-icons/fi'
import Footer from '../components/Footer.jsx';
import { useEffect, useState } from 'react';


function HomeLayout({children}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //for checking if user is looged in
  const isLoggedIn = useSelector((state)=> state?.auth?.isLoggedIn);

  async function handleLogout(e){
    e.preventDefault(); //oppose default behaviour
    const res = await dispatch(logout());
    if(res?.payload?.success)
      navigate('/');
  }

   const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
  <div className="min-h-[90vh] dark:text-white dark:bg-gray-800">

 <div className="drawer absolute left-0 z-50 w-full ">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">

    {/* <!-- Navbar --> */}
    <div className="w-full navbar bg-base-300 mt-0 fixed ">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost bg-purple-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current " > <FiMenu 
           size={"30px"}
           className="font-bold text-white m-4"
           /></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2 font-serif font-bold text-xl"><span className='  text-purple-500  font-[Pacifico] font-thin text-3xl'>Resumogen</span></div>
      <div className="flex-none hidden lg:block">
        <ul className=" menu menu-horizontal">

          {/* <!-- Navbar menu content here -->  */}

  <div className=' w-full flex items-center justify-center gap-4 shadow-none '> 
  
  <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />
  {/* sun icon */}
  <svg
    className="swap-off h-10 w-10 fill-current "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={toggleDarkMode}
    >
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
  {/* moon icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    onClick={toggleDarkMode}
    >
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>

           {!isLoggedIn && (
          <div className=' w-full flex items-center justify-center gap-4 shadow-none'>
            <span className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600 '>
              <Link to='/login'>Login</Link>
            </span>
            <span className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600 '>
              <Link to='/signup'> Signup</Link>
            </span>
          </div>         
      )} 

      {isLoggedIn && (
          <div className='w-full flex items-center justify-center gap-4 '>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600 '>
              <Link to='/user/profile'>Profile</Link>
            </button>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600 '>
              <Link  onClick={handleLogout}>Logout</Link>
            </button>
          </div>
      )}                  
      </div>
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
  </div>
   
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 relative">
      {/* <!-- Sidebar content here --> */}

                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/contactUs">Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/Aboutus">About Us</Link>
                        </li>

                        
      <div className="lg:hidden absolute bottom-9 w-[90%] ">
      {!isLoggedIn && (
          <div className=' w-full flex items-center justify-center gap-4'>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600'>
              <Link to='/Login'>Login</Link>
            </button>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600'>
              <Link to='/Signup'> Signup</Link>
            </button>
          </div>
      )} 

      {isLoggedIn && (
          <div className=' flex items-center justify-center gap-4 '>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600'>
              <Link to='/user/profile'>Profile</Link>
            </button>
            <button className='btn-active px-4 py-1 bg-purple-600  text-white font-semibold  border-2 rounded  hover:bg-gray-100 hover:text-purple-600 hover:border-purple-600'>
              <Link  onClick={handleLogout}>Logout</Link>
            </button>
          </div>
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