import React from 'react'

const Error: React.FC = () => {
  return (
    <div className='CONTAINER SCREEN FLEX-CENTER flex-col SEMIBOLD'>
      <div className='FLEX-CENTER flex-col G6 text-white'>
      
      <h1 className='LOGO  ALL  text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-light text-gray-600 leading-none mb-4 select-none antialiased'>404</h1>
      <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-bold mb-6 tracking-wide ALL'>PAGE NOT FOUND</p>

      <a href="/" className='CENTER inline-block text-center bg-[#40c444] hover:bg-[#369c3a] active:bg-[#2d8030] text-white font-semibold rounded-lg px-4 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#40c444]/30'>GO TO HOME</a>
      </div>

    </div>
  )
}

export default Error
