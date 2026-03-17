const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render('index')
})

router.get("/sobre", (req, res) => {
    res.render("sobre")
})

module.exports = router

router.get("/contato", (req, res) => {
    res.render("contato")
})

