require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser');
const notFoundMiddleware = require('./middleware/not-found')
const cors = require('cors')
const models = require('./models')
// const { Sequelize } = require('sequelize/types');

app.get('/', async (req, res) => {
    res.send('Welcome to Fundall app');
});
// // Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// db 
const db = require('./database/db')
// routers
const authRouter = require('./routes/auth')
// error handlers

// routes
app.use('/api/v1/auth', authRouter)
// middlewares
app.use(express.json())
app.use(notFoundMiddleware)
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
//load passport strategies
require('./middleware/passport')(passport, models.user)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        db.authenticate()
            .then(() => {
                console.log("database connected");
            })
            .catch((err) => console.log("Unable to connect to database", err));
        app.listen(port, () => 
            console.log(`Server listening on port ${port}`)
        )
    } catch (error) {
        console.log(error)
    }
};

start();