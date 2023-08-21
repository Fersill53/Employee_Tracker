const inquirer = require("inquirer");

const connection = require('./db');

function mainMenu() {
    inquirer
        .prompt ([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    'View employees',
                    'Add employee',
                    'Exit'
                ]
            }
        ])

        .then(answer => {
            switch (answer.action) {
                case 'View all employees':
                    break;
                case 'Add employee':
                    break;
                case 'Exit':
                    connection.end();
                    break;
            }
        })
}

mainMenu();