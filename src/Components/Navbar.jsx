import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-between rounded-t-2xl p-3 bg-[#1E293B] text-[#FFFFFF]'>
      <div className='flex justify-between'>
        <h1 className='text-3xl'>WeatherNow</h1>
        <span className='border-2 border-green-500 rounded-lg p-1 bg-green-400 text-white h-fit w-fit'>Live</span>
    </div>
    <div className='flex flex-col  items-center gap-3'>
    <h2 className='font-semibold text-2xl p-2'>Weather at your place.</h2>
    <p>Search any city to discover its current weather</p>
    </div>
    </div>
  )
}

export default Navbar