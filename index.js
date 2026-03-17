const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require("body-parser")
const path = require("path")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.static(path.join(__dirname, "views/css/")))
app.use(express.static(path.join(__dirname, "views/js/")))

// IMPORTA AS ROTAS
const routes = require("./route")

// USA AS ROTAS 👇 (ESSA LINHA FALTAVA)
app.use("/", routes)

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})