import {loadExpenses, saveExpenses} from "../storage.js";

const updateExpense = async (id, description, amount) => {
    const data = await loadExpenses();

    if (!id) {
        console.log('ID is required');
        return
    }

    const commandId = parseInt(id);


    if (isNaN(commandId)) {
        console.log('ID must be a number');
        return
    }

    if (!description && !amount) {
        console.log('At least one of description or amount is required')
        return
    }

    if (description && description.trim() === '') {
        console.log('Description cannot be empty');
        return
    }

    if (amount !== undefined && isNaN(amount)) {
        console.log('Amount must be a number');
        return
    }

    if (amount !== undefined && amount <= 0) {
        console.log('Amount must be greater than 0');
        return
    }

    const expenseIndex = data.expenses.findIndex(expense => expense.id === commandId);

    if (expenseIndex === -1) {
        console.log(`Expense with ID ${commandId} not found`);
        return
    }

    const updates = {}
    if (description) updates.description = description
    if (amount) updates.amount = amount

    data.expenses[expenseIndex] = {...data.expenses[expenseIndex], ...updates}

    await saveExpenses(data);
    console.log(`Expense updated successfully`);
}

export {updateExpense}
