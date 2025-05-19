import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import bootingAnimation from '../../assets/videos/bootingAnimation.mp4'
import reactsvg from '../../assets/react.svg'
import windowsLogo from '../../assets/photos/windowsLogo.png'
import preLoginScreen from '../../assets/photos/LoginImage1.jpg'

const LodingScreenBoot = () => {
    const [booting, setBooting] = React.useState(true)
    const [wallpaperSize, setWallpaperSize] = React.useState("fill")
    const [pleaseWaitPhase, setPleaseWaitPhase] = React.useState(false)

    const [week, setweek] = useState("")
    const [timeString12, settimeString12] = useState("")
    const [month, setmonth] = useState("")
    const [date, setdate] = useState("")

    const navigate = useNavigate()
    useEffect(() => {
        const now = new Date(Date.now())

        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = dayNames[now.getDay()];
        setweek(dayName)

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12 || 12; // Convert to 12-hour format (0 becomes 12)
        const timeString12 = `${hours}:${minutes} `
        console.log(timeString12)
        settimeString12(timeString12)

        console.log(now.getMonth())
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const monthName = monthNames[now.getMonth()]
        setmonth(monthName)

        setdate(now.getDate())
        console.log(now.getDate())
        // console.log(dayName)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setBooting(false)
            setPleaseWaitPhase(true)
            setTimeout(() => {
                setPleaseWaitPhase(false)
            }, 2000);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (<>
        {booting ? (<>
            <div className='bg-black w-full h-[100vh] text-white flex flex-col justify-between items-center'>
                {/* <p>vfv</p> */}
                <div className='h-screen w-full flex flex-col justify-center items-center'>
                    <img className='w-[200px]' src={windowsLogo} alt="" />
                </div>
                <div className='w-[30%] bg-gray- p-3 flex justify-center  '>
                    <video src={bootingAnimation} type="video/mp4" width="750" height="500" autoPlay loop muted>
                    </video>
                </div>
            </div>
        </>) : (<>

            {pleaseWaitPhase ? (
                <div className='h-[100vh] w-full bg-blue-800 flex flex-col justify-center items-center text-white'>
                    <p className='text-2xl'>Please Wait</p>
                </div>
            ) : (<>{navigate("/preLogin")}</>)}

        </>)}

    </>)
}

export default LodingScreenBoot