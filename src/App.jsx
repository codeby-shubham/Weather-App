import './App.css'
import Navbar from './Components/Navbar.jsx'
import Body from './Components/Body.jsx'
import { useState } from 'react'
import Render from './Components/Render.jsx'
const App = (props) => {
  const [Loading,SetisLoading]=useState(false);
    const [data,setdata]=useState(null);
      const [Error,SetError]=useState("");
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0F172A]">
  <div className="w-[80%]">
    <Navbar/>
  </div>

  <div className="w-[80%]">
    <Body SetisLoading={SetisLoading} Loading={Loading} data={data} setdata={setdata} Error={Error} SetError={SetError} />
  </div>
  <div className="w-[80%] mt-2">
    <Render Loading={Loading} data={data} setdata={setdata} Error={Error} SetError={SetError}/>
  </div>
</div>
  )
}

export default App