const express = require("express")
const app = express()
const bodyparser =require("body-parser")

//routers
const home = require("./home")
const auth = require("./auth")


//middle-wards
app.use("/",home)
app.use("/auth",auth)
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))

app.listen(3000)