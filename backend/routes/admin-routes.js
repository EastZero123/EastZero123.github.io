const express = require("express")

const adminController = require("../controllers/admin-controllers")

const router = express.Router()

router.post("/create", adminController.createSport)

router.get("/", adminController.getSport)

module.exports = router
