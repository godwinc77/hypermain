const express = require("express")
const router = express.Router()
const bodyparser =require("body-parser")

router.use(bodyparser.json())
router.use(bodyparser.urlencoded({ extended: true }))

router.post("/register", function(req,res){
    var formdata = req.body
    console.log(formdata)
    res.send("submited")
})

module.exports = router