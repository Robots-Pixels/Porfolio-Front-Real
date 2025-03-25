import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home'
import Header from './Components/Header'
import { FaCheck } from 'react-icons/fa'

export default function  App() {

  const [contentTransform, setContentTransform] = useState("0");
  const [success, setSucces] = useState(false);

  return (
    <BrowserRouter>

      <div className={`${success ? "absolute" : "hidden"} z-50 w-full h-full bg-black/80`}>
          <div className='flex items-center justify-center'>
              <div className='fixed top-50 sm:top-30 bg-white p-8 sm:p-30 rounded-3xl'>
                  <p className='relative z-30 text-2xl sm:text-4xl text-center max-w-[45rem]'> Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly. <FaCheck className='float-right mt-4'/> </p>
              </div>
          </div>
      </div>

      <Header setTransform={setContentTransform}/>
      <Routes>
        <Route path='/' element={<Home transform={contentTransform} success={success} setSucces={setSucces}/>}/>
      </Routes>
    </BrowserRouter>
  )
}
