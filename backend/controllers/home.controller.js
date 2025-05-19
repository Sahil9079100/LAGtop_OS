import express from 'express'
import cookieParser from 'cookie-parser'
import { User } from '../models/User/User.model.js'
import bcrypt from 'bcrypt'
// import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

express().use(cookieParser())

// const loginUser = (req,res)=>{
//     console.log("loginUser")
//     res.send("loginUser")
// }

const userDetails = (req, res) => {
    console.log("userDetails")
    res.send("userDetails")
}

const makeUser = (req, res) => {
    console.log(req.body)
    try {
        const { username, password, userKey } = req.body
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) {
                    console.log("error iss:::> ", err)
                    res.status(200).json({ status: 500, message: "Error while creating user HASH" })
                }

                let user = await User.findOne({ username: username })
                if (user) {
                    console.log("User already exists")
                    return res.status(200).json({ status: 500, message: "Username already exists" })
                }
                const newUser = new User({
                    username,
                    password: hash,
                    userKey
                })
                await newUser.save()

                // this will set the cookie in the browser
                // let uk = jwt.sign({ userKey }, process.env.SECRET_KEY)
                // console.log(wardernToken)
                let ok = req.body.userKey
                res.cookie("uk", ok, { httpOnly: true, secure: true, sameSite: 'none' });

                console.log("user created")
                res.status(200).json({ status: 200, message: "User Created" })
            })
        })

    } catch (error) {
        console.log("error iss:::> ", error)
        res.status(200).json({ status: 500, message: "Error while creating user" })
    }
}


const loginUser = async (req, res) => {
    const cookieData = req.cookies.uk
    let user = await User.findOne({ userKey: cookieData })
    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
            console.log("error iss:::> ", err)
            res.status(200).json({ status: 500, message: "Error while logging in" })
        }
        if (result) {
            console.log("User logged in")
            res.status(200).json({ status: 200, message: "User logged in" })
        } else {
            console.log("Invalid password")
            res.status(200).json({ status: 500, message: "Invalid password" })
        }
    })
}

const checkIFlogin = async (req, res) => {
    const cookieData = req.cookies.uk
    console.log("cookieData", cookieData)
    console.log("reqcookies")
    if (!cookieData) {
        return res.status(200).json({ status: 500, message: "User not found" })
    }

    const user = await User.findOne({ userKey: cookieData })
    res.status(200).json({ status: 200, message: "User found", userData: user })
}

// var testObject = { 'one': 1, 'two': 2, 'three': 3 };
// //Put the object into storage
// localStorage.setItem('testObject', JSON.stringify(testObject));
// //Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');
// console.log('retrievedObject: ', JSON.parse(retrievedObject));

const Logout = async (req, res) => {
    try {
        const cookieData = req.cookies.uk
        let user = await User.findOne({ userKey: cookieData })
        // const logUser = { [user.username]: cookieData };
        // console.log(logUser)
        // localStorage.setItem([user.username], cookieData);
        // res.clearCookie("uk")
        res.status(200).json({ status: 200, message: "User logged out", name: user.username, userKey: cookieData  })
    } catch (error) {
        console.log("error iss:::> ", error)
        res.status(200).json({ status: 500, message: "Error while logging out"})
    }
}

const getPrevUser = (req, res) => {
    const user = localStorage.getItem("user")
    if (user) {
        const prevData = JSON.parse(user)
        res.status(200).json({ status: 200, message: "Previous User found", userData: prevData })
    }
    return res.status(200).json({ status: 200, message: "Previous User not found, new user." })
}


export { loginUser, Logout, userDetails, makeUser, checkIFlogin }