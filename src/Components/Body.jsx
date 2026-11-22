import React, { useState } from 'react'

const Body = ({ SetisLoading,Loading,data,setdata,SetError}) => {
  const [value,Setvalue]=useState("");
  const [Latitude,SetLatitude]=useState("");
  const [Longitude,SetLongitude]=useState("");

  const [temp,settemp]=useState("");
  // const [detaa,Setdeta]=useState({});
  async function HandleClick(){
    console.log(value)
    SetisLoading(true)
    SetError("")
    // console.log(Loading)
    try{
    const response=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${value}&count=1`)
    const deta=await response.json();
    if(!deta.results?.length){
      throw new Error("City not found")
    }
   
    
    // const state=deta.results[0].admin1;
    // Setdeta(state);
    const lat=deta.results[0].latitude
    SetLatitude(lat)
    const lon=deta.results[0].longitude
    SetLongitude(lon)
    const res=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,pressure_msl,wind_speed_10m,visibility&timezone=auto`)
     const dataa=await res.json()
    //  if(!dataa.results?.length){
    //   throw new Error("City not found")
    // }
    setdata(dataa.current)
    console.log("Working fine")
    console.log(dataa.current)
    }catch(err){
      console.error(err,"Ye kaha ka adress dal diya sale!")
      SetError(err.message)
    } finally{
      SetisLoading(false)
    }
    // settemp(data.temperature_2m)
    // SetisLoading(false)
  }
  
  
  return (
    <div className='flex flex-col items-center rounded-b-2xl mx-auto gap-2 p-3 bg-[#1E293B] text-[#F8FAFC]'>
      <input
      className='bg-[#FFFFFF] text-[#0F172A] p-4 border-2 rounded-2xl w-[80%]'
      type="text"
      onChange={((e)=>{
        Setvalue(e.target.value)
      })}
      value={value}
      placeholder='Enter city name!'
      />
      <button className='border-2 rounded-sm p-2 bg-[	#38BDF8] text-[#FFFFFF]' onClick={HandleClick}>Go!</button>

      {/* {Loading&& <div className='border-2 border-black gap-3 w-[80%] rounded-2xl p-3 justify-between'>
        <h2 className='font-bold text-4xl'>Weather Details</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between mt-2'>
          <div className='flex flex-col rounded-2xl border p-3'>
            <p>Temperature</p>
            <p>{data.temperature_2m}</p> 
          </div>
          <div className='flex flex-col rounded-2xl border p-3'>
            <p>Humidity</p>
           <p>{data.relative_humidity_2m}</p>
           </div>
           <div className='flex flex-col rounded-2xl border p-3'>
            <p>Wind Speed</p>
           <p>{data.wind_speed_10m}</p>
           </div> 
           <div className='flex flex-col rounded-2xl border p-3'>
            <p>Visibility</p>
           <p>{data.visibility}</p>
           </div>
        </div>
       
        {/* <p>{detaa}</p> */}

      
      
    
     
      
    </div>
  )
}

export default Body