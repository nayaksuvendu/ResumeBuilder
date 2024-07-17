import './App.css'
import { Router,Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
      </Routes>
    </>
  )
}

export default App
