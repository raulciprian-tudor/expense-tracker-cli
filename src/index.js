#!/usr/bin/env node
import { Command } from 'commander'
const program = new Command()

program
    .name('expense-tracker')
    .version('1.0.0')

program
    .command('add')
    .option('--description <description>')
    .option('--amount <amount>')
    .action((options) => {

    })

program
    .command('delete')
    .option('--id <id>')
    .action((options) => {

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
