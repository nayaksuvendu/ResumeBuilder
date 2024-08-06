import {BiLogoFacebookCircle,BiLogoInstagram,BiLogoLinkedin,BiLogoTwitter} from 'react-icons/bi'
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Footer() {
const date=new Date();
const CurrentYear=date.getFullYear();
  return (
    <>
    <footer className=' relative h-[10vh] left-0 bottom-0  py-5 flex flex-col sm:flex-row items-center justify-between text-white bg-gray-300 '>
    <section className=' flex text-lg text-black items-center ml-7 '>
    <p className='flex'><i className='mt-1 mr-1'></i>Copyright &#169; {CurrentYear} | All rights reserved.Designed By <span className=' text-blue-500 ml-1 font-[Dancing Script]'><Link to={'https://www.linkedin.com/in/suvendu-kumar-nayak-b22baa281'}>Suvendu Nayak</Link> <span className=' text-black'> & </span><Link to={'https://www.linkedin.com/in/sonali-misra-745a5124b'}>Sonali Misra</Link ></span>.</p>
    </section>
    <section className='flex items-center justify-center gap-5 text-2xl mr-5 '>
       <button id="twitter" class="bg-white  transform hover:-translate-y-3  border-2 w-7 h-7 rounded-full duration-500 text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white text-2xl">
        <i class="fab fa-twitter"><BiLogoFacebookCircle/></i>
       </button>
       <button id="instagram" class=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600  transform hover:-translate-y-3 rounded-full duration-500 ">
        <i class="fab fa-instagram"> <BiLogoInstagram/></i>
       </button>
      <button id="linkedin" class="bg-white transform hover:-translate-y-3  border-2 w-7 h-7 rounded-full duration-500 text-blue-500 border-blue-500  hover:bg-blue-500 hover:text-white text-2xl">
       <i class="fab fa-linkedin-in"><BiLogoLinkedin/></i>
      </button>     
      <button id="telegram" class="bg-white  transform hover:-translate-y-3  border-2 w-7 h-7 rounded-full duration-500 text-black border-black hover:bg-blue-400 hover:text-white text-2xl">
       <i class="fab fa-telegram-plane"><BsTwitterX/></i>
      </button>
    </section>         
    </footer>
   </>

  )
}

export default Footer;