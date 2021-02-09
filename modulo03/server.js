// 1 - inicializa o servidor
const express = require('express')
const nunjucks = require('nunjucks') // importa nunjucks

const server = express()
const videos = require('./data')

server.use(express.static('public')) // configura o express para server os arquivos estáticos(enxergar)

server.set("view engine", "njk") // define a template engine a ser usada

// configuração do nunjucks
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// 2 - define as rotas do server
server.get("/", (req, res) => {
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/22206863?s",
        name: "Max Wesley",
        role: 'Desenvolvedor Front-end | <strong>Kludge Studio</strong>',
        description: "Estudante do 6º Período de Ciência da Computação, no Centro Universitário Carioca - UniCarioca.",
        links: [
            {
                name: "Github",
                url: "https://github.com/MaxWesley"
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/maxwesleydev/"
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/max-wesley-0b721a140/"
            },
        ]
    }

    return res.render("about", { about }) // renderiza uma página
})
server.get("/portfolio", (req, res) => {
    return res.render("portfolio", { items: videos }) // renderiza uma página
})

server.get("/video", function (req, res) {
    const id = req.query.id;

    const video = videos.find(function (video) {
        if (video.id === id) {
            return true
        }
    })

    if (!video) {
        return res.send("Video not found!");
    }

    return res.render("video", { item: video })
})

// 3 - define qual porta será escutada pelo server
server.listen(5000, () => {
    console.log("Server is running");
})