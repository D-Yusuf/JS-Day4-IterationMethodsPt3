const transactions = [
    ["income", 1000],
    ["income", 1500],
    ["expense", 500],
    ["expense", 300],
    ["income", 700],
];

const incomes = transactions.filter(trans=>{
    return trans[0] == "income"
})
const expenses = transactions.filter(trans=>{
    return trans[0] == "expense"
})

const getTotalIncome = ()=> {
    let total = 0
    incomes.forEach(trans=>{
        total += trans[1]
    })
    return total
}
const getTotalExpense = ()=> {
    let total = 0
    expenses.forEach(trans=>{
        total += trans[1]
    })
    return total
}

const netTotal = getTotalIncome() - getTotalExpense()

const aboveValueTransactions = (val = 500)=>{
    return transactions.filter(trans=>trans[1] > 500)
}
console.log(aboveValueTransactions())