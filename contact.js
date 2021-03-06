#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');

const questions = [{
    type: 'input',
    name: 'firstname',
    message: 'what is your first name?'
},
{
    type: 'input',
    name: 'lastname',
    message: 'what is your lastname?'
},
{
    type: 'input',
    name: 'phone',
    message: 'what is your phone number?'
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email?'
}]

const { addContact, getContact} = require('./Logic');

program
    .command('addContact')
    .alias('a')
    .description('Add a Contact')
    .action(()=> {
        prompt(questions).then(answers => 
        addContact(answers));

    })

program
    .version('0.0.1')
    .description('Contact management system')

program
    .command('addContact <firstname> <lastname> <email> <phone number>')
    .alias('a')
    .description('Add a contact')
    .action((firstname, lastname) => {
        addContact({firstname, lastname, phone, email})
    });
program
    .command('getContact <name>')
    .alias('r')
    .description('Get Contact')
    .action(name => getContact(name))

    program.parse(process.argv);

if (!process.argv.slice(2).length || !/[ardul]/.test(process.argv.slice(2))) {
    program.outputHelp();
    program.exit();
}

program.parse(process.argv)