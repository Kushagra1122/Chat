const express = require("express");
const { isAuthenticated } = require("../middleware/isAuth");
const { sendMessage, getMessage } = require("../controllers/message");




const router = express.Router()



router.post("/send/:id", isAuthenticated, sendMessage);
router.get("/:id", isAuthenticated, getMessage);

module.exports = router