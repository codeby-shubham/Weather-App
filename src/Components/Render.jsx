import React from 'react'

const Render = ({Loading,data,setdata,Error}) => {
  return (
    <div>
        {Loading?  (
  <p className='text-[#FFFFFF]'>Fetching weather...</p>
) : Error? (
  <p className="text-red-400 mx-auto">{Error}</p>
):data?(<div className='flex flex-col justify-between rounded-2xl w-full md:w-[80%] mx-auto p-3 bg-[#1E293B] text-[#FFFFFF]'>
        <h2 className='font-bold text-4xl'>Weather Details</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between mt-2'>
          <div className='flex flex-col rounded-2xl border p-3'>
            <p>Temperature</p>
            <p> {data.temperature_2m}°C</p>
          </div>
          <div className='flex flex-col rounded-2xl border p-3'>
            <p>Humidity</p>
           <p>{data.relative_humidity_2m}%</p>
           </div>
           <div className='flex flex-col rounded-2xl border p-3'>
            <p>Wind Speed</p>
           <p>{data.wind_speed_10m}kmph</p>
           </div> 
           <div className='flex flex-col rounded-2xl border p-3'>
            <p>Visibility</p>
           <p>{data.visibility}m</p>
           </div>
        </div>
       
        

      </div>):null}
      
    </div>
  )
}

export default Render