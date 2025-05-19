import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LuUserRound } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import { motion } from 'framer-motion';
import { CiPower } from "react-icons/ci";
import axios from 'axios';
import bootingAnimation from '../../assets/photos/lodingAnimation.gif'




const LoginScreen = () => {

    const navigate = useNavigate()
    const animationVariants = {
        hidden: { y: "0%", opacity: 0 }, // Start off-screen at the bottom
        visible: { y: "0%", opacity: 1 }, // Slide to the center and fade in
        exit: { y: "100%", opacity: 0, duration: 2 }
    }

    const [username, setusername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [powerbuttonOn, setPowerButtonOn] = useState(false)

    const [name, setName] = useState("")
    const [waiting, setWaiting] = useState(false)
    // const navigate = useNavigate()

    const NewhandleChangeUSERNAME = (e) => {
        const user = e.target
        if (user.value === " ") {
            console.log("space detected")
            return 0;
        }
        setusername(user.value)
        console.log(user.value)
        // console.log(randomKey)
    }
    const NewhandleChangePASSWORD = (e) => {
        const pass = e.target
        setPassword(pass.value)
        console.log(pass.value)
    }
    const NewhandleClick = () => {
        const uniqueKey = Math.random().toString(36).substring(2, 15);
        const LoginData = {
            username: username,
            password: password,
            uniqueKey: uniqueKey
        }
        RegisterSubmmit()
        console.log(LoginData)
        // navigate("/home")
        console.log("clicked")
    }

    const handleChange = (e) => {
        const pass = e.target
        if (pass.value === " ") {
            console.log("space detected")
            return 0;
        }
        setPassword(pass.value)
        console.log(pass.value)
        // console.log(randomKey)
    }
    const handleClick = () => {
        const LoginData = {
            password: password
        }
        LoginSubmmit()
        console.log(LoginData)
        // navigate("/home")
        console.log("clicked")
    }

    const LoginSubmmit = async (e) => {
        // e.preventDefault()
        const LoginData = {
            password: password
        }
        console.log(LoginData)
        try {
            const responce = await axios.post("http://localhost:3000/api/loginUser", LoginData, { withCredentials: true })
            console.log(responce.data.message)
            setusername("")
            setPassword("")
        } catch (error) {
            console.log("error iss:::> ", error)
        }
    }

    const RegisterSubmmit = async (e) => {
        // e.preventDefault()
        const userKey = Math.random().toString(36).substring(2, 15);
        const LoginData = {
            username: username,
            password: password,
            userKey: userKey
        }
        console.log(LoginData)
        try {
            const responce = await axios.post("http://localhost:3000/api/makeUser", LoginData, { withCredentials: true })
            // console.log(responce.data.status)
            // console.log(responce.data.message)
            console.log(responce.data.userData)
            if (responce.data.status === 200) {
                setisLoggedIn(true)
                waitAfterLogin()
                // navigate("/home")
            }
            if (responce.data.status === 500) {
                console.log("User Already Exist")
            }
            setusername("")
            setPassword("")
            // navigate("/home")
        } catch (error) {
            console.log("error iss:::> ", error)
        }
    }

    const waitAfterLogin = () => {
        setWaiting(true)
        setTimeout(() => {
            setWaiting(false)
            // navigate("/home")
        }, 3000);
    }

    useEffect(async () => {
        // return console.log("unmounting")
      try {
            const responce = await axios.get("http://localhost:3000/api/checkIFlogin", { withCredentials: true })
            console.log(responce.data.status)
            console.log(responce.data.message)
            console.log(responce.data.userData.username)
            if (responce.data.status === 200) {
                // setName(responce.data.userData.username)
                hmm(responce.data.userData.username)
                setisLoggedIn(true)
                console.log("check works")
            }
            if (responce.data.status === 500) {
                console.log("some error relatd to cookies")
            }
        } catch (error) {
            console.log("error iss:::> ", error)
        }
    }, [])
    
    function hmm(itsname) {setName(itsname)}
    return (<>
        {isLoggedIn ? (<>
            <motion.div className='h-[100vh] w-full flex flex-col justify-center items-center bg--950 backdrop-blur-[6px] absolute top-0'
                variants={animationVariants}
                initial="hidden" // Initial animation state
                animate="visible" // Animation state when the component is mounted
                exit="exit" // Animation state when the component is unmounted
                transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
            >
                <div className='gap-4 p-3 bg--300 flex mb-32 flex-col justify-center items-center'>
                    <div className='bg-slate-300 p-3 rounded-full w-40 h-40 text-8xl flex justify-center items-center'>
                        <LuUserRound className='text-gray-700' />
                    </div>
                    <p className='text-[45px] text-slate-200 font-light'>{name}</p>
                    <div className='flex w-80 h-10 bg--300'>
                        <div className='w-[84%] h-full bg-slate-200'>
                            <input
                                autoFocus
                                required
                                type="text"
                                className='bg-slate-300 w-full h-full focus:border-[1px] border-gray-600 outline-none px-2 text-[#1a1a1a] placeholder:text-gray-700 placeholder:opacity-85'
                                placeholder='Password'
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div onClick={handleClick} className=' border-2 border-slate-400 bg-[#94a3b838] w-[16%] text-white flex justify-center items-center'>
                            <IoArrowForward className='text-2xl' />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>) : (<>
            <motion.div className='h-[100vh] w-full flex flex-col justify-center items-center bg--950 backdrop-blur-[6px] absolute top-0'
                variants={animationVariants}
                initial="hidden" // Initial animation state
                animate="visible" // Animation state when the component is mounted
                exit="exit" // Animation state when the component is unmounted
                transition={{ duration: 0.5, ease: "easeOut" }} // Animation duration and easing
            >
                <div className='gap-4 p-3 bg--300 flex mb-32 flex-col justify-center items-center'>
                    <div className='bg-slate-300 p-3 rounded-full w-40 h-40 text-8xl flex justify-center items-center'>
                        <LuUserRound className='text-gray-700' />
                    </div>
                    <p className='text-[45px] text-slate-200 font-light'>New User</p>
                    <div className='flex w-80 h-10 bg--300'>

                        <div className='w-[100%] h-full bg-slate-200'>
                            <input
                                autoFocus
                                required
                                type="text"
                                className='bg-slate-300 w-full h-full focus:border-[1px] border-gray-600 outline-none px-2 text-[#1a1a1a] placeholder:text-gray-700 placeholder:opacity-85'
                                placeholder='Username'
                                value={username}
                                onChange={NewhandleChangeUSERNAME}
                            />
                        </div>
                    </div>
                    <div className='flex w-80 h-10 bg--300'>

                        <div className='w-[84%] h-full bg-slate-200'>
                            <input
                                required
                                type="password"
                                className='bg-slate-300 w-full h-full focus:border-[1px] border-gray-600 outline-none px-2 text-[#1a1a1a] placeholder:text-gray-700 placeholder:opacity-85'
                                placeholder='Password'
                                value={password}
                                onChange={NewhandleChangePASSWORD}
                            />
                        </div>
                        <div onClick={NewhandleClick} className=' border-2 border-slate-400 bg-[#94a3b838] w-[16%] text-white flex justify-center items-center'>
                            <IoArrowForward className='text-2xl' />
                        </div>
                    </div>
                    {waiting ? (<>
                    <div className='mt-[px] flex items-center justify-center gap-3'>
                        <img src={bootingAnimation} alt="" className='w-10' />
                        <p className='text-slate-200 font- text-2xl'>Welcome</p>
                    </div>
                    </>):(<></>)}
                    
                </div>
                <div className='w-20 bg--500 h-20 flex justify-center items-center absolute bottom-0 right-0'>
                    <CiPower onClick={() => { setPowerButtonOn(!powerbuttonOn) }} className='text-4xl w-[60%] h-[60%] p-1 text-white  bg--600 active:scale-95 cursor-pointer' />
                    {powerbuttonOn ? (<>
                        <div className=' whitespace-nowrap bg-[#48536152] flex flex-col gap-  justify-between absolute bottom-[65px] right-2'>
                            <div onClick={() => { console.log("reboot"); navigate("/reboot") }} className='px-3 py-3 text-slate-200 flex justify-end border-b-2 border-slate-400 border-opacity-15 cursor-pointer'>Reboot</div>
                            <div onClick={() => { console.log("shut down"); navigate("/shutdown") }} className='px-3 py-3 text-slate-200 flex justify-end border-b-2 border-slate-400 border-opacity-15 cursor-pointer'>Shutdown</div>
                            <div onClick={() => { console.log("Log Out") }} className='px-3 py-3 text-slate-200 flex justify-end border-b-2 border-slate-400 border-opacity-15 cursor-pointer'>Log Out</div>
                            <div onClick={() => { console.log("SAHIL BHAI") }} className='px-3 py-3 text-slate-200 flex justify-end  border-b-2 border-slate-400 border-opacity-15 cursor-pointer'>About Developer </div>
                        </div>
                    </>) : null}
                </div>
            </motion.div>
        </>)}
    </>)
}

export default LoginScreen