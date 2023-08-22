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

function viewAllEmployees() {
    connection.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        console.table(results);
        mainMenu();
    });
}

function addEmployee() {
    inquirer
        .prompt ([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter first name.',
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter last name',
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select role',
                choices: ['Manager', 'Developer', 'Designer', 'other'],
            },
            {
                type: 'imput',
                name: 'department',
                message: 'Enter department',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary',
            },
        ])

        .then(answers => {
            const query = 'INSERT INTO employees SET?';
            connection.query (query, answers, (err, results) =>{
                if (err) throw err;
                console.log ('Employee added successfully');
                mainMenu();
            });
        });

        connection.connect(err => {
            if (err) throw err;
            console.log('Connected to the database.');
          
            mainMenu();
          });
}