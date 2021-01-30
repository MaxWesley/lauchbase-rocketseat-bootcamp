// Desafio 01.1 - Launchbase, Rocksetseat


// =============================================================================
// Cálculo de IMC

function CalculoIMC(nome, peso, altura) {
    const imc = peso / (altura * altura)

    if (imc >= 30) {
        console.log(`${nome} você está acima do peso.`)
    } else {
        console.log(`${nome} você não está acima do peso.`)
    }
}


CalculoIMC("Max Wesley", 84, 1.80)
// =============================================================================
// Aposentadoria

function CalculoAposentadoria(nome, sexo, idade, contribuicao) {
    if (sexo === "M") {
        if (idade >= 35) {
            if ((contribuicao + idade) >= 95) {
                console.log(`${nome}, você pode se aposentar!`)
            } else {
                console.log(`${nome}, não você pode se aposentar!`)
            }
        } else {
            console.log(`${nome}, você não pode se aposentar!`)
        }
    }

    if (sexo === "F") {
        if (idade >= 30) {
            if ((contribuicao + idade) >= 85) {
                console.log(`${nome}, você pode se aposentar!`)
            }
            else {
                console.log(`${nome}, não você pode se aposentar!`)
            }
        } else {
            console.log(`${nome}, você não pode se aposentar!`)
        }
    }
}

CalculoAposentadoria("Silvana", "M", 45, 49)