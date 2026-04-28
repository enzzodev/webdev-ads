exports.main = (req, res) => {
    res.render('index')
}

exports.contato = (req, res) => {
    
    res.render("contato")
}

exports.contatoPost = (req, res) => { 
    console.log(req.body)
    const nome = req.body.user_name
    
    res.render("profile", { nome })

}