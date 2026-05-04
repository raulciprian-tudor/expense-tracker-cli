import { loadExpenses, saveExpenses } from '../storage.js';
import { validateDescriptionAndAmount, validateId } from "../utils/validators.js";

const addExpense = async(description, amount) => {
    const data = await loadExpenses();
    let id = 1
    const date = new Date();

    if (!description || description.trim() === '') {
        console.log('Description is required');
        return
    }

    if (!amount) {
        console.log('Amount is required');
        return
    }

    if (isNaN(amount)) {
        console.log('Amount must be a number');
        return
    }

    if (amount <= 0) {
        console.log('Amount must be greater than 0');
        return
    }

    if (data.expenses.length === 0) {
        id = 1
    } else {
        id = data.expenses[data.expenses.length - 1].id + 1
    }

    const createdDate = date.toISOString().split('T')[0];

    data.expenses.push({id, description, amount, createdDate});
    await saveExpenses(data);

    console.log(`Expense added successfully (ID: ${id})`);
}

export { addExpense }
