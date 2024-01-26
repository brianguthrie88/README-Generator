const inquirer = require('inquirer');
const fs = require('fs');

function writeLicense(license) {
    switch(license)
    {
        case 'Apache 2.0 License':
            return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
          break;
        case 'Boost Software License 1.0':
          return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
          break;
        case 'IBM Public License Version 1.0':
          return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
          break;
        default:
          console.log("No license was picked");
          break;
      }
}

const generateREADME = ({ title, description1, description2, description3, description4, installation, usage, license, contributing, tests, githubUserName, email }) =>
`${writeLicense(license)}

# ${title}
    
## Description
${description1}
${description2}
${description3}
${description4}
     
## Table of Contents
* [Go to the Installation section](#installation)

* [Go to the Usage section](#usage)

* [Go to the License section](#license)

* [Go to the Contributing section](#contributing)

* [Go to the Tests section](#tests)

* [Go to the Questions section](#questions)

## Installation
${installation}
     
## Usage
${usage}
     
## License
This application is covered under ${license}.
     
## Contributing
${contributing}
     
## Tests
${tests}
     
## Questions
You can reach me with any questions at my email: ${email}.
Or my github: https://github.com/${githubUserName}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description1',
      message: 'What was your motivation?',
    },
    {
      type: 'input',
      name: 'description2',
      message: 'Why did you build this project?',
    },
    {
      type: 'input',
      name: 'description3',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'description4',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage information?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license is this application covered under?',
      choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'IBM Public License Version 1.0'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What is the test instructions?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
    {
      type: 'input',
      name: 'githubUserName',
      message: 'Enter your github username.',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('GeneratedREADME.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });