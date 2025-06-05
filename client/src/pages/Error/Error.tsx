import React from 'react'
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div className='CONTAINER SCREEN FLEX-CENTER flex-col SEMIBOLD'>
      <div className='FLEX-CENTER flex-col G6 text-white'>
      
      <h1 
      className='
      LOGO  ALL  GRADIENT 
      text-6xl sm:text-7xl md:text-8xl lg:text-9xl 
      xl:text-[10rem] 2xl:text-[12rem] font-light 
      leading-none mb-4 select-none antialiased'
      >
        404
      </h1>

      <p 
      className='
      text-lg sm:text-xl md:text-2xl 
      lg:text-3xl text-white font-bold 
      mb-6 tracking-wide ALL'
      >
        PAGE NOT FOUND
      </p>

    <Link 
      to="/" 
      className=" 
      GRADIENT
      inline-block text-center font-semibold 
      px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base 
      md:text-lg lg:text-xl transition-all duration-200 shadow-lg 
       transform hover:-translate-y-0.5  "
    >
    GO TO HOME
    </Link>
      </div>

    </div>
  )
}

export default Error
