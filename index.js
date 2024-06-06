const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router1 = require("./router/user")

const router2 = require("./router/message")
const cookieParser = require("cookie-parser");
const path = require("path")
const { app, server } = require('./socket/socket')
app.use(cookieParser());
require("dotenv").config()



app.use(cors());

app.use(express.json())


app.use(express.static(path.join(__dirname, "./client/build")));
app.use("/api/auth", router1)

app.use("/api/message", router2)

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
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


