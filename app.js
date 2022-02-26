require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const { Sequelize } = require('sequelize/types');
const db = require('./database/db')

// db 

// routers

// error handlers

// routes

// middlewares
app.use(express.json())
// app.use(bodyParser.json())

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