// Desafio 01.2 - Launchbase, Rocksetseat

// =============================================================================
// Funções e estruturas de repetição

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

usuarios.forEach(user => {
    console.log(`${user.nome} trabalha com ${user.tecnologias[0]}, ${user.tecnologias[1]}`)
})

function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if(usuario.tecnologias[i] === "CSS") 
        return true;
    }

    return false
}

