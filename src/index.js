#!/usr/bin/env node
import { Command } from 'commander'
import { addExpense } from './commands/add.js'
import { deleteExpense } from './commands/delete.js'
import { updateExpense } from "./commands/update.js";
import { listExpenses } from "./commands/list.js";
import { summaryExpenses } from "./commands/summary.js";

const program = new Command()

program
    .name('expense-tracker')
    .version('1.0.0')

program
    .command('add')
    .option('--description <description>')
    .option('--amount <amount>')
    .action((options) => {
        addExpense(options.description, options.amount)
    })

program
    .command('delete')
    .option('--id <id>')
    .action((options) => {
        deleteExpense(options.id)
    })

program
    .command('list')
    .action(() => {
        listExpenses()
    })

program
    .command('summary')
    .option('--month [month]')
    .action((options) => {
        summaryExpenses(options.month)
    })

program
    .command('update')
    .option('--id <id>')
    .option('--description <description>')
    .option('--amount <amount>')
    .action((options) => {
        updateExpense(options.id, options.description, options.amount)
    })

program.parse()
