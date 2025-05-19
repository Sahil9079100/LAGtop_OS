import express from 'express';
// import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/home.controller.js';
import { loginUser, Logout, userDetails, makeUser, checkIFlogin } from '../controllers/home.controller.js';

const router = express.Router();

router.post('/loginUser', loginUser)
router.get('/logoutUser', Logout)
router.post('/makeUser', makeUser)
router.get('/userDetails', userDetails)
router.get('/checkIFlogin', checkIFlogin)


export default router;