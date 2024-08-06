import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import LoginPage from './pages/Login.jsx'
import SignupPage from './pages/Signup.jsx'
import AboutUs from './pages/Aboutus.jsx'
import ContactUs from './pages/Contactus.jsx'
import ResumeBuilder from './pages/resume/ResumeBuilder.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Profile from './pages/profile/Profile.jsx'
import EditProfile from './pages/profile/EditProfile.jsx'
import ResetPassword from './pages/password/Reset.password.jsx'
import ForgetPassword from './pages/password/ForgetPassword.jsx'
import ChangePassword from './pages/password/ChangePassword.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/Aboutus' element={<AboutUs/>}></Route>
        <Route path='/resume' element={<ResumeBuilder/>}></Route> 
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/user/profile' element={<Profile/>}></Route>
        <Route path='/user/resetpassword' element={<ResetPassword/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path='/user/changepassword' element={<ChangePassword/>}></Route>
        <Route path='/user/editprofile' element={<EditProfile/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
