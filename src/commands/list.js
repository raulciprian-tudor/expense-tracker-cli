import {loadExpenses} from '../storage.js';

const listExpenses = async () => {
    const data = await loadExpenses();

    data.expenses.forEach(expense => {
        console.log('ID\tDate\t\tDescription\tAmount')
        data.expenses.forEach(expense => {
            console.log(`${expense.id}\t${expense.createdDate}\t${expense.description}\t$${expense.amount}`)
        })
    })

    console.log(`Total expenses: ${data.expenses.length}`);
}

export { listExpenses }
