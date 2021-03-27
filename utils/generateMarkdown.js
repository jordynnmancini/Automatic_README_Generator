// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![MIT](https://www.shields.io/badge/license-MIT-green)'; 
  }
  if (license === 'GPL') {
    return '![GPL](https://www.shields.io/badge/license-GPL-blue)';
  }
  if (license === 'None') {
    return ''; 
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://www.mit.edu/~amini/LICENSE.md)';
  }
  if (license === 'GPL') {
    return '[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)'
  }
  if (license === 'None') {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the ${renderLicenseLink(license)} License.`; 
  } else {
    return 'This project has no License.'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Tests](#tests)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  The following command(s) should be run to install dependencies: ${data.installation}.

  ## Tests
  The following command(s) should be run in order to run tests: ${data.tests}. 

  ## Usage 
  ${data.usage}

  ## Contributing 
  What you need to know about contributing to this repo: ${data.credits}

  ## License 
  ${renderLicenseSection(data.license)} 

  ## Questions
  Project Owner: ${data.name} </br>
  GitHub: [${data.GitHub}](https://github.com/${data.GitHub}/) </br> 
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
