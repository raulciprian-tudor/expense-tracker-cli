import {loadExpenses} from '../storage.js';

const summaryExpenses = async (month) => {
    const data = await loadExpenses();

    if (!month) {
        const total = data.expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
        console.log(`Total expenses: $${total}`)
        return
    }

    const monthInt = parseInt(month)

    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
        console.log('Month must be a number between 1 and 12')
        return
    }

    const filtered = data.expenses.filter(expense => {
        const expenseMonth = parseInt(expense.createdDate.split('-')[1])
        return expenseMonth === monthInt
    })

    const total = filtered.reduce((sum, expense) => sum + parseFloat(expense.amount), 0)
    const monthName = new Date(2024, monthInt - 1).toLocaleString('default', {month: 'long'})
    console.log(`Total expenses for ${monthName}: $${total}`)
}

export {summaryExpenses}
