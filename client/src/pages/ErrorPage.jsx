import React from 'react'
import errorpage from '../assets/404-computer.svg'
function ErrorPage() {
  return (
    <main className=" min-h-screen flex items-center justify-center bg-gray-100 grid-cols-1">
    
      <div className=" p-8  max-w-md w-1/2">
    <p className=" text-8xl font-semibold text-indigo-600">404</p>
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <a href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
      <a href="/contactUs" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
      </div>
      <div className="w-1/2 flex items-center justify-center mt-4 ">
        <img alt="homepage image" src={errorpage} />
      </div> 

</main>
  )
}

export default ErrorPage