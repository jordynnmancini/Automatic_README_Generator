// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Tests] (#tests)
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
  ${data.license} 

  ## Questions
  Project Owner: ${data.name}
  GitHub: ${data.GitHub}
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
