const fs = require('fs');
const inquirer = require('inquirer');
const { isBuffer } = require('lodash');

// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of 
// my project and sections entitled Description, Table of Contents, 
// Installation, Usage, License, Contributing, Tests, and Questions

inquirer
  .prompt([  
// WHEN I enter my project title
// THEN this is displayed as the title of the README
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title"
    },
// WHEN I enter a description, installation instructions, usage information, 
// contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled 
// Description, Installation, Usage, Contributing, and Tests
    {
      type: "input",
      message: "Enter a description of your project:",
      name: "description"
    },
    {
      type: "input",
      message: "Enter installation instructions for your project:",
      name: "installation"
    },
    {
      type: "input",
      message: "Enter usage information:",
      name: "usage"
    },
    {
      type: "input",
      message: "Enter any contribution guidelines:",
      name: "guidelines"
    },
    {
      type: "input",
      message: "Enter test instructions:",
      name: "test"
    },
// WHEN I choose a license for my application from a list of options
    {
      type: "list",
      message: "Choose a license for your application:",
      choices: ["Apache","Boost","BSD","Eclipse", "GNU","IBM","ISC","MIT","Mozilla","Unlicense"],
      name: "license",
    },
// WHEN I enter my GitHub username
    {
      type: "input",
      message: "Enter Github username:",
      name: "github"
    },
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
    {
      type: "input",
      message: "Enter email address:",
      name: "email"
    },
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
  ])
  .then((response) => {
    console.log(response);

    let title = response.title;
    let description = response.description;
    let installation = response.installation;
    let usage = response.usage;
    let guidelines = response.guidelines;
    let test = response.test;
    let license = response.license;
    let github = response.github;
    let email = response.email;
// "Apache","Boost","BSD","Eclipse", "GNU","IBM","ISC","MIT","Mozilla","Unlicense"
// THEN a badge for that license is added near the top of the README and a 
// notice is added to the section of the README entitled License that explains which license the application is covered under
    let badge;
    switch(license){
      case 'Apache':
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case 'Boost':
        badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case 'BSD':
        badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case 'Eclipse':
        badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case 'GNU':
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case 'IBM':
        badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
        break;
      case 'ISC':
        badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
        break;
      case 'MIT':
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case 'Mozilla':
        badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case 'Unlicense':
        badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
    }
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
    let generate = 
`${badge}
# ${title}
## Table of Contents
- [Description](#project-description)
- [Installation](#installation)
- [Usage Information](#usage)
- [Guidelines Contribution](#contribution-guidelines)
- [Test Instructions](#test-instructions)
- [License](#license)
- [Contact](#github)
## Project Description
${description}       
## Installation
${installation}
## Usage
${usage}
## Contribution Guidelines
${guidelines}
## Test Instructions
${test}
## License
${license}
## Github
- [Link to Github](https://www.github.com/${github})
## Questions
If you have anyquestions please feel free to email me
- [${email}](${email})

?? 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.`;
    
    
    fs.writeFile("generatedREADME.md", generate, (err) => 
      err ? console.error(err) : console.log("Success!")
      );
  });


