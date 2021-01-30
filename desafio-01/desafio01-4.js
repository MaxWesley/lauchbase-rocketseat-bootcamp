// Desafio 01.2 - Launchbase, Rocksetseat

// =============================================================================
// Aplicação: Operações bancárias

// pt 1

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

function createTransaction(transaction) {
    user.transactions.push(transaction);

    if (transaction.type === "credit") {
        user.balance += transaction.value
    }

    if (transaction.type === "debit") {
        user.balance -= transaction.value
    }
}

function getHigherTransactionByType(type) {
    let htByType = { type: "", value: 0}

    for (let i = 0; i < user.transactions.length; i++) {
        if (user.transactions[i].type === type) {
            if (user.transactions[i].value > htByType.value) {
                htByType = user.transactions[i]
            }
        }
    }

    console.log(htByType);

    return htByType
}

function getAverageTransactionValue() {
    let total = 0
    user.transactions.forEach(transaction => {
        total+=transaction.value
    })

    let media = total / user.transactions.length

    console.log(media)

    return media
}

function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }

    user.transactions.forEach(transaction => {
        if(transaction.type === "credit") count.credit += 1
        else count.debit += 1
    })

    console.log(count)
    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }