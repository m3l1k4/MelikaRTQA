# QA Automation Engineer Challenge

Welcome to RivalTech's QA Automation Engineer Challenge. This challenge will require some basic knowledge on Node.js, React, Redux, Jest, React Testing Library, and Cypress framework.
Feel free to look at some crash courses on youtube or tutorials online before you start the challenge if you are not familiar with these.
Please read through the entire README.md file once before getting started.

React and Redux are used for frontend development.
React Testing Library is used for writing unit tests for React and Redux components.
Jest is a complete testing framework which you can use to write and/or run tests.
Cypress is used to write automated ui tests (similar to selenium webdriver)

Before starting, we recommend that you run the application in the browser and get familiar with its behaviour and functionality:
ensure you have the latest Node.js LTS version installed
first unzip the project
open a terminal(Mac) or command prompt(Windows) window
then run: npm install
then run: npm start
then navigate to http://localhost:3000 in you web browser

Challenge 1:
(done)a. Using Jest and React Testing Library, write unit tests for the "Todo" react component (inside the components folder) to ensure correct functionality.
Jest and React Testing Library have been installed already so no setup is required.
You can place this test file in the components folder.
The naming convention should follow: Todo.test.js
You can find some information on how to get started below:
https://testing-library.com/docs/react-testing-library/intro/ 

You can run the tests using the following command in the terminal: npm test

(done)Once you are done, write unit tests for the App react component in a similar fashion.

(done) b. Using Jest, write unit tests for the "todos" reducer (inside the reducers folder) to ensure correct functionality
Note that Jest is already installed so you don't need to install it.
You can place this test file in the reducers folder.
The naming convention should follow: todos.test.js
you can use the "describe" and "it" convention as the sample test file above for writing the tests for the reducer

c. Write unit tests for action creators in a file called actions.test.js

Challenge 2:
a. Write UI Tests using the Cypress framework that tests the functionality of the application
You will need to install Cypress.
You can place this test file inside cypress > integration folder in your project
The naming convention should follow: todoappui.spec.js

b. Once you are done with writing the Cypress UI tests, provide a couple of commands in the package.json we can use to run the tests in headed and headless modes.

Once you finish the challenges, delete the folder called "node_modules", zip the project directory, place it on your Google Drive or One Drive and send us back the download link.

Please try and attempt all of the challenges. If you don't manage to finish, that is fine. Please send us what you were able to get done.

Good luck!

## Installation and Setup

Ensure you have the latest Node.js LTS version installed on your machine:
https://nodejs.org/en/download/

### `npm install`

Installs all of the required dependencies. You will need to run this command before starting anything else.

### `npm start`

Runs the app in the development mode.<br>
Open http://localhost:3000 to view it in the browser.

The page will reload if you make changes to the source code<br>

### `npm install --save-dev @testing-library/react`

Installs the RTL for unit testing react components.
https://testing-library.com/docs/react-testing-library/intro/

### `npm test`

Runs all unit tests in your project using Jest (you do not need to install Jest)
Please refer to their documentation page for more details and help with assertions:
https://jestjs.io/docs/en/expect

### `npm install -D cypress`

Installs the cypress framework within your project:
https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell
when you want to run your cypress tests, ensure the application is running.
Might be helpful to launch a different terminal or command prompt and run "npm start"

Feel free to install other packages or update existing ones as needed to help you with the challenge.
