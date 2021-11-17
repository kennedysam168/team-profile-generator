# team-profile-generator

## Description
For this project I was tasked with creating a way to use the terminal to prompt a user to add employees to a file, and once the employees information is added it creates a section for that employee on the webpage. This project used jest to test the files and inquirer to prompt the user in the terminal.


## Usage
To use this project to add your own team members, you first need to open the terminal. Once the terminal is open you then enter node index.js (or the file name that has your inquirer prompts) and begin to answer the prompts. Once you get to a section to add a engineer, intern, or quit, you choose your option. Selecting engineer or intern will allow you to add a new employee of that title. Choosing quit will end the prompts and generate your html file for the webpage with the employees added.

## Demo
https://watch.screencastify.com/v/wlxxpOGa509XJC5KhNoE


## Software used
Jest to run the tests. Inquirer to prompt the user.

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated