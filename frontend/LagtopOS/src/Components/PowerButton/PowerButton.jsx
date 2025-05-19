import { useState } from 'react'
import { FaPowerOff } from "react-icons/fa6";
import poweron from '../../assets/sounds/poweron1.mp3'
import { useNavigate } from 'react-router-dom';

function PowerButton() {
    let navigate = useNavigate()
  const powerOn = ()=>{
    let powerOnaudio = new Audio(poweron)
    powerOnaudio.play()
    setTimeout(() => {
        console.log("Power On");
        navigate('/on')
    }, 1000);
  }
  return (
    <>
      <div className='h-[100vh] w-full bg-black flex justify-center items-center'>
        <div onClick={powerOn} className=' bg-gray-900 text-white text-2xl font-semibold px-7 py-5 rounded-lg shadow-md shadow-lime-600 flex items-center gap-3 active:scale-95 transition-all duration-400'>
          <p>Power ON</p>
          <FaPowerOff className='text-lime-500 text-4xl ml-3'/>
        </div>
      </div>
    </>
  )
}

export default PowerButton
