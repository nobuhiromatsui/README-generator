// function to generate markdown for README
function generateMarkdown2(answer) {
  
  return `
  # Title: ${answer.title}
  ## Description
  ${answer.Description}
  
  ## Table of contents

  * [**Installation**](#Installation)
  * [**Usage**](#Usage) 
  * [**Test**](#Test)
  * **License: ${answer.license}**
  * [**Questions**](#Questions)
      
  
  ## Installation
  ${answer.installation}
  
  ## Usage
  ${answer.usage}
  
  ## Test
  ${answer.test}
  
  ## Questions
  GitHub username: [${answer.gitHub}](https://github.com/${answer.gitHub}) 
  
  email address:[${answer.email}](${answer.email})

  
  `;
}

module.exports = generateMarkdown2;


// \`\`\`\

// \`\`\`\