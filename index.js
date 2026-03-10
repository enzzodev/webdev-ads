const express = require("express")
const { engine } = require("express-handlebars")
const bodyParser = require('body-parser')
const path = require("path")

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'views/css/')))
app.use(express.static(path.join(__dirname, 'views/js/')))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/sobre/{:id}", (req, res) => {

    const id = req.params.id
    
    res.render("sobre", { id })
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})