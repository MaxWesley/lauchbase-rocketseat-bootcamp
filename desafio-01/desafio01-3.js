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
        if (usuario.tecnologias[i] === "CSS")
            return true;
    }

    return false
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    }
}

// =============================================================================
// Soma de despesas e receitas

const usuarios02 = [
    {
        nome: "Salvio",
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: "Marcio",
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: "Lucia",
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(receitas, despesas) {
    return somaNumeros(receitas) - somaNumeros(despesas)
}

function somaNumeros(numeros) {
    let soma = 0

    numeros.forEach(numero => {
        soma += numero
    })

    return soma
}


usuarios02.forEach(user => {
    let saldo = calculaSaldo(user.receitas, user.despesas)
    let statusSaldo = calculaSaldo(user.receitas, user.despesas) > 0 ? "POSITIVO" : "NEGATIVO"

    console.log(`${user.nome} tem saldo ${statusSaldo} de ${saldo}`)
})