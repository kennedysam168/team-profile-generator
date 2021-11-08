const inquirer = require(inquirer);


inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is your id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is your email?'
        }
    ]);