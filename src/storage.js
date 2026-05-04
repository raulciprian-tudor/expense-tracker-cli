import {readFile, writeFile} from 'fs/promises'
import {fileURLToPath} from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DB_PATH = path.join(__dirname, '/data/expenses.json')

// Helper - read expenses from JSON
const loadExpenses = async () => {
    try {
        const data = await readFile(DB_PATH, 'utf-8')
        return JSON.parse(data)
    } catch (err) {
        if (err.code === 'ENOENT') {
            return {
                "expenses": []
            }
        }

        throw err
    }
}

// Helper - save expenses to JSON
const saveExpenses = async (data) => {
    await writeFile(DB_PATH, JSON.stringify(data, null, 2))
}

export {loadExpenses, saveExpenses}
