// server inicialization
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

// nunjucks configurations
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noCache: true
})

// define routes
server.get('/', (req, res) => {
    const courses = [
        {
            id: "mapas-com-react-usando-leaflet/",
            title: "Mapas com React usando Leaflet",
            author: "Thiago Marinho",
            duration: "11 minutos de leitura"
        },
        {
            id: "como-renomear-varios-arquivos-de-uma-vez-usando-o-terminal/",
            title: "Como renomear vários arquivos de uma vez usando o terminal",
            author: "Thiago Marinho",
            duration: "2 minutos de leitura"
        },
        {
            id: "nextjs-novidades-na-versao-10-e-atualizacao-do-blog-para-melhorar-a-performance/",
            title: "Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance",
            author: "Thiago Marinho",
            duration: "4 min de leitura"
        },
    ]

    return res.render('courses', { courses });
})

server.get('/about', (req, res) => {
    return res.render('about');
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

// starting server
server.listen(5000, () => {
    console.log("Server listening on port 5000")
})