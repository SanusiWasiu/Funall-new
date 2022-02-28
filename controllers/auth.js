// const { BadRequestError } = require('../error')
const User = require('../models/user')
const passport = require('passport');
const LocalStrategy = require('passport-local');
const crypto = require('crypto');
const db = require('../database/db');



const register = async (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/register'
    });
}

const login = async (req, res) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
    });
    // res.send('login user')
    // const { email, password } = req.body
    // if(!email || !password){
    //     throw new BadRequestError('Please provide email and password')
    // }
}

module.exports = {
    register,
    login
}