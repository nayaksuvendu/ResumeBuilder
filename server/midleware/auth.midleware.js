const AppError = require('../midleware/errorMidleware.js')
const JWT=require('jsonwebtoken');
const dotenv=require('dotenv');
const express = require('express');
const app = express();
dotenv.config();
const {logout} = require('../controllers/Usercontrollers.js')

const isLoggedin = async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        app.use(logout);
        return next(new AppError('unauthenticated, please login again',401))
    }

    const userDetails = await JWT.verify(token, process.env.JWT_SECRET);
    req.user = userDetails;
    // console.log("req.user is",userDetails);
    next(); // control send to next controler
}

module.exports = {isLoggedin};