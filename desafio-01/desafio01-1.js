// Desafio 01.1 - Launchbase, Rocksetseat


// =============================================================================
// Cálculo de IMC

const nome = "Max Wesley"
const peso = 98
const altura = 1.80

const imc = peso / (altura * altura)

(imc >= 30) ?
    console.log(`${nome} você está acima do peso.`)
    :
    console.log(`${nome} você não está acima do peso.`)