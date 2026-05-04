import { loadExpenses, saveExpenses } from "../storage.js";

const deleteExpense = async (id) => {
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

    const expenseIndex = data.expenses.findIndex(expense => expense.id === commandId);

    if (expenseIndex === -1) {
        console.log(`Expense with ID ${commandId} not found`);
        return
    }

    data.expenses.splice(expenseIndex, 1);
    await saveExpenses(data);
    console.log(`Expense deleted successfully`);
}

export { deleteExpense }
