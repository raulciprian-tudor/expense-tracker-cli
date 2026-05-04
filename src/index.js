#!/usr/bin/env node
import { Command } from 'commander'
import { addExpense } from './commands/add.js'
import { deleteExpense } from './commands/delete.js'

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

    })

program
    .command('summary')
    .option('--month [month]')
    .action((options) => {

    })

program
    .command('update')
    .option('--id <id>')
    .option('--description <description>')
    .option('--amount <amount>')
    .action((options) => {

    })

program.parse()
