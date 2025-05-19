import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaWindows } from "react-icons/fa"
import { VscSearch } from "react-icons/vsc";
import { IoIosArrowUp } from "react-icons/io";
import { CiWifiOn } from "react-icons/ci";
import { GiSpeaker } from "react-icons/gi";
import { BiMessageAlt } from "react-icons/bi";

import preLoginScreen from '../../assets/photos/LoginImage6.jpg'




const HomePage = () => {

    const [searchbar, setsearchbar] = useState(true);

    const [week, setweek] = useState("")
    const [timeString12, settimeString12] = useState("")
    const [month, setmonth] = useState("")
    const [date, setdate] = useState("")
    const [ampm, setampm] = useState("")

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();

            const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const dayName = dayNames[now.getDay()];
            // setweek(now.getDay());

            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            setampm(ampm)
            hours = hours % 12 || 12
            const timeString12 = `${hours}:${minutes}`;
            settimeString12(timeString12);

            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const monthName = monthNames[now.getMonth()];
            const ok = now.getMonth() + 1
            // setmonth(monthName);
            setmonth(ok)
            console.log("Month is", ok)

            setdate(now.getDate());
            console.log(now.getDate())
            // Schedule the next update
            setTimeout(updateTime, 5000);
        };

        updateTime(); // Initial call

        return () => {
            clearTimeout(updateTime); // Cleanup timeout on unmount
        };
    }, []);

    return (
        <>
            <div className='w-[100vw] h-[100vh]  bg-green-400 flex flex-col'>
                <div className='bg-[#000] w-[100vw] h-[95.4%] object-scale-down relative'>
                    <img src={preLoginScreen} alt="" className='h-full w-full object-fill' />
                    {/* <div className='w-[100%] h-[100%]  opacity0 border-4 border-lime-600 rounded-lg bg-[#83cc162a] flex justify-center items-center absolute top-0 text-lime-400 text-3xl'>
                        Hello World
                    </div> */}
                </div>
                <div className='overflow-hidden border-t-[1.5px] border-gray-600 w-full h-[4.6vh] bg-[#15313e] flex justify-between items-center text-3xl text-white'>
                    <div className='bg-r-400  flex items-center justify-between pl-  '>
                        <div className=' bg-rd-900 h-[5.4vh] w-16 text-2xl flex justify-center items-center cursor-pointer' ><FaWindows /></div>

                        <div className='searchbar bg-orange-700 w-[30vw] h-[5.4vh] relative'>
                            {searchbar ? (<>
                                <span onClick={() => { setsearchbar(false) }} className="absolute flex h-full gap-4 items-center left-3 top-0 text-gray-900 text-2xl bg-rd-400">
                                    <VscSearch />
                                </span>
                            </>) : <></>}
                            <input onFocus={() => { setsearchbar(false) }} onBlur={() => { setsearchbar(true) }} type="text" className='w-full h-full bg-slate-100 text-black pl-3 outline-none text-xl font-light placeholder:text-black' placeholder={`${searchbar ? ("         Type here to search") : ""}`} />
                        </div>

                        <div className='bg--500 text-xl w-[40vw] overflow-scroll h-12 flex hide-scrollbar cursor-pointer'>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                            <div className='min-w-16 h-full flex justify-center items-center hover:bg-[#2e536680]'>H</div>
                        </div>
                    </div>
                    <div className='bg-gray-00 h-full flex justify-between items-center'>
                        <div className='threetools bg-red-00 h-full flex justify-center items-center text-[24px]'>
                            <div className='h-full px-[0.7px] hover:bg-[#2e536680] flex items-center cursor-pointer'><IoIosArrowUp /></div>
                            <div className='h-full px-[0.7px] hover:bg-[#2e536680] flex items-center cursor-pointer'><CiWifiOn /></div>
                            <div className='h-full px-[0.7px] hover:bg-[#2e536680] flex items-center cursor-pointer'><GiSpeaker /></div>
                        </div>
                        <div className='time bg-green500 h-full text-sm px-2 flex flex-col justify-center items-center gap-[1px] text-center hover:bg-[#2e536680]'>
                            <p className='cursor-pointer'>{timeString12} {ampm}</p>
                            <p className='cursor-pointer'>{date}/{month}/2025</p>
                        </div>
                        <div className='notification bg-blue-00 h-full px-3 pr-4 flex justify-center items-center hover:bg-[#2e536680] cursor-pointer'>
                            <BiMessageAlt />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default HomePage