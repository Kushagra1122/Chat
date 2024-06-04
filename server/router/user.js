const express = require("express")
const { register, login, getOtherUsers } = require("../controllers/user")
const { isAuthenticated } = require("../middleware/isAuth")



const router = express.Router()

router.post("/register", register)
router.post("/login", login)

router.get("/get", isAuthenticated, getOtherUsers);



module.exports = router