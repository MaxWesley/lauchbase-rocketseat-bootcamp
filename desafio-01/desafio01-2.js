// Desafio 01.2 - Launchbase, Rocksetseat

// =============================================================================
// Lidando com objetos e vetores

const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

const programador = {
    nome: "Max Wesley",
    idade: 22,
    tecnologias: [
        {
            nome: "Javascript",
            especialidade: "Web/Mobile"
        },
        {
            nome: "ReactJS",
            especialidade: "Web"
        },
        {
            nome: "ReactNative",
            especialidade: "Mobile"
        },
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)