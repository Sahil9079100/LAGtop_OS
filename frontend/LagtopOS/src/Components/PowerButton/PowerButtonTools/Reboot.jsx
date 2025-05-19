import React, { use, useState, useEffect } from 'react'

const Reboot = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = "/on"
        }, 5000); // 2 seconds delay

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }
        , []);

    const [dot1, setdot1] = useState(false)
    const [dot2, setdot2] = useState(false)
    const [dot3, setdot3] = useState(false)

    useEffect(() => {
        setdot1(true);
        setTimeout(() => {
            setdot2(true);
            setTimeout(() => {
                setdot3(true);
                setTimeout(() => {
                    setdot1(false);
                    setdot2(false);
                    setdot3(false);
                }, 500);
            }, 500);
        }, 500);

        const interval = setInterval(
            () => {
                setdot1(true)
                setTimeout(() => {
                    setdot2(true)
                    setTimeout(() => {
                        setdot3(true)
                        setTimeout(() => {
                            setdot1(false)
                            setdot2(false)
                            setdot3(false)
                        }, 500);
                    }, 500);
                }, 500);
            }, 2000); // Change the interval as needed

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }
        , []);
    return (
        <>
            <div className='bg-black h-[100vh] w-full font-light text-white flex flex-col justify-center items-center text-xl'>
                <div className='bg--200  mb-20 font-black italic text-white text-[128px]'><span className='text-yellow-400'>LAG</span>top OS</div>
                <div className='mt-[-20px] mb-10 text-2xl tracking-widest italic opacity-40'>Born to LAG🔥</div>
                <div className='bg--200 mt-20 font-light text-white flex justify-center items-center text-xl'>Rebooting{dot1 ? "." : " "}{dot2 ? "." : " "}{dot3 ? "." : " "}</div>
            </div>
        </>
    )
}

export default Reboot