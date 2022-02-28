const express = require('express');
const router = express.Router();



const { login, register } = require('../controllers/auth')

router.post('/register', register)
router.post('/login', login)

// router.post('/login/password', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login'
// }));

module.exports = router