const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router1 = require("./router/user")

const router2 = require("./router/message")
const cookieParser = require("cookie-parser");

const {app,server}=require('./socket/socket')
app.use(cookieParser());
require("dotenv").config()


const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOption)); 

app.use(express.json())



app.use("/api/auth", router1)

app.use("/api/message", router2)


mongoose
    .connect(process.env.URI, {

    })
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });
const port = process.env.PORT
server.listen(port, () => {
    console.log(`Started at ${port}`)
})


