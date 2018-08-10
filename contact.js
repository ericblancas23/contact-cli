const program = require('commander');

const { addContact, getContact} = require('./Logic');

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