const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const teamArray = []



const writeFileAsync = util.promisify(fs.writeFile);

const mainMenuPrompt = () => {
    return inquirer.prompt([
    {
        type: 'list',
        name: '',
        message: 'Pick your employee',
        choices: ['Engineer', 'Inter', 'Manager']
    }
    ])
}
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your id?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ]);
};

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <div class="card">
        <div class="card-body">
            <h1 class="display-4">Hi! My name is ${answers.name}</h1>
            <p class="lead">I am from ${answers.location}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item">My GitHub username is ${answers.github}</li>
                <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
            </ul>
        </div>
    </div>
  </div>  
</body>
</html>`;

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();