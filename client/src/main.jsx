import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {Toaster} from 'react-hot-toast'
import { store } from './Redux/Store.js'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
    <Toaster/>
    </BrowserRouter>
  </Provider>

)
