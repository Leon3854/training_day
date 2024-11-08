import express from 'express'
import { authUser, registerUser } from './auth.controller.js'

// router - маршрутизатор
// route - маршрут

const router = express.Router()
//
router.route('/login').post(authUser)
router.route('/register').post(registerUser)

export default router
