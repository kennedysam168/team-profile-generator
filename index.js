const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

let teamArray = [];

function initial() {
    managerFunc()
}
    function managerFunc(){
        console.log("team builder start with manager")
        inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'enter the managers name',
        },
        {
            type: 'input',
            name: 'id',
            message: 'enter the managers id number',
            validate: (answer)=>{
                let trim = answer.trim('')
                if (isNaN(trim)){
                    return 'Enter a Number'
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'enter the managers email address',
            validate: (answer)=>{
                let isEmail = answer.match(/\S+@\S+\.\S+/)
                if (isEmail){
                    return true;
                }
                return 'Please Enter an Email'
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'enter the managers office number',
            validate: (answer)=>{
                let trim = answer.trim('')
                if (isNaN(trim)){
                    return 'Enter a Number'
                }
                return true;
            }
        }
        ])
        .then((answer) => {
            const newManager = new Manager(
                answer.name, answer.id, answer.email, answer.officeNumber
            )
            teamArray.push(newManager)
            teamMenu();
        })

    }


    function teamMenu(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'nextEmployee',
                message: 'choose an employee to add or quit',
                choices: ['engineer', 'intern', 'quit']
            }
        ])
        .then((answer)=>{
            switch (answer.nextEmployee) {
                case 'engineer': 
                    // return 'you chose engineer';
                    engineerFunc();

                    break;
                case 'intern':
                    internFunc();

                    break;
            
                default:
                    // add html render function;
            }
        })
    }


    function engineerFunc(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'enter engineers name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'enter engineers id'
            }, {
                type: 'input',
                name: 'email',
                message: 'enter engineers email'
            },
            {
                type: 'input',
                name: 'github',
                message: 'enter engineers github username'
            }
        ])
        .then((answer) => {
            const newEngineer = new Engineer(
                answer.name, answer.id, answer.email, answer.github
            )
            teamArray.push(newEngineer);
            teamMenu();
        })
        
    }


    function internFunc(){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'enter interns name'
            },
            {
                type: 'input',
                name: 'id',
                message: 'enter interns id'
            }, {
                type: 'input',
                name: 'email',
                message: 'enter interns email'
            },
            {
                type: 'input',
                name: 'school',
                message: 'enter interns school'
            }
        ])
        .then((answer) => {
            const newIntern = new Intern(
                answer.name, answer.id, answer.email, answer.school
            )
            teamArray.push(newIntern);
            teamMenu();
        })
        
    }
  




initial();



// inquirer 
//     .prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'what is your name?',
//             validate: (answer)=>{
//                 answer ? true : console.log('Enter at least one Letter');
//             }
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'what is your id?',
//             // need to add validation?
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'what is your email?'
//             // need to add validation?
//         },
//         {
//             type: 'list',
//             name: 'role',
//             choices: ["Manager", "Engineer", "Intern"]
//             // need to add validation?
//         }

//     ]);

//         if (response.role === "Manager") {
//             inquirer.prompt([{
//                 type: "input",
//                 name: "",
//                 message: "What is the office number?",
//             }])
//         }
    
    //how do i handle the position specific prompts, like github or school or office-number?



    //add writeFileSync to create the html page once prompts are answered